package com.school.schoolwebsite.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardStatsResponse {
  private long totalStudents;
  private long totalTeachers;
  private long totalNotices;
  private List<NoticeResponse> todaysNotices;
}
