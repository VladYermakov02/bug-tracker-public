package com.yermakov.bugtracker.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.yermakov.bugtracker.filter.JwtFilter;
import com.yermakov.bugtracker.util.CustomPasswordEncoder;

import jakarta.servlet.http.HttpServletResponse;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private CustomPasswordEncoder customPasswordEncoder;
	@Autowired
	JwtFilter jwtFilter;

    @Bean
    AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService);
		provider.setPasswordEncoder(customPasswordEncoder.getPasswordEncoder());
		return provider;
	}

    @Bean
    AuthenticationManager authenticationManagerBean() throws Exception {
		return new ProviderManager(Arrays.asList(authenticationProvider()));
	}

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// working basic code
		// http.csrf(csrf ->
		// csrf.disable()).authorizeHttpRequests().anyRequest().authenticated().and()
		// .httpBasic(withDefaults());

		// Enable CORS and disable CSRF
		// Enable CORS and disable CSRF
	    http.csrf(csrf -> csrf.disable());
	    http.cors(cors -> cors.disable());
	    
	    // Set session management to stateless
        http.sessionManagement(management -> management
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        
        // Set unauthorized requests exception handler
        http.exceptionHandling(handling -> handling.authenticationEntryPoint((request, response, exception) -> {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, exception.getMessage());
        }));

		http.authorizeHttpRequests(
				auth -> auth.requestMatchers("/api/auth/**").permitAll().anyRequest().authenticated());

		// we say that when UsernamePasswordAuthenticationFilter happens, use our jwtFilter first
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}
