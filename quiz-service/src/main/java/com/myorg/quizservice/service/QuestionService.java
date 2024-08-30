package com.myorg.quizservice.service;

import java.util.List;
import java.util.Map;

import com.myorg.quizservice.entity.Question;

public interface QuestionService {
	
	public List<Question> fetchAllQuestions();
	
	public Question fetchSingleQuestion(long questionid);
	
	public Map<String,Long> saveNewQuestion(Question question);

	public List<Question> fetchRandNumberOfQuestions(int limit);

	public void deleteQuestion(long questionid);
	
	public Question updateQuestion(Question question);
	
	public List<Question> saveMultipleQuestions(List<Question> questions); 
	
}
