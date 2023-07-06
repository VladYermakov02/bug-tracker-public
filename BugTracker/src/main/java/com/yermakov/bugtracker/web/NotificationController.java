//package com.yermakov.bugtracker.web;
//
//import java.util.Set;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.yermakov.bugtracker.domain.Notification;
//import com.yermakov.bugtracker.domain.User;
//import com.yermakov.bugtracker.service.NotificationService;
//
//@RestController
//@RequestMapping("/api/notifications")
//public class NotificationController {
//
//	@Autowired
//	NotificationService notificationService;
//
//	@PostMapping("")
//	public ResponseEntity<Notification> createNotification(@RequestBody Notification notification,
//			@AuthenticationPrincipal User user) {
//		Notification notificationLocal = notificationService.save(notification, user);
//		return ResponseEntity.ok(notificationLocal);
//	}
//
//	// @RequestParam is part of url itself rather than body
//	@GetMapping("")
//	public ResponseEntity<Set<Notification>> getNotificationsByReceiver(@RequestParam Long receiverId) {
//		Set<Notification> notifications = notificationService.getNotificationsByReceiverId(receiverId);
//		return ResponseEntity.ok(notifications);
//	}
//
//	// deleting (for git)
//	@DeleteMapping("{notificationId}")
//    public ResponseEntity<?> deleteNotification (@PathVariable Long notificationId) {
//        try {
//            notificationService.delete(notificationId);
//            return ResponseEntity.ok("Notification deleted");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
//}
