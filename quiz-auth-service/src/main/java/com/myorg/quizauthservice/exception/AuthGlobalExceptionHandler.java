package com.myorg.quizauthservice.exception;

import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.myorg.quizauthservice.dto.ExceptionResponse;

@ControllerAdvice
public class AuthGlobalExceptionHandler {

	@ExceptionHandler(value= {UserNotFoundException.class,RuntimeException.class})
	public ResponseEntity<ExceptionResponse> userNotFound(Exception e) {
		
		ExceptionResponse u = new ExceptionResponse();
		u.setMessage(e.getMessage());
		u.setTimestamp(new Date().toString());
		u.setStatusCode(404);
		
		return ResponseEntity.ok(u);
		
	}
	
	@ExceptionHandler(value= {UserAlreadyExistException.class})
	public ResponseEntity<ExceptionResponse> handleExistingUser(Exception e) {
		
		ExceptionResponse u = new ExceptionResponse();
		u.setMessage(e.getMessage());
		u.setTimestamp(new Date().toString());
		u.setStatusCode(409);
		
		return ResponseEntity.ok(u);
		
	}
}
