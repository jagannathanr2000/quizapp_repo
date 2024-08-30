package com.myorg.quizservice.dto;

import java.util.List;

public class RequestDTO {
	
	private long question_id;
	private List<Long> choices;
	public RequestDTO() {}
	public RequestDTO(long question_id, List<Long> choices) {
		super();
		this.question_id = question_id;
		this.choices = choices;
	}
	public long getQuestion_id() {
		return question_id;
	}
	public void setQuestion_id(long question_id) {
		this.question_id = question_id;
	}
	public List<Long> getChoices() {
		return choices;
	}
	public void setChoices(List<Long> choices) {
		this.choices = choices;
	};
	
	
	
	
}
