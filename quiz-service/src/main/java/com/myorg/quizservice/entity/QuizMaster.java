package com.myorg.quizservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="quiz_master")
public class QuizMaster {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column(name="question_duration")
	private long questionDuration;
	
	@Column(name="questions_per_quiz")
	private int questionsPerQuiz;
	
	@Column(name="passing_score")
	private int passingScore;
	
	@Column(name="active_status")
	private boolean activeStatus;
	
	public QuizMaster() {}
	
	public QuizMaster(long id, long questionDuration, int questionsPerQuiz, int passingScore, boolean activeStatus) {
		super();
		this.id = id;
		this.questionDuration = questionDuration;
		this.questionsPerQuiz = questionsPerQuiz;
		this.passingScore = passingScore;
		this.activeStatus = activeStatus;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getQuestionDuration() {
		return questionDuration;
	}

	public void setQuestionDuration(long questionDuration) {
		this.questionDuration = questionDuration;
	}

	public int getQuestionsPerQuiz() {
		return questionsPerQuiz;
	}

	public void setQuestionsPerQuiz(int questionsPerQuiz) {
		this.questionsPerQuiz = questionsPerQuiz;
	}

	public int getPassingScore() {
		return passingScore;
	}

	public void setPassingScore(int passingScore) {
		this.passingScore = passingScore;
	}

	public boolean isActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(boolean activeStatus) {
		this.activeStatus = activeStatus;
	};
	
	
	
}
