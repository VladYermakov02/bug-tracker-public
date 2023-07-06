package com.yermakov.bugtracker.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yermakov.bugtracker.domain.Project;
import com.yermakov.bugtracker.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	// JPA will type the finding query of the username for us
	Optional<User> findByUsername(String username);

	Optional<User> findById(Long id);
	
	List<User> findByOrganization(String organization);
	
	// after select it's better where the name name of the repository is used (User) and not how it is done here (Project)
	@Query(value = "SELECT p.* FROM project p " 
			+ " INNER JOIN user_project up " 
			+ " ON p.id = up.project_id "
			+ " WHERE up.user_id = :userId", nativeQuery = true)
	Set<Project> findByUserIdContaining(Long userId);
	
//	List<User> findByAssignedProjects(Set<Project> assignedProjects);
	
	// 'Containing' is usually used for lists
//	List<User> findByOrganizationContaining(String organization);
}
