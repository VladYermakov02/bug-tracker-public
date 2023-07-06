package com.yermakov.bugtracker.domain;

import java.io.File;
import java.time.ZonedDateTime;
import java.util.Set;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Nonnull
	private String title;
	private String description;
	@Column(columnDefinition = "TEXT")
	private String note;
	private User createdBy;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User developer;
	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project assignedProject;
	@Column(columnDefinition = "TIMESTAMP")
	private ZonedDateTime createdDate;
	@Column(columnDefinition = "TIMESTAMP")
	private ZonedDateTime lastUpdate;
	private File attachment;
	@Column(columnDefinition = "TEXT")
	private String attachmentDescription;
	private String type;
	private String status;
	private String priority;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public User getDeveloper() {
		return developer;
	}

	public void setDeveloper(User developer) {
		this.developer = developer;
	}

	public Project getAssignedProject() {
		return assignedProject;
	}

	public void setAssignedProject(Project assignedProject) {
		this.assignedProject = assignedProject;
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

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
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

	public File getAttachment() {
		return attachment;
	}

	public void setAttachment(File attachment) {
		this.attachment = attachment;
	}

	public String getAttachmentDescription() {
		return attachmentDescription;
	}

	public void setAttachmentDescription(String attachmentDescription) {
		this.attachmentDescription = attachmentDescription;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}
}
