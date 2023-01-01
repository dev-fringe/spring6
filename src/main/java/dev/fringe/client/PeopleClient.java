package dev.fringe.client;

import dev.fringe.model.People;
import feign.RequestLine;

public interface PeopleClient {

    @RequestLine("GET /api/people/")
    People people();
}
