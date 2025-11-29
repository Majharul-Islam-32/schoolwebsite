package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.dto.response.DashboardStatsResponse;
import com.school.schoolwebsite.dto.response.NoticeResponse;
import com.school.schoolwebsite.entity.Notice;
import com.school.schoolwebsite.mapper.NoticeMapper;
import com.school.schoolwebsite.repository.NoticeRepository;
import com.school.schoolwebsite.repository.StudentRepository;
import com.school.schoolwebsite.repository.TeacherRepository;
import com.school.schoolwebsite.service.DashboardService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DashboardServiceImpl implements DashboardService {

  private final StudentRepository studentRepository;
  private final TeacherRepository teacherRepository;
  private final NoticeRepository noticeRepository;
  private final NoticeMapper noticeMapper;

  public DashboardServiceImpl(StudentRepository studentRepository, TeacherRepository teacherRepository,
      NoticeRepository noticeRepository, NoticeMapper noticeMapper) {
    this.studentRepository = studentRepository;
    this.teacherRepository = teacherRepository;
    this.noticeRepository = noticeRepository;
    this.noticeMapper = noticeMapper;
  }

  @Override
  public DashboardStatsResponse getDashboardStats() {
    long totalStudents = studentRepository.count();
    long totalTeachers = teacherRepository.count();
    long totalNotices = noticeRepository.count();

    List<Notice> allNotices = noticeRepository.findAll();
    List<NoticeResponse> todaysNotices = allNotices.stream()
        .filter(notice -> notice.getPublishDate() != null && notice.getPublishDate().equals(LocalDate.now()))
        .map(noticeMapper::mapToResponse)
        .collect(Collectors.toList());

    return new DashboardStatsResponse(totalStudents, totalTeachers, totalNotices, todaysNotices);
  }
}
