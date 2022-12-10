package dev.fringe.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;

@Controller
@ContextConfiguration("classpath:mvc-dispatcher-servlet.xml")
@WebAppConfiguration
@ExtendWith(SpringExtension.class) 
public class WelcomeController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody String home() {
		return "Hello";
	}
	
	private MockMvc mockMvc;
	 
    @Autowired private WebApplicationContext context;
    
    @BeforeEach
    public void startup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }
	@Test
	public void sometest() throws Exception {
		System.out.println(mockMvc.perform(get("/")).andReturn().getResponse().getContentAsString());
	}
}