package com.myorg.quizservice.service.iml;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myorg.quizservice.entity.Question;
import com.myorg.quizservice.exception.QuestionNotFoundException;
import com.myorg.quizservice.repository.QuestionRepository;
import com.myorg.quizservice.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionRepository questionRepo;
	
	@Override
	public List<Question> fetchAllQuestions() {
		// TODO Auto-generated method stub
		List<Question> questions= questionRepo.findAll();
		
		return questions;
	}

	@Override
	public Question fetchSingleQuestion(long questionid) {
		// TODO Auto-generated method stub
		Question question = questionRepo.findById(questionid).
				orElseThrow(() -> new QuestionNotFoundException("Question Not Found!!!"));
		return question;
	}

	@Override
	public Map<String, Long> saveNewQuestion(Question question) {
		// TODO Auto-generated method stub
		Question savedQuestion = questionRepo.save(question);
		Map<String,Long> response = new HashMap<>();
		response.put("question_id",savedQuestion.getQuestionId());
		return response;
	}

	@Override
	public List<Question> fetchRandNumberOfQuestions(int limit) {
		// TODO Auto-generated method stub
		
		List<Question> questions = questionRepo.findRandomNumberOfQuestions(limit);
		return questions;
	}

	@Override
	public void deleteQuestion(long questionid) {
		// TODO Auto-generated method stub
		
		Question q = questionRepo.findById(questionid)
				.orElseThrow(() -> new QuestionNotFoundException("Question not found!!!"));
		
		questionRepo.delete(q);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		
		Question existingQuestion = questionRepo.findById(question.getQuestionId())
				.orElseThrow(() -> new QuestionNotFoundException("Question Not Found!!!"));
		
		questionRepo.save(question);
		return existingQuestion;
	}

	@Override
	public List<Question> saveMultipleQuestions(List<Question> questions) {
		// TODO Auto-generated method stub
		List<Question> result = questionRepo.saveAll(questions);
		return result;
	}
	
	
	

}
