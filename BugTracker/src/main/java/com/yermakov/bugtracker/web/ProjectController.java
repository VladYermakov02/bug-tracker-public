package com.yermakov.bugtracker.web;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.yermakov.bugtracker.domain.Project;
import com.yermakov.bugtracker.domain.User;
import com.yermakov.bugtracker.dto.ProjectDto;
import com.yermakov.bugtracker.service.ProjectService;
import com.yermakov.bugtracker.service.UserService;

//1) Controllers should only depend on services and never on repositories
//2) Controllers listen to the end-points
//so to speak listen to all the posts, reads, deletes, updates and so on
//3) Controllers don't talk to Repositories, they talk to Services
//and only than Services talk to Repositories
//@RestController returns Data and @Controller returns Views
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@PostMapping("")
	public ResponseEntity<Project> createProject(@AuthenticationPrincipal User user) {
		// TODO: maybe pass project so if the user pass info
		// and only then hits create button 
		// the info would go into object rather then just vanish
		Project newProject = projectService.create(user);
		return ResponseEntity.ok(newProject);
	}

	// TODO: maybe delete later when I have GET users/projects
	@GetMapping("")
	public ResponseEntity<Set<Project>> getUserAssignedProjects(@AuthenticationPrincipal User user) {
		Set<Project> projectsByUser = projectService.findByUsersAssignedId(user.getId());
		return ResponseEntity.ok(projectsByUser);
	}

//	@GetMapping("")
//	public ResponseEntity<ObjectNode> getUserAssignedProjects(@AuthenticationPrincipal User user) {
//		Set<Project> projectsByUser = projectService.findByUserIdContaining(user.getId());
//		ObjectMapper mapper = new ObjectMapper();
//		ObjectNode objectNode = mapper.createObjectNode();
//		objectNode.put("projects", mapper.valueToTree(projectsByUser));
//		return ResponseEntity.ok(objectNode);
//	}

	// path variable / dynamic variable
	@GetMapping("/{projectId}")
	public ResponseEntity<Project> getProject(@PathVariable Long projectId, @AuthenticationPrincipal User user) {
		Optional<Project> projectOptional = projectService.findById(projectId);
		// TODO: maybe remove orElse from here
		return ResponseEntity.ok(projectOptional.orElse(new Project()));
	}

	@GetMapping("/{projectId}/users")
	public ResponseEntity<Set<Project>> getUsersAssignedToProject(@PathVariable Long projectId, @AuthenticationPrincipal User user) {
		Set<Project> usersByProject = projectService.findByUsersAssignedToProject(projectId);
		return ResponseEntity.ok(usersByProject);
	}

	// TODO: doesn't work, fix later. Add DTO maybe, when this method is presented in front-end
	// @RequestBody is a project we're getting from the front-end
	@PutMapping("/{projectId}")
	public ResponseEntity<Project> updateProject(@PathVariable Long projectId, @RequestBody Project project,
			@AuthenticationPrincipal User user) {
		Project updatedProject = projectService.save(project);
		return ResponseEntity.ok(updatedProject);
	}

	@DeleteMapping("/{projectId}")
	public ResponseEntity<?> deleteProject(@PathVariable Long projectId) {
		try {
			projectService.delete(projectId);
			return ResponseEntity.ok("Project is deleted");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// TODO: test it later
	@DeleteMapping("")
	public ResponseEntity<?> deleteProjects() {
		try {
			projectService.deleteAll();
			return ResponseEntity.ok("All projects are deleted");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

//	@GetMapping("/users")
//	public ResponseEntity<?> getUsersAssigned(@PathVariable Long userId, @AuthenticationPrincipal User user) {
//		Set<Project> projects = projectService.findByUsersAssignedId(userId);
//		return ResponseEntity.ok(projects);
//	}
}
