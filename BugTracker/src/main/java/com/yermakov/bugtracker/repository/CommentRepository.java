//package com.yermakov.bugtracker.repository;
//
//import java.util.Set;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import com.yermakov.bugtracker.domain.Comment;
//
//public interface CommentRepository extends JpaRepository<Comment, Long>{
//
//	@Query("select c from Comment c "
//			+ " where c.ticket.id = :ticketId")
//	Set<Comment> findByTicketId(Long ticketId);
//}
