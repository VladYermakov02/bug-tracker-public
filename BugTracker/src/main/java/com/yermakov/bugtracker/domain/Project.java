package com.yermakov.bugtracker.domain;

import java.time.ZonedDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name = "project")
public class Project {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	@Nonnull
	@Column(name="title")
	private String title;
	@Column(name="description")
	private String description;
	@Column(name="note", columnDefinition = "TEXT")
	private String note;
	@Column(name="created_date", columnDefinition = "TIMESTAMP")
	private ZonedDateTime createdDate;
	@Column(name="last_update", columnDefinition = "TIMESTAMP")
	private ZonedDateTime lastUpdate;

	// TODO: maybe add
	@JsonIgnore
	@ManyToMany(mappedBy = "assignedProjects")
	private Set<User> usersAssigned;

	public Project() {
	}

	public Project(Long id, String title, String description, String note, Set<User> usersAssigned) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.note = note;
		this.lastUpdate = ZonedDateTime.now();
		this.usersAssigned = usersAssigned;
	}

	public Project(String title, String description, String note, Set<User> usersAssigned) {
		this.title = title;
		this.description = description;
		this.note = note;
		this.createdDate = ZonedDateTime.now();
		this.lastUpdate = ZonedDateTime.now();
		this.usersAssigned = usersAssigned;
	}

	public Project(String title, String description, String note) {
		this.title = title;
		this.description = description;
		this.note = note;
		this.createdDate = ZonedDateTime.now();
		this.lastUpdate = ZonedDateTime.now();
	}

	public Set<User> getUsersAssigned() {
		return usersAssigned;
	}

	public void setUsersAssigned(Set<User> usersAssigned) {
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

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public ZonedDateTime getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(ZonedDateTime lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", title=" + title + ", description=" + description + ", note=" + note
				+ ", createdDate=" + createdDate + ", lastUpdate=" + lastUpdate + ", usersAssigned=" + usersAssigned
				+ "]";
	}
}
