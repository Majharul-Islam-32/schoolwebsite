package com.school.schoolwebsite.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

public class EventRequest {

  @NotBlank(message = "Title is required")
  private String title;

  @NotBlank(message = "Description is required")
  private String description;

  @NotNull(message = "Event date is required")
  private LocalDate eventDate;

  private String thumbnailUrl;
  private String videoUrl;
  private List<String> imageUrls;

  public EventRequest() {
  }

  public EventRequest(String title, String description, LocalDate eventDate, String thumbnailUrl, String videoUrl,
      List<String> imageUrls) {
    this.title = title;
    this.description = description;
    this.eventDate = eventDate;
    this.thumbnailUrl = thumbnailUrl;
    this.videoUrl = videoUrl;
    this.imageUrls = imageUrls;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public LocalDate getEventDate() {
    return eventDate;
  }

  public void setEventDate(LocalDate eventDate) {
    this.eventDate = eventDate;
  }

  public String getThumbnailUrl() {
    return thumbnailUrl;
  }

  public void setThumbnailUrl(String thumbnailUrl) {
    this.thumbnailUrl = thumbnailUrl;
  }

  public String getVideoUrl() {
    return videoUrl;
  }

  public void setVideoUrl(String videoUrl) {
    this.videoUrl = videoUrl;
  }

  public List<String> getImageUrls() {
    return imageUrls;
  }

  public void setImageUrls(List<String> imageUrls) {
    this.imageUrls = imageUrls;
  }
}
