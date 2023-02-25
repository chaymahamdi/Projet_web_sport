package com.example.backend_project.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend_project.Models.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

    Optional<Event> findByTitle(String title);
}