package com.myorg.quizservice.exception;





import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.myorg.quizservice.dto.ExceptionResponse;


@ControllerAdvice
public class QuizAppExceptionHandler {

	@ExceptionHandler(value=QuestionNotFoundException.class)
	public ResponseEntity<ExceptionResponse> handleQuizNotFound(QuestionNotFoundException e) {
		ExceptionResponse response = new ExceptionResponse();
		response.setCode(404);
		response.setError(e.getMessage());
		response.setTimestamp(new Date().toString());
		
		return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
	}
}
