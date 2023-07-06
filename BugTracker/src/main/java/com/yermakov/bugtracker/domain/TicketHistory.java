package com.yermakov.bugtracker.domain;

import java.time.ZonedDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class TicketHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // going to leverage MySQL auto-increment functionality
	private Long id;
	@JoinColumn(name = "user_id")
	private User senderId;
	@Column(columnDefinition = "TEXT")
	private String oldValue;
	@Column(columnDefinition = "TEXT")
	private String newValue;
	@Column(columnDefinition = "TIMESTAMP")
	private ZonedDateTime createdDate;
	@ManyToOne
	private Ticket ticket;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public User getSenderId() {
		return senderId;
	}

	public void setSenderId(User senderId) {
		this.senderId = senderId;
	}

	public String getOldValue() {
		return oldValue;
	}

	public void setOldValue(String oldValue) {
		this.oldValue = oldValue;
	}

	public String getNewValue() {
		return newValue;
	}

	public void setNewValue(String newValue) {
		this.newValue = newValue;
	}

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
	}
}
