package com.myorg.quizauthservice.dto;

import com.myorg.quizauthservice.entity.Role;

public class LoginResponse {
	private String userName;
	private Role role;
	
	public LoginResponse() {}

	public LoginResponse(String userName, Role role) {
		super();
		this.userName = userName;
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	
	
	
}
