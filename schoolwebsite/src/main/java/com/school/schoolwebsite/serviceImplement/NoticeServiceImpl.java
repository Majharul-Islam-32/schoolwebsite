package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.dto.request.NoticeRequest;
import com.school.schoolwebsite.dto.response.NoticeResponse;
import com.school.schoolwebsite.entity.Notice;
import com.school.schoolwebsite.entity.User;
import com.school.schoolwebsite.enums.NoticeCategory;
import com.school.schoolwebsite.repository.NoticeRepository;
import com.school.schoolwebsite.repository.UserRepository;
import com.school.schoolwebsite.service.NoticeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoticeServiceImpl implements NoticeService {

  private final NoticeRepository noticeRepository;
  private final UserRepository userRepository;

  public NoticeServiceImpl(NoticeRepository noticeRepository, UserRepository userRepository) {
    this.noticeRepository = noticeRepository;
    this.userRepository = userRepository;
  }

  @Override
  @Transactional
  public NoticeResponse createNotice(NoticeRequest request, String username) {
    User user = userRepository.findByUsername(username)
        .orElseThrow(() -> new RuntimeException("User not found"));

    Notice notice = new Notice();
    notice.setTitle(request.getTitle());
    notice.setDescription(request.getDescription());
    notice.setCategory(request.getCategory());
    notice.setPublishDate(request.getPublishDate());
    notice.setIsUrgent(request.getIsUrgent());
    notice.setCreatedBy(user);

    Notice savedNotice = noticeRepository.save(notice);
    return mapToResponse(savedNotice);
  }

  @Override
  @Transactional
  public NoticeResponse updateNotice(Long id, NoticeRequest request) {
    Notice notice = noticeRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Notice not found"));

    notice.setTitle(request.getTitle());
    notice.setDescription(request.getDescription());
    notice.setCategory(request.getCategory());
    notice.setPublishDate(request.getPublishDate());
    notice.setIsUrgent(request.getIsUrgent());

    Notice updatedNotice = noticeRepository.save(notice);
    return mapToResponse(updatedNotice);
  }

  @Override
  @Transactional
  public void deleteNotice(Long id) {
    if (!noticeRepository.existsById(id)) {
      throw new RuntimeException("Notice not found");
    }
    noticeRepository.deleteById(id);
  }

  @Override
  public NoticeResponse getNoticeById(Long id) {
    Notice notice = noticeRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Notice not found"));
    return mapToResponse(notice);
  }

  @Override
  public List<NoticeResponse> getAllNotices() {
    return noticeRepository.findAllByOrderByPublishDateDesc()
        .stream()
        .map(this::mapToResponse)
        .collect(Collectors.toList());
  }

  @Override
  public List<NoticeResponse> getNoticesByCategory(NoticeCategory category) {
    return noticeRepository.findByCategory(category)
        .stream()
        .map(this::mapToResponse)
        .collect(Collectors.toList());
  }

  @Override
  public List<NoticeResponse> getUrgentNotices() {
    return noticeRepository.findByIsUrgentTrue()
        .stream()
        .map(this::mapToResponse)
        .collect(Collectors.toList());
  }

  private NoticeResponse mapToResponse(Notice notice) {
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
    return response;
  }
}
