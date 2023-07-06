package com.yermakov.bugtracker.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yermakov.bugtracker.domain.Ticket;
import com.yermakov.bugtracker.domain.User;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
	
//	@Query("select t from Ticket t "
//			+ " where t.project.id = :projectId"
//			+ " and t.id = :ticketId")
//	Set<Ticket> findByTicketIdAndProjectId(Long ticketId, Long projectId);
//	
//	@Query("select t from Ticket t "
//			+ " where t.user.id = :userId"
//			+ " and t.id = :ticketId")
//	Set<Ticket> findByTicketIdAndUserId(Long ticketId, Long userId);
//	
//	@Query("select t from Ticket t "
//			+ " where t.id = :ticketId")
//	Optional<Ticket> findById(Long ticketId);
//	
//	@Query("select t from Ticket t "
//			+ " where t.project.id = :projectId"
//			+ " and t.user.id = :userId"
//			+ " and t.id = :ticketId")
//	Set<Ticket> findByTicketIdAndUserIdAndProjectId(Long ticketId, Long userId,Long projectId);

//	@Query("select t from Ticket t "
//	+ " where t.users.id = :userId")
	@Query(value = "SELECT t.* FROM ticket t" 
			+ " where t.user_id = :userId", nativeQuery = true)
	Set<Ticket> findByUserId(Long userId);
	
	List<Ticket> findByDeveloper(User developer);
}
