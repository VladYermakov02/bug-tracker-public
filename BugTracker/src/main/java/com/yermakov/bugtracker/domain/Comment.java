package com.yermakov.bugtracker.domain;

import java.time.ZonedDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

//'@Entity' would create a table in DB
@Entity
@Table(name = "comments")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // going to leverage MySQL auto-increment functionality
	private Long id;
	// use @JsonIgnore so we don't send this data object (assignment) back to the
	// front-end when we send Comment object
	@JsonIgnore
	@ManyToOne
	private Ticket ticket;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User createdBy;
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

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}
}
