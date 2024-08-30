package com.myorg.quizservice.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.myorg.quizservice.dto.ResponseDTO;
import com.myorg.quizservice.entity.Question;
import com.myorg.quizservice.entity.QuizMaster;
import com.myorg.quizservice.service.QuestionService;
import com.myorg.quizservice.service.QuizMasterService;
import com.myorg.quizservice.utility.ResponseDtoMapper;

@Controller
@RequestMapping("/quizzes")
@CrossOrigin(origins = "http://localhost:5173")
public class QuizController {

	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuizMasterService quizMasterService;
	
	@GetMapping
	public ResponseEntity<List<ResponseDTO>> getAllQuestions() {
		List<Question> questions = questionService.fetchAllQuestions();
		List<ResponseDTO> response = ResponseDtoMapper.mapToMultipleResponses(questions);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/{questionid}")
	public ResponseEntity<ResponseDTO> getSpecificQuestion(@PathVariable long questionid) {
		Question question = questionService.fetchSingleQuestion(questionid);
		ResponseDTO response = ResponseDtoMapper.mapToSingleResponse(question);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/random/{limit}")
	public ResponseEntity<List<ResponseDTO>> getRandomNumberOfQuestions(@PathVariable int limit) {
		List<Question> questions = questionService.fetchRandNumberOfQuestions(limit);
		List<ResponseDTO> response = ResponseDtoMapper.mapToMultipleResponses(questions);
		
		return ResponseEntity.ok(response);
	}
	
	@PostMapping
	public ResponseEntity<Map<String,Long>> saveNewQuestion(@RequestBody Question question) {
		Map<String,Long> response = questionService.saveNewQuestion(question);
		return ResponseEntity.ok(response);
	}
	
	
	@DeleteMapping("/{questionid}")
	public ResponseEntity<String> deleteQuestion(@PathVariable long questionid) {
		
		questionService.deleteQuestion(questionid);
		
		return ResponseEntity.ok().build();
		
	}
	
	@PutMapping
	public ResponseEntity<ResponseDTO> updateQuestion(@RequestBody Question question) {
		
		questionService.updateQuestion(question);
		ResponseDTO response = ResponseDtoMapper.mapToSingleResponse(question);
		return ResponseEntity.ok(response);
	}
	
	
	@PostMapping("/bulksave")
	public ResponseEntity<List<Question>> saveMultipleQuestions(@RequestBody List<Question> questions) {
		
		List<Question> response = questionService.saveMultipleQuestions(questions);
		return ResponseEntity.ok(response);
	}
	

	@GetMapping("/settings")
	public ResponseEntity<QuizMaster> getQuizMasterSettings() {
		QuizMaster response = quizMasterService.getSettings();
		
		return ResponseEntity.ok(response);
	}
	
}
