package com.yermakov.bugtracker.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yermakov.bugtracker.domain.Ticket;
import com.yermakov.bugtracker.domain.User;
import com.yermakov.bugtracker.repository.TicketRepository;
import com.yermakov.bugtracker.repository.UserRepository;

@Service
public class TicketService {
	
	@Autowired
	private TicketRepository ticketRepo;

	
//	void postUnassignedTicket(Long projectId) {
//		
//	}

	public List<Ticket> findTicketsByUser(User user) {
		return ticketRepo.findByDeveloper(user);
	}
}
