package com.myorg.quizservice.dto;

import java.util.List;
import com.myorg.quizservice.entity.Choice;


public class ResponseDTO {
	
	public long question_id;
	public String question_name;
	public String question_type;
	public List<Choice> choices;
	
	
	public ResponseDTO() {}

	

	



	public ResponseDTO(long question_id, String question_name, String question_type, List<Choice> choices) {
		super();
		this.question_id = question_id;
		this.question_name = question_name;
		this.question_type = question_type;
		this.choices = choices;
	}







	public long getQuestion_id() {
		return question_id;
	}


	public void setQuestion_id(long question_id) {
		this.question_id = question_id;
	}


	public String getQuestion_name() {
		return question_name;
	}


	public void setQuestion_name(String question_name) {
		this.question_name = question_name;
	}


	public List<Choice> getChoices() {
		return choices;
	}


	public void setChoices(List<Choice> choices) {
		this.choices = choices;
	}

	public String getQuestion_type() {
		return question_type;
	}

	public void setQuestion_type(String question_type) {
		this.question_type = question_type;
	};
	
	
	
}
