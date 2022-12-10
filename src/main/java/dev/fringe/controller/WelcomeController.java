package dev.fringe.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.WebApplicationContext;

import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
@SpringJUnitWebConfig(locations = "/servlet-context.xml")
public class WelcomeController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public  String home(Model model) {
		log.debug("{}", () -> "Controller");
		model.addAttribute("message", new Date());
		return "Hello";
	}

	// JUnit
	@Autowired
	WebApplicationContext wac;

	MockMvc mvc;

	@BeforeEach
	public void before() {
		mvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	public void testController() throws Exception {
		log.info(mvc.perform(get("/")).andReturn().getResponse().getContentAsString());
	}
	// JUnit END
}
