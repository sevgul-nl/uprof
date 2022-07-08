package com.bakis.uprof;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bakis.uprof.jpa.UserRepository;


@SpringBootApplication
public class UprofApplication {	
	private static final Logger logger = 
			LoggerFactory.getLogger(UprofApplication.class);
	  
	
	public static void main(String[] args) {
		
		logger.info("Baki was here !..");
		SpringApplication.run(UprofApplication.class, args);
	}

}
