package com.myorg.quizservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myorg.quizservice.entity.QuizMaster;

@Repository
public interface QuizMasterRepository extends JpaRepository<QuizMaster,Long>{
	
}
