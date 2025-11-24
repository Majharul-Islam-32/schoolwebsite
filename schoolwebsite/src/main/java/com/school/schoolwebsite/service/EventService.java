package com.school.schoolwebsite.service;

import com.school.schoolwebsite.dto.request.EventRequest;
import com.school.schoolwebsite.dto.response.EventResponse;

import java.util.List;

public interface EventService {
  EventResponse createEvent(EventRequest request);

  EventResponse updateEvent(Long id, EventRequest request);

  void deleteEvent(Long id);

  EventResponse getEventById(Long id);

  List<EventResponse> getAllEvents();
}
