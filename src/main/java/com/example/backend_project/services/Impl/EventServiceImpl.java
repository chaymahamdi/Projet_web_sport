package com.example.backend_project.services.Impl;

import com.example.backend_project.Models.Category;
import com.example.backend_project.Models.Event;
import com.example.backend_project.Payload.EventRequest;
import com.example.backend_project.Repositories.EventRepository;
import com.example.backend_project.Repositories.CategoryRepository;
import com.example.backend_project.Exceptions.ResourceNotFoundException;
import com.example.backend_project.services.EventService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    private EventRepository eventRepository;
    private CategoryRepository categoryRepository;

    public EventServiceImpl(EventRepository eventRepository, CategoryRepository categoryRepository) {
        this.eventRepository = eventRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Event addEvent(EventRequest request) {
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category", "id", request.getCategoryId()));
        Event event = new Event();
        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());
        event.setImage(request.getImage());
        event.setDate(request.getDate());
        event.setStartTime(request.getStartTime());
        event.setEndTime(request.getEndTime());
        event.setLocation(request.getLocation());
        event.setCategory(category);
        eventRepository.save(event);
        return event;
    }

    @Override
    public List<Event> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events;
    }
}
