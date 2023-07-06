//package com.yermakov.bugtracker.repository;
//
//import java.util.Set;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import com.yermakov.bugtracker.domain.Ticket;
//import com.yermakov.bugtracker.domain.TicketHistory;
//
//@Repository
//public interface TicketHistoryRepository  extends JpaRepository<TicketHistory, Long> {
//
//	@Query("select th from TicketHistory th "
//			+ " where th.ticket.id = :ticketId"
//			+ " and th.sender.id = :senderId"
//			+ " and th.id = :historyId")
//	Set<Ticket> findEntryByTicketIdAndSenderIdandHistoryId(Long historyId, Long ticketId, Long senderId);
//	
//	@Query("select th from TicketHistory th "
//			+ " where th.ticket.id = :ticketId"
//			+ " and th.receiver.id = :receiverId"
//			+ " and th.id = :historyId")
//	Set<Ticket> findEntryByTicketIdAndReceiverIdandHistoryId(Long historyId, Long ticketId, Long receiverId);
//}
