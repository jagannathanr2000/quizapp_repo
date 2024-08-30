package com.myorg.quizservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myorg.quizservice.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Long>{

	@Query(nativeQuery=true,value="SELECT * FROM question ORDER BY RAND() LIMIT :limit")
	public List<Question> findRandomNumberOfQuestions(@Param("limit") int limit);
}
