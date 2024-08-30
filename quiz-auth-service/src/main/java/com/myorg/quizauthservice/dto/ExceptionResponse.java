package com.myorg.quizauthservice.dto;

public class ExceptionResponse {
	
	public String message;
	public int statusCode;
	public String timestamp;
	
	public ExceptionResponse() {}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public ExceptionResponse(String message, int statusCode, String timestamp) {
		super();
		this.message = message;
		this.statusCode = statusCode;
		this.timestamp = timestamp;
	}
	
	
}
