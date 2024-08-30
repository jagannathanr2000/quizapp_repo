package com.myorg.quizauthservice.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

import com.myorg.quizauthservice.exception.UserNotFoundException;

public class HashPassword {

	public static String hashPassword(String password) throws NoSuchAlgorithmException{
		SecureRandom random = new SecureRandom();
		//16 bit salt
		byte[] salt = new byte[16];
		
		//Generates unique salt each type
		random.nextBytes(salt);
		
		MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
		messageDigest.update(salt);
		byte[] hashedPassword = messageDigest.digest(password.getBytes());
		
		return Base64.getEncoder().encodeToString(salt)+"$"+Base64.getEncoder().encodeToString(hashedPassword);
	}
	
	public static boolean verifyPassword(String storedPassword, String providePassword) throws NoSuchAlgorithmException,UserNotFoundException{
		
		String[] parts = storedPassword.split("\\$");
		byte[] salt = Base64.getDecoder().decode(parts[0]);
		byte[] storedHash = Base64.getDecoder().decode(parts[1]);
		
		MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
		messageDigest.update(salt);
		byte[] hashedPassword = messageDigest.digest(providePassword.getBytes());
		if(MessageDigest.isEqual(storedHash, hashedPassword)) {
			return true;
		} else {
			throw new UserNotFoundException("Invalid username/password");
		}
		
		
	}
}
