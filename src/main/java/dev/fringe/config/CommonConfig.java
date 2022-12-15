package dev.fringe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
//@EnableMustache
//@ComponentScan("dev.fringe.controller")
public class CommonConfig {
	
	@Bean
	RestTemplate restTemplate() {//cloud open-feign
		return new RestTemplate();
	}
}
