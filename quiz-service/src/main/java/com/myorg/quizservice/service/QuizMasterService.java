package com.myorg.quizservice.service;

import org.springframework.stereotype.Service;

import com.myorg.quizservice.entity.QuizMaster;

@Service
public interface QuizMasterService {
	
	public QuizMaster getSettings();
}
