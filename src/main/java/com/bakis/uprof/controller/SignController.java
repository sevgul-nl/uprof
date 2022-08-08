package com.bakis.uprof.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bakis.uprof.jpa.User;
import com.bakis.uprof.jpa.UserRepository;
import com.bakis.uprof.util.UprofError;

@Controller
//@RequestMapping("/uprof")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SignController {
	private static final Logger logger = LoggerFactory.getLogger(SignController.class);
	@Autowired
	private UserRepository userRep;

	// @RequestMapping(value = "/test/")
	// public String index() {
	// return "index";
	// }

	// @GetMapping("/signin", )

	@PostMapping("/api/signup")
	public ResponseEntity<?> signup(@RequestBody User user) {
		// Build response with the generated token
		// logger.info("signin " +user);
		User dbuser = userRep.findByUsername(user.getUsername());
		if (dbuser != null && dbuser.getId() > 0) {
			logger.info("user found " + dbuser);

			return new ResponseEntity(new UprofError("Customer with username " + user.getUsername() + " already exists "), HttpStatus.FOUND);
		} else {
			logger.info("user not found " + user);
			user.setEnabled(true);
			dbuser = userRep.save(user);
			if (dbuser.getId() > 0)

				return ResponseEntity.ok().body(user);
			else
				return ResponseEntity.notFound().build();
		}
	}
	@PostMapping("/api/signin")
	public ResponseEntity<?> signin(@RequestBody User user) {
		User dbuser = userRep.findByUsername(user.getUsername());
		if (dbuser != null && dbuser.getId() > 0) {
			
			if(dbuser.getUsername().equalsIgnoreCase(user.getUsername()))
				if(dbuser.getPassword().equals(user.getUsername()))
						return ResponseEntity.accepted().body(user);
		}
		
		return new ResponseEntity(new UprofError(" sign in failed "), HttpStatus.NOT_FOUND);
	}

}