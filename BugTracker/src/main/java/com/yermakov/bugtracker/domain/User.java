package com.yermakov.bugtracker.domain;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.annotation.Nonnull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name = "users")
public class User implements UserDetails {
	private static final long serialVersionUID = -8738689297217779951L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	@Nonnull
	@Column(name="name")
	private String name;
	@Nonnull
	@Column(name="surname")
	private String surname;
	@Nonnull
	@Column(name="username", unique = true)
	private String username;
	@Nonnull
	@Column(name="phone")
	private String phone;
	@Nonnull
	@Column(name="position")
	private String position;
	@Nonnull
	@Column(name="organization")
	private String organization;
	@JsonIgnore
	@Nonnull
	@Column(name="password")
	private String password;
	// spring demands prefix "ROLE_" to work properly to all authorities
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "user")
	@JsonIgnore
	@Nonnull
	private List<Authority> authorities = new ArrayList<>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "user_project", joinColumns = {
			@JoinColumn(name = "user_id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "project_id", referencedColumnName = "id") })
	private Set<Project> assignedProjects;
	
	public User() {
	}
	
	public User(String name, String surname, String username, String phone, String position,
			String organization, String password, List<Authority> authorities, Set<Project> assignedProjects) {
		this.name = name;
		this.surname = surname;
		this.username = username;
		this.phone = phone;
		this.position = position;
		this.organization = organization;
		this.password = password;
		this.assignedProjects = assignedProjects;
	}

	public User(Long id, String name, String surname, String username, String phone, String position,
			String organization, String password) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.username = username;
		this.phone = phone;
		this.position = position;
		this.organization = organization;
		this.password = password;
	}

	public User(Long id, String name, String surname, String username, String phone, String position,
			String organization, String password, Set<Project> assignedProjects) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.username = username;
		this.phone = phone;
		this.position = position;
		this.organization = organization;
		this.password = password;
		this.assignedProjects = assignedProjects;
	}

	public Set<Project> getAssignedProjects() {
		return assignedProjects;
	}

	public void setAssignedProjects(Set<Project> assignedProjects) {
		this.assignedProjects = assignedProjects;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// spring demands prefix "ROLE_" to work properly to all authorities
		return authorities;
	}

	public void setAuthorities(List<Authority> authorities) {
		this.authorities = authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	@Override
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	@Override
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
