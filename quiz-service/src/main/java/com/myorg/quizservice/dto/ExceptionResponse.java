package com.myorg.quizservice.dto;

public class ExceptionResponse {

	public String timestamp;
	public int code;
	public String error;
	
	public ExceptionResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ExceptionResponse(String timestamp, int code, String error) {
		super();
		this.timestamp = timestamp;
		this.code = code;
		this.error = error;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
	
	
}
