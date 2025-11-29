package com.school.schoolwebsite.mapper;

import com.school.schoolwebsite.dto.response.NoticeResponse;
import com.school.schoolwebsite.entity.Notice;
import org.springframework.stereotype.Component;

@Component
public class NoticeMapper {

  public NoticeResponse mapToResponse(Notice notice) {
    NoticeResponse response = new NoticeResponse();
    response.setId(notice.getId());
    response.setTitle(notice.getTitle());
    response.setDescription(notice.getDescription());
    response.setCategory(notice.getCategory());
    response.setPublishDate(notice.getPublishDate());
    response.setIsUrgent(notice.getIsUrgent());
    response.setCreatedBy(notice.getCreatedBy() != null ? notice.getCreatedBy().getUsername() : null);
    response.setCreatedAt(notice.getCreatedAt());
    response.setUpdatedAt(notice.getUpdatedAt());
    response.setAttachmentUrl(notice.getAttachmentUrl());
    response.setShowInTicker(notice.getShowInTicker());
    return response;
  }
}
