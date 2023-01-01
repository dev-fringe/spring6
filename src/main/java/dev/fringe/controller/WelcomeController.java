package dev.fringe.controller;

import static io.undertow.servlet.Servlets.defaultContainer;
import static io.undertow.servlet.Servlets.deployment;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import dev.fringe.client.PeopleClient;
import dev.fringe.model.People;
import dev.fringe.model.Result;
import io.undertow.Handlers;
import io.undertow.Undertow;
import io.undertow.servlet.Servlets;
import io.undertow.servlet.api.ListenerInfo;
import io.undertow.servlet.util.ImmediateInstanceFactory;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
@SpringJUnitWebConfig(locations = "/servlet-context.xml")
public class WelcomeController {

	@RequestMapping(value = "/")
	public String home(Model model) {
		log.debug("{}", () -> "Controller");
		model.addAttribute("message", new Date());
		return "Hello";
	}

	//@Autowired RestTemplate restTemplate;
	@Autowired PeopleClient peopleClient;
	
	@RequestMapping("/postJSON.do")
	public @ResponseBody People data(Model model, @RequestBody(required = false) Map<String, String> data) {
		log.info(data);
		People p = peopleClient.people();
		if(data != null) {
			List<Result> results = new ArrayList<>();
			for(Result r : p.getResults()) {
				if(r.getName().contains(data.get("value"))) {
					results.add(r);
				}
			}
			p.setResults(results);
		}
		return p;
	}

	// JUnit
	@Autowired
	WebApplicationContext wac;

	MockMvc mock;

	@BeforeEach
	public void before() {
		mock = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	public void testController() throws Exception {
		mock.perform(get("/")).andDo(print());
	}
	// JUnit END
	
	//embedded server 
	@SneakyThrows
	public static void main(final String[] args) {
		var contextPath = "/";
		var context = new AnnotationConfigWebApplicationContext();
		context.setConfigLocation("classpath:servlet-context.xml"); // need more config. no mapping for GET /
		var servletBuilder = deployment()// you want jsp page more config.
				.setClassLoader(WelcomeController.class.getClassLoader()).setContextPath(contextPath)
				.setDeploymentName("test.war")
				.addServlet(Servlets.servlet("DispatcherServlet", DispatcherServlet.class,
						new ImmediateInstanceFactory<>(new DispatcherServlet(context))).addMapping("/*"))
				.addListener(new ListenerInfo(ContextLoaderListener.class,
						new ImmediateInstanceFactory<>(new ContextLoaderListener(context))));
		var manager = defaultContainer().addDeployment(servletBuilder);
		manager.deploy();
		var path = Handlers.path().addPrefixPath(contextPath, manager.start());
		Undertow.builder().addHttpListener(8080, "0.0.0.0").setHandler(path).build().start();
	}
	//embedded server end

}
