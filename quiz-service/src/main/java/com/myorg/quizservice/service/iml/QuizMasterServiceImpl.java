package com.myorg.quizservice.service.iml;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myorg.quizservice.entity.QuizMaster;
import com.myorg.quizservice.repository.QuizMasterRepository;
import com.myorg.quizservice.service.QuizMasterService;

@Service
public class QuizMasterServiceImpl implements QuizMasterService{

	@Autowired
	private QuizMasterRepository quizMasterRepo;
	@Override
	public QuizMaster getSettings() {
		// TODO Auto-generated method stub
		List<QuizMaster> quizMaster = quizMasterRepo.findAll();
		
		if(quizMaster.isEmpty() || quizMaster.size() == 0) {
			return new QuizMaster();
		}
		return quizMaster.get(0);
		
	}

}
