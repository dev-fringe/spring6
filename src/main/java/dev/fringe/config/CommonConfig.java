package dev.fringe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import dev.fringe.client.PeopleClient;
import feign.Feign;
import feign.jackson.JacksonDecoder;

@Configuration
@EnableWebMvc
//@EnableMustache
//@ComponentScan("dev.fringe.controller")
public class CommonConfig {
	
	@Bean
	RestTemplate restTemplate() {//cloud open-feign
		return new RestTemplate();
	}
	@Bean
	PeopleClient peopleClient() {
		return Feign.builder().decoder(new JacksonDecoder()).target(PeopleClient.class, "https://swapi.dev/");
	}
}
