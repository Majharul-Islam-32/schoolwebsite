package com.school.schoolwebsite.service;

import com.school.schoolwebsite.entity.Teacher;
import java.util.List;
import java.util.Optional;

public interface TeacherService {
  List<Teacher> getAllTeachers(boolean activeOnly);

  Optional<Teacher> getTeacherById(Long id);

  Teacher createTeacher(Teacher teacher);

  Teacher updateTeacher(Long id, Teacher teacher);

  void deleteTeacher(Long id);
}
