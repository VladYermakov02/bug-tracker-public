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
public class Notification {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // going to leverage MySQL auto-increment functionality
	private Long id;
	@ManyToOne
	@JoinColumn(name = "receiver_id")
	private User receiverId;
	@ManyToOne
	@JoinColumn(name = "sender_id")
	private User senderId;
	@Column(columnDefinition = "TIMESTAMP")
	private ZonedDateTime createdDate;
	@Column(columnDefinition = "TEXT")
	private String text;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getReceiverId() {
		return receiverId;
	}

	public void setReceiverId(User receiverId) {
		this.receiverId = receiverId;
	}

	public User getSenderId() {
		return senderId;
	}

	public void setSenderId(User senderId) {
		this.senderId = senderId;
	}

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
