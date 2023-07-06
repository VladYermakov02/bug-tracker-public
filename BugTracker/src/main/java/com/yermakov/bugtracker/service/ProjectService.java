package com.yermakov.bugtracker.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yermakov.bugtracker.domain.Project;
import com.yermakov.bugtracker.domain.User;
import com.yermakov.bugtracker.dto.ProjectDto;
import com.yermakov.bugtracker.repository.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	public Project create(User user) {
		Project project = new Project();
		Set<User> users = new HashSet<>();
		users.add(user);
		project.setUsersAssigned(users);
		// TODO: make my own save because here it doesn't set connection automatically in project_user
		return projectRepository.save(project);
	}
	
//	public Set<Project> findByUser(User user) {
//		return projectRepository.findByUserIdContaining(user.getId());
//	}

	public Set<Project> findByUserIdContaining(Long userId) {
		return projectRepository.findByUserIdContaining(userId);
	}
	
	public Set<Project> findByUsersAssignedId(Long userId) {
		return projectRepository.findByUsersAssignedId(userId);
//		return projectRepository.findAll();
	}
	
	public Set<Project> findByUsersAssignedToProject(Long projectId) {
		return projectRepository.findByUsersAssignedToProject(projectId);
	}

	public Optional<Project> findById(Long projectId) {
		return projectRepository.findById(projectId);
	}

	public Project save(Project project) {
//		try {
//			Project project = projectRepository.findById(projectId)
//					.orElseThrow(() -> new Exception("Project not found with id: " + projectId));
//			project.setTitle(projectDto.getTitle());
//			project.setDescription(projectDto.getDescription());
//			project.setNote(projectDto.getNote());
//			project.setUsersAssigned(projectDto.getUsersAssigned());
//			return projectRepository.save(project);
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null;
//		}
		return projectRepository.save(project);
	}

	public void delete(Long projectId) {
		projectRepository.deleteById(projectId);
	}

	public void deleteAll() {
		projectRepository.deleteAll();
	}
}
