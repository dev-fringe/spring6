package dev.fringe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import dev.fringe.client.PeopleClient;
import feign.Feign;
import feign.jackson.JacksonDecoder;
import feign.jackson.JacksonEncoder;
import feign.spring.SpringContract;

@Configuration
@EnableWebMvc
//@EnableMustache
//@ComponentScan("dev.fringe.controller")
public class CommonConfig {
	
//	@Bean
//	RestTemplate restTemplate() {//cloud open-feign
//		return new RestTemplate();
//	}
	
	@Bean
	PeopleClient peopleClient() {// open-feign -> @EnableFeignClient -> @FeignClient
		return Feign.builder()
				.contract(new SpringContract())
				//.client((new TracingClient(feignCompatibleClient, tracer)))
				.encoder(new JacksonEncoder())
				.decoder(new JacksonDecoder())
				.target(PeopleClient.class, "https://swapi.dev/");
	}
}
