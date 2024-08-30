package com.myorg.quizservice.entity;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "choice")
public class Choice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "choice_id")
	private long choiceId;

	@Column(name = "correct_answer")
	private boolean correctAnswer;

	@Column(name = "choice_text")
	private String choiceText;

	public Choice() {
	}

	public Choice(long choiceId, boolean correctAnswer, String choiceText) {
		super();
		this.choiceId = choiceId;
		this.correctAnswer = correctAnswer;
		this.choiceText = choiceText;

	}

	public long getChoiceId() {
		return choiceId;
	}

	public void setChoiceId(long choiceId) {
		this.choiceId = choiceId;
	}

	public boolean isCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(boolean correct_answer) {
		this.correctAnswer = correct_answer;
	}

	public String getChoiceText() {
		return choiceText;
	}

	public void setChoiceText(String choiceText) {
		this.choiceText = choiceText;
	}

}
