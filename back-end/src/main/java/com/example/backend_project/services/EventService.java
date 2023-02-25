package com.example.backend_project.services;
import java.util.List;
import com.example.backend_project.Models.Event;
import com.example.backend_project.Payload.EventRequest;

public interface EventService {
    
    Event addEvent(EventRequest request);
    List<Event> getAllEvents();
}
