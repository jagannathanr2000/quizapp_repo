package com.myorg.quizauthservice.service.impl;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myorg.quizauthservice.entity.Role;
import com.myorg.quizauthservice.entity.User;
import com.myorg.quizauthservice.exception.UserAlreadyExistException;
import com.myorg.quizauthservice.exception.UserNotFoundException;
import com.myorg.quizauthservice.repository.UserRepository;
import com.myorg.quizauthservice.service.UserService;
import com.myorg.quizauthservice.util.HashPassword;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User getUser(User user) {
		// TODO Auto-generated method stub
		User fetchedUser = userRepo.findById(user.getUserName()).orElseThrow(() -> new UserNotFoundException("User not found!!!"));
		String storedPassword = fetchedUser.getPassword();
		try {
			if(HashPassword.verifyPassword(storedPassword, user.getPassword()) == true) {
				return fetchedUser;
			} else {
				throw new UserNotFoundException("Incorrect username/password");
				
			}
		} catch(RuntimeException e) {
			throw new RuntimeException("Incorrect username/password!");
		} catch(Exception e) {
			throw new RuntimeException("Server error!");
		} 
		
		
		
		
		
	}

	@Override
	public User saveNewUser(User user) {
		// TODO Auto-generated method stub
		Optional<User> fetchedUser = userRepo.findById(user.getUserName());
		if(fetchedUser.isPresent()) {
			throw new UserAlreadyExistException("Username already exists");
		} else {
			user.setRole(Role.ROLE_USER);
			try {
				String hashedPassword = HashPassword.hashPassword(user.getPassword());
				user.setPassword(hashedPassword);
				return userRepo.save(user);
			} catch(Exception  e) {
				throw new RuntimeException("Server error!");
			}
			
		}
		
	}

}
