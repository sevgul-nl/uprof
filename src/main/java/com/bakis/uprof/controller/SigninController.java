package com.bakis.uprof.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bakis.uprof.jpa.User;
import com.bakis.uprof.jpa.UserRepository;

@Controller
//@RequestMapping("/uprof")
public class SigninController {
	private static final Logger logger = 
			LoggerFactory.getLogger(SigninController.class);
	@Autowired
	private UserRepository userRep;
	
	//@RequestMapping(value = "/test/")
	//public String index() {
	//	return "index";
	//}

	//@GetMapping("/signin", )
	@PostMapping("/signin")
    public ResponseEntity<?>  signin(@RequestBody User user) {
		// Build response with the generated token
		logger.info("signin " +user);
		User dbuser = userRep.findByUsername(user.getName());
		if (dbuser != null && dbuser.getId() > 0)
			logger.info("user found " + dbuser );
		else
			logger.info("user not found " + user );
		
		return ResponseEntity.ok().body(user);

	}

}