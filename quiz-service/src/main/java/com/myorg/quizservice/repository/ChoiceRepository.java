package com.myorg.quizservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myorg.quizservice.entity.Choice;

@Repository
public interface ChoiceRepository extends JpaRepository<Choice,Long>{

}
