package com.yermakov.bugtracker.web;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.yermakov.bugtracker.domain.Project;
import com.yermakov.bugtracker.domain.User;
import com.yermakov.bugtracker.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("")
	// TODO: pass later a user object but separate one, not from
	// @AuthenticationPrincipal
	// the user object admin creates
	public ResponseEntity<User> createUser(@AuthenticationPrincipal User user) {
		User newUser = userService.create();
		return ResponseEntity.ok(newUser);
	}

	@GetMapping("")
	public ResponseEntity<List<User>> getAllFromOrganization(@AuthenticationPrincipal User user) {
		List<User> organizationUsers = userService.findByOrganization(user);
		return ResponseEntity.ok(organizationUsers);
	}

	@GetMapping("/projects")
	public ResponseEntity<Set<Project>> getUserAssignedProjects(@AuthenticationPrincipal User user) {
		Set<Project> projectsByAuthUser = userService.findByUserIdContaining(user);
		return ResponseEntity.ok(projectsByAuthUser);
	}

	@GetMapping("/{userId}")
	public ResponseEntity<User> getUser(@PathVariable Long userId, @AuthenticationPrincipal User user) {
		try {
			User localUser = userService.findByIdAndOrganization(userId, user);
			return ResponseEntity.ok(localUser);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// TODO: solve problem with POJO project class
	@GetMapping("/projects/{projectId}")
	public ResponseEntity<Project> getAssignedProject(@PathVariable Long projectId,
			@AuthenticationPrincipal User user) {
		Project assignedProject = userService.findAssignedProject(projectId, user);
		return ResponseEntity.ok(assignedProject);
	}
	
	// TODO: doesn't work, fix later. Add DTO maybe, when this method is presented
	// in front-end
	@PutMapping("/{userId}")
	public ResponseEntity<User> updateUser(@PathVariable Long projectId, @RequestBody User passedUser) {
		User updatedUser = userService.save(passedUser);
		return ResponseEntity.ok(updatedUser);
	}

	// TODO: just does not work
	@PutMapping("/{userId}/projects/{projectId}")
	public ResponseEntity<?> updateUser(@PathVariable Long userId, @PathVariable Long projectId) {
		if (userService.addProjectToAssigned(userId, projectId)) {
			return ResponseEntity.ok().build();	
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
		try {
			userService.delete(userId);
			return ResponseEntity.ok("Project is deleted");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	// TODO: do everything that below that line
	
	@DeleteMapping("/{userId}/projects/{projectId}")
	public ResponseEntity<?> deleteUserFromProject(@PathVariable Long userId, @PathVariable Long projectId) {
		try {
			userService.deleteUserFromProject(userId, projectId);
			return ResponseEntity.ok("Project is deleted");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
