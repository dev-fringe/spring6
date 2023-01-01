package dev.fringe.client;

import org.springframework.web.bind.annotation.GetMapping;
import dev.fringe.model.People;

public interface PeopleClient {
    @GetMapping("/api/people/") People people();
}
