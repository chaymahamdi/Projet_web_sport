package com.example.backend_project.Controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_project.Models.Event;
import com.example.backend_project.Payload.EventRequest;
import com.example.backend_project.services.EventService;

@RestController
@CrossOrigin("*")

public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    };

    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @PostMapping("/events")
    public ResponseEntity<?> addEvent(@RequestBody EventRequest request) {
        Event event = eventService.addEvent(request);
        return ResponseEntity.status(201).body(event);
    }

}
