package com.yermakov.bugtracker.dto;

import java.time.ZonedDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.yermakov.bugtracker.domain.User;

// TODO: add Ticket to here later

// created for handling last update time
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "project_id")
public class ProjectDto {
	private Long id;
	private String title;
	private String description;
	private String note;
	private Set<User> usersAssigned;
	
	
	public ProjectDto() {
		super();
	}

	public ProjectDto(Long id, String title, String description, String note, Set<User> usersAssigned) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.note = note;
		this.usersAssigned = usersAssigned;
	}

	public ProjectDto(Long id, String title, String description, String note) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.note = note;
	}

	public ProjectDto(String title, String description, String note) {
		super();
		this.title = title;
		this.description = description;
		this.note = note;
	}

	public ProjectDto(String title, String description, String note, Set<User> usersAssigned) {
		super();
		this.title = title;
		this.description = description;
		this.note = note;
		this.usersAssigned = usersAssigned;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Set<User> getUsersAssigned() {
		return usersAssigned;
	}

	public void setUsersAssigned(Set<User> usersAssigned) {
		this.usersAssigned = usersAssigned;
	}

	@Override
	public String toString() {
		return "ProjectDto [id=" + id + ", title=" + title + ", description=" + description + ", note=" + note
				+ ", usersAssigned=" + usersAssigned + "]";
	}
}
