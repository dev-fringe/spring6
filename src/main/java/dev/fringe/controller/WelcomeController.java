package dev.fringe.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;

@Controller
@SpringJUnitWebConfig(locations = "classpath:mvc-dispatcher-servlet.xml")
public class WelcomeController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody String home() {
		return "Hello";
	}

	// JUnit
	@Autowired  WebApplicationContext wac;
	   
	MockMvc mvc;

	@BeforeEach
	public void before() {
		mvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	public void testController() throws Exception {
		System.out.println(mvc.perform(get("/")).andReturn().getResponse().getContentAsString());
	}
	// JUnit END
}

