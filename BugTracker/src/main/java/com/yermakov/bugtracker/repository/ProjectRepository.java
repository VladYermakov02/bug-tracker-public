package com.yermakov.bugtracker.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.yermakov.bugtracker.domain.Project;
import com.yermakov.bugtracker.domain.User;

public interface ProjectRepository extends JpaRepository<Project, Long> {

	@Query(value = "SELECT p.* FROM project p " 
			+ " INNER JOIN user_project up " 
			+ " ON p.id = up.project_id "
			+ " WHERE up.user_id = :userId", nativeQuery = true)
	Set<Project> findByUserIdContaining(Long userId);
	
	Set<Project> findByUsersAssignedId(Long userId);

	// after select it's better where the name name of the repository is used (User) and not how it is done here (Project)
	@Query(value = "SELECT u.* FROM users u " 
			+ " INNER JOIN user_project up " 
			+ " ON u.id = up.user_id "
			+ " WHERE up.project_id = :projectId", nativeQuery = true)
	Set<Project> findByUsersAssignedToProject(Long projectId);
}

//	@Query("SELECT u.* FROM users u " 
//			+ " INNER JOIN user_project up " 
//			+ " ON u.id = up.project_id "
//			+ " WHERE up.user_id = :userId")
//	Set<Project> findByUserId(Long userId);

//	List<Project> findByTitleContaining(String title);

//	@Query("SELECT project.* "
//	+ " FROM project "
//	+ " JOIN user_project ON project.id = user_project.project_id "
//	+ " JOIN users ON users.id = user_project.user_id "
//	+ " WHERE users.id = :userId")
//Set<Project> findByUserId(Long userId);