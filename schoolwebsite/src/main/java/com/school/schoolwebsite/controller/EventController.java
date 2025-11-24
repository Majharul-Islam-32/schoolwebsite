package com.school.schoolwebsite.controller;

import com.school.schoolwebsite.dto.request.EventRequest;
import com.school.schoolwebsite.dto.response.EventResponse;
import com.school.schoolwebsite.service.EventService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

  private final EventService eventService;

  public EventController(EventService eventService) {
    this.eventService = eventService;
  }

  @GetMapping
  public ResponseEntity<List<EventResponse>> getAllEvents() {
    return ResponseEntity.ok(eventService.getAllEvents());
  }

  @GetMapping("/{id}")
  public ResponseEntity<EventResponse> getEventById(@PathVariable Long id) {
    return ResponseEntity.ok(eventService.getEventById(id));
  }

  @PostMapping
  public ResponseEntity<EventResponse> createEvent(@Valid @RequestBody EventRequest request) {
    EventResponse response = eventService.createEvent(request);
    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  @PutMapping("/{id}")
  public ResponseEntity<EventResponse> updateEvent(
      @PathVariable Long id,
      @Valid @RequestBody EventRequest request) {
    return ResponseEntity.ok(eventService.updateEvent(id, request));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
    eventService.deleteEvent(id);
    return ResponseEntity.noContent().build();
  }
}
