package com.yermakov.bugtracker.web;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yermakov.bugtracker.domain.Ticket;
import com.yermakov.bugtracker.domain.User;
import com.yermakov.bugtracker.service.TicketService;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
	
	@Autowired
	TicketService ticketService;
	
	@GetMapping("")
	public ResponseEntity<List<Ticket>> getUserTickets(@AuthenticationPrincipal User user) {
		List<Ticket> userTickets = ticketService.findTicketsByUser(user);
		return ResponseEntity.ok(userTickets);
	}
	
//	@PostMapping("/projects/{projectId}")
//	public ResponseEntity<?> postUnassignedTicket(@PathVariable Long projectId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@PostMapping("/projects/{projectId}/users/{userId}")
//	public ResponseEntity<?> postAssignedTicket(@PathVariable Long projectId, @PathVariable Long userId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@GetMapping("/{ticketId}/projects/{projectId}")
//	public ResponseEntity<?> getTicketFromProject(@PathVariable Long ticketId, @PathVariable Long projectId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@GetMapping("/{ticketId}/projects/{projectId}/users/{userId}")
//	public ResponseEntity<?> getTicketFromProjectFromUser(@PathVariable Long ticketId, @PathVariable Long projectId, @PathVariable Long userId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@GetMapping("/{ticketId}/users/{userId}")
//	public ResponseEntity<?> getTicketFromUser(@PathVariable Long ticketId, @PathVariable Long userId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@PutMapping("/{ticketId}/projects/{projectId}")
//	public ResponseEntity<?> putTicketFromProject(@PathVariable Long ticketId, @PathVariable Long projectId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@PutMapping("/{ticketId}/projects/{projectId}/users/{userId}")
//	public ResponseEntity<?> putTicketFromProjectFromUser(@PathVariable Long ticketId, @PathVariable Long projectId, @PathVariable Long userId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@PutMapping("/{ticketId}/users/{userId}")
//	public ResponseEntity<?> putTicketFromUser(@PathVariable Long ticketId, @PathVariable Long userId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@DeleteMapping("")
//	public ResponseEntity<?> deleteTickets() {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
//	
//	@DeleteMapping("/{ticketId}")
//	public ResponseEntity<?> deleteTicket(@PathVariable Long userId, @PathVariable Long projectId) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//	}
}
