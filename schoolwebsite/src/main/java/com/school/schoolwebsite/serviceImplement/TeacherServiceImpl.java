package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.entity.Teacher;
import com.school.schoolwebsite.repository.TeacherRepository;
import com.school.schoolwebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherServiceImpl implements TeacherService {

  @Autowired
  private TeacherRepository teacherRepository;

  @Override
  public List<Teacher> getAllTeachers(boolean activeOnly) {
    if (activeOnly) {
      return teacherRepository.findByIsVisibleTrueOrderBySortOrderAsc();
    }
    return teacherRepository.findAllByOrderBySortOrderAsc();
  }

  @Override
  public Optional<Teacher> getTeacherById(Long id) {
    return teacherRepository.findById(id);
  }

  @Override
  public Teacher createTeacher(Teacher teacher) {
    return teacherRepository.save(teacher);
  }

  @Override
  public Teacher updateTeacher(Long id, Teacher teacherDetails) {
    return teacherRepository.findById(id).map(teacher -> {
      teacher.setName(teacherDetails.getName());
      teacher.setDesignation(teacherDetails.getDesignation());
      teacher.setPhone(teacherDetails.getPhone());
      teacher.setEmail(teacherDetails.getEmail());
      teacher.setImageUrl(teacherDetails.getImageUrl());
      teacher.setSortOrder(teacherDetails.getSortOrder());
      teacher.setVisible(teacherDetails.isVisible());
      return teacherRepository.save(teacher);
    }).orElseThrow(() -> new RuntimeException("Teacher not found with id " + id));
  }

  @Override
  public void deleteTeacher(Long id) {
    teacherRepository.deleteById(id);
  }
}
