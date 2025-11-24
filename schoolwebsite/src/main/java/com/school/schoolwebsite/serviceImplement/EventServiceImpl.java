package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.dto.request.EventRequest;
import com.school.schoolwebsite.dto.response.EventResponse;
import com.school.schoolwebsite.entity.Event;
import com.school.schoolwebsite.entity.EventMedia;
import com.school.schoolwebsite.repository.EventRepository;
import com.school.schoolwebsite.service.EventService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventServiceImpl implements EventService {

  private final EventRepository eventRepository;

  public EventServiceImpl(EventRepository eventRepository) {
    this.eventRepository = eventRepository;
  }

  @Override
  @Transactional
  public EventResponse createEvent(EventRequest request) {
    Event event = new Event();
    event.setTitle(request.getTitle());
    event.setDescription(request.getDescription());
    event.setEventDate(request.getEventDate());
    event.setThumbnailUrl(request.getThumbnailUrl());
    event.setVideoUrl(request.getVideoUrl());

    Event savedEvent = eventRepository.save(event);
    return mapToResponse(savedEvent);
  }

  @Override
  @Transactional
  public EventResponse updateEvent(Long id, EventRequest request) {
    Event event = eventRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Event not found"));

    event.setTitle(request.getTitle());
    event.setDescription(request.getDescription());
    event.setEventDate(request.getEventDate());
    event.setThumbnailUrl(request.getThumbnailUrl());
    event.setVideoUrl(request.getVideoUrl());

    Event updatedEvent = eventRepository.save(event);
    return mapToResponse(updatedEvent);
  }

  @Override
  @Transactional
  public void deleteEvent(Long id) {
    if (!eventRepository.existsById(id)) {
      throw new RuntimeException("Event not found");
    }
    eventRepository.deleteById(id);
  }

  @Override
  public EventResponse getEventById(Long id) {
    Event event = eventRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Event not found"));
    return mapToResponse(event);
  }

  @Override
  public List<EventResponse> getAllEvents() {
    return eventRepository.findAllByOrderByEventDateDesc()
        .stream()
        .map(this::mapToResponse)
        .collect(Collectors.toList());
  }

  private EventResponse mapToResponse(Event event) {
    EventResponse response = new EventResponse();
    response.setId(event.getId());
    response.setTitle(event.getTitle());
    response.setDescription(event.getDescription());
    response.setEventDate(event.getEventDate());
    response.setThumbnailUrl(event.getThumbnailUrl());
    response.setVideoUrl(event.getVideoUrl());
    response.setImageUrls(
        event.getMediaList().stream()
            .map(EventMedia::getMediaUrl)
            .collect(Collectors.toList()));
    response.setCreatedAt(event.getCreatedAt());
    response.setUpdatedAt(event.getUpdatedAt());
    return response;
  }
}
