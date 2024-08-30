package com.myorg.quizservice.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="question")
public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="question_id")
	private long questionId;
	
	@Column(name="question_name")
	private String name;
	
	@Column(name="question_type")
	@Enumerated(EnumType.STRING)
	private QuestionType type;
	
	@Column(name="active")
	private boolean isActive;
	
	@OneToMany(targetEntity=Choice.class,cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="fk_q_c",referencedColumnName="question_id" )
	private List<Choice> choices;

	
	public Question() {}
	public Question(long questionId, String name, QuestionType type, boolean isActive, List<Choice> choices) {
		super();
		this.questionId = questionId;
		this.name = name;
		this.type = type;
		this.isActive = isActive;
		this.choices = choices;
	}
	public long getQuestionId() {
		return questionId;
	}
	public void setQuestionId(long questionId) {
		this.questionId = questionId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public QuestionType getType() {
		return type;
	}
	public void setType(QuestionType type) {
		this.type = type;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	public List<Choice> getChoices() {
		return choices;
	}
	public void setChoices(List<Choice> choices) {
		this.choices = choices;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Question [questionId=");
		builder.append(questionId);
		builder.append(", name=");
		builder.append(name);
		builder.append(", type=");
		builder.append(type);
		builder.append(", isActive=");
		builder.append(isActive);
		builder.append(", choices=");
		builder.append(choices);
		builder.append("]");
		return builder.toString();
	}
	
	
}
