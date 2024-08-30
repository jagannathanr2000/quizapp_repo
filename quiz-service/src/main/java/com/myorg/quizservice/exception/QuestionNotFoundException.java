package com.myorg.quizservice.exception;

public class QuestionNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	public QuestionNotFoundException(String message) {
		super(message);
	}
}
