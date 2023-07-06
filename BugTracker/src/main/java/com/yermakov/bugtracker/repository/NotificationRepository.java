//package com.yermakov.bugtracker.repository;
//
//import java.util.Set;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import com.yermakov.bugtracker.domain.Notification;
//import com.yermakov.bugtracker.domain.Ticket;
//
//@Repository
//public interface NotificationRepository extends JpaRepository<Notification, Long> {
//	@Query("select n from Notification n "
//			+ " where n.receiver.id = :receiverId")
//	Set<Notification> findbyReceiverId(Long receiverId);
//}
