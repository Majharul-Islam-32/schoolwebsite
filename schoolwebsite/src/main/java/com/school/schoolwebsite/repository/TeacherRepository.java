package com.school.schoolwebsite.repository;

import com.school.schoolwebsite.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
  List<Teacher> findByIsVisibleTrueOrderBySortOrderAsc();

  List<Teacher> findAllByOrderBySortOrderAsc();
}
