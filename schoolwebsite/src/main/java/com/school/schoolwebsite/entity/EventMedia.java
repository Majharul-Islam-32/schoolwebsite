package com.school.schoolwebsite.entity;

import com.school.schoolwebsite.enums.MediaType;
import jakarta.persistence.*;
import jakarta.persistence.*;

@Entity
@Table(name = "event_media")
public class EventMedia {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "event_id", nullable = false)
  private Event event;

  @Column(name = "media_url", nullable = false)
  private String mediaUrl;

  @Enumerated(EnumType.STRING)
  @Column(name = "media_type", nullable = false)
  private MediaType mediaType;

  public EventMedia() {
  }

  public EventMedia(Long id, Event event, String mediaUrl, MediaType mediaType) {
    this.id = id;
    this.event = event;
    this.mediaUrl = mediaUrl;
    this.mediaType = mediaType;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Event getEvent() {
    return event;
  }

  public void setEvent(Event event) {
    this.event = event;
  }

  public String getMediaUrl() {
    return mediaUrl;
  }

  public void setMediaUrl(String mediaUrl) {
    this.mediaUrl = mediaUrl;
  }

  public MediaType getMediaType() {
    return mediaType;
  }

  public void setMediaType(MediaType mediaType) {
    this.mediaType = mediaType;
  }
}
