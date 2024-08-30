package com.myorg.quizservice.utility;

import java.util.ArrayList;
import java.util.List;

import com.myorg.quizservice.dto.ResponseDTO;
import com.myorg.quizservice.entity.Question;

public class ResponseDtoMapper {

	public static ResponseDTO mapToSingleResponse(Question question) {
		
		ResponseDTO response = new ResponseDTO();
		
		response.setQuestion_id(question.getQuestionId());
		response.setQuestion_name(question.getName());
		response.setQuestion_type(String.valueOf(question.getType()));
		response.setChoices(question.getChoices());

		return response;
	}
	
	public static List<ResponseDTO> mapToMultipleResponses(List<Question> questions) {
		List<ResponseDTO> response = new ArrayList<>();
		for(Question q : questions) {
			response.add(ResponseDtoMapper.mapToSingleResponse(q));
		}
		return response;
	}
	

}
