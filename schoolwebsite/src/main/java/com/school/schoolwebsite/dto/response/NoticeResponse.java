package com.school.schoolwebsite.dto.response;

import com.school.schoolwebsite.enums.NoticeCategory;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class NoticeResponse {
  private Long id;
  private String title;
  private String description;
  private NoticeCategory category;
  private LocalDate publishDate;
  private Boolean isUrgent;
  private String createdBy;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  public NoticeResponse() {
  }

  public NoticeResponse(Long id, String title, String description, NoticeCategory category, LocalDate publishDate,
      Boolean isUrgent, String createdBy, LocalDateTime createdAt, LocalDateTime updatedAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.publishDate = publishDate;
    this.isUrgent = isUrgent;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public NoticeCategory getCategory() {
    return category;
  }

  public void setCategory(NoticeCategory category) {
    this.category = category;
  }

  public LocalDate getPublishDate() {
    return publishDate;
  }

  public void setPublishDate(LocalDate publishDate) {
    this.publishDate = publishDate;
  }

  public Boolean getIsUrgent() {
    return isUrgent;
  }

  public void setIsUrgent(Boolean isUrgent) {
    this.isUrgent = isUrgent;
  }

  public String getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(String createdBy) {
    this.createdBy = createdBy;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }
}
