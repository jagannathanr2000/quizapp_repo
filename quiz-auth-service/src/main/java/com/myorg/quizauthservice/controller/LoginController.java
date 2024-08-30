package com.myorg.quizauthservice.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myorg.quizauthservice.dto.LoginResponse;
import com.myorg.quizauthservice.entity.User;
import com.myorg.quizauthservice.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse> getUser(@RequestBody User user) {
		
		User responseUser = userService.getUser(user); 
		
		LoginResponse response = new LoginResponse();
		response.setUserName(responseUser.getUserName());
		response.setRole(responseUser.getRole());
		return ResponseEntity.ok(response);
		
		
	};
	
	@PostMapping("/register")
	public ResponseEntity<LoginResponse> registerNewUser(@RequestBody User user) {
		User newUser = userService.saveNewUser(user);
		LoginResponse response = new LoginResponse();
		response.setUserName(newUser.getUserName());
		response.setRole(newUser.getRole());
		
		return ResponseEntity.ok(response);
	}
}
