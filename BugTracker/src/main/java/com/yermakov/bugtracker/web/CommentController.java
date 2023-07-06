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
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.yermakov.bugtracker.domain.Comment;
//import com.yermakov.bugtracker.domain.User;
//import com.yermakov.bugtracker.dto.CommentDto;
//import com.yermakov.bugtracker.service.CommentService;
//
////1) Controllers should only depend on services and never on repositories
////2) Controllers listen to the end-points
////so to speak listen to all the posts, reads, deletes, updates and so on
////3) Controllers don't talk to Repositories, they talk to Services
////@RestController returns Data and @Controller returns Views
////@RequestMapping("/api/comments") is a link that refers to Comments
//@RestController
//@RequestMapping("/api/comments")
//public class CommentController {
//
////	@Autowired CommentService commentService;
//	
//	// DTO - Data Transfer Object
//	// created it because front-end sends us only 3 params 
//	// when we need a few more to fill a Comment object so we can put it to the database
//	// @AuthenticationPrincipal User user - gets User object
//	// @RequestBody means smth is inside the body of the request
////	@PostMapping("")
////	public ResponseEntity<Comment> createComment(@RequestBody CommentDto commentDto, @AuthenticationPrincipal User user) {
////		Comment comment = commentService.save(commentDto,user);
////		return ResponseEntity.ok(comment);
////	}
////	// @RequestMapping("/api/comments") + @PutMapping("{commentId}") == /comments/{commentId}
////	@PutMapping("{commentId}")
////	public ResponseEntity<Comment> updateComment(@RequestBody CommentDto commentDto, @AuthenticationPrincipal User user) {
////		Comment comment = commentService.save(commentDto,user);
////		return ResponseEntity.ok(comment);
////	}
////	
////	// @RequestParam is part of url itself rather than body
////	@GetMapping("")
////	public ResponseEntity<Set<Comment>> getCommentsByAssignment(@RequestParam Long ticketId) {
////		Set<Comment> comments = commentService.getCommentsByTicketId(ticketId);
////		return ResponseEntity.ok(comments);
////	}
////	
////	// deleting (for git)
////	@DeleteMapping("{commentId}")
//// public ResponseEntity<?> deleteComment (@PathVariable Long commentId) {
////     try {
////         commentService.delete(commentId);
////         return ResponseEntity.ok("Comment deleted");
////     } catch (Exception e) {
////         e.printStackTrace();
////         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
////     }
//// }
//}
