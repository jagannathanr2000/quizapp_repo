package com.myorg.quizauthservice.service;

import com.myorg.quizauthservice.entity.User;

public interface UserService {
	
	public User getUser(User user);
	public User saveNewUser(User user);
}
