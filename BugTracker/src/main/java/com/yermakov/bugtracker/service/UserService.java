package com.yermakov.bugtracker.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yermakov.bugtracker.domain.Project;
import com.yermakov.bugtracker.domain.User;
import com.yermakov.bugtracker.repository.ProjectRepository;
import com.yermakov.bugtracker.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ProjectRepository projectRepo;

	public Optional<User> finUserByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	public User create() {
		return userRepo.save(new User());
	}

	public List<User> findByOrganization(User user) {
		return userRepo.findByOrganization(user.getOrganization());
	}

	public Set<Project> findByUserIdContaining(User user) {
		return userRepo.findByUserIdContaining(user.getId());
	}

	public User findByIdAndOrganization(Long userId, User user) throws Exception {
		Optional<User> userOptional = userRepo.findById(userId);
		if (userOptional != null) {
			String org1 = userOptional.get().getOrganization();
			String org2 = user.getOrganization();
			if (org1.compareTo(org2) == 0) {
				return userOptional.get();
			}
			throw new Exception("This user is from wrong organization");
		}
		throw new Exception("There is no user by that id");
	}

	public Project findAssignedProject(Long projectId, User user) {
		Set<Project> assignedProjects = userRepo.getReferenceById(user.getId()).getAssignedProjects();
		Project inputtedProject = projectRepo.getReferenceById(projectId);
		if (assignedProjects.contains(inputtedProject)) {
		      for (Project p : assignedProjects) {
		        if (p.equals(inputtedProject))
		          return p;
		      }
		   }
		return null;
	}

	public User save(User passedUser) {
		return userRepo.save(passedUser);
	}

	public void delete(Long userId) {
		userRepo.deleteById(userId);		
	}

	public boolean addProjectToAssigned(Long userId, Long projectId) {
//		User user = userRepo.getById(userId);
		return projectRepo.findById(projectId).get().getUsersAssigned().add(userRepo.getReferenceById(userId));
	}

	// TODO: do everything that below that line
	public void deleteUserFromProject(Long userId, Long projectId) {
		// TODO Auto-generated method stub
		
	}
}
