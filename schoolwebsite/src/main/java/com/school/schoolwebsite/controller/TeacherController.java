package com.school.schoolwebsite.controller;

import com.school.schoolwebsite.entity.Teacher;
import com.school.schoolwebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
@CrossOrigin(origins = "http://localhost:5173")
public class TeacherController {

  @Autowired
  private TeacherService teacherService;

  @GetMapping
  public List<Teacher> getAllTeachers(@RequestParam(required = false, defaultValue = "false") boolean activeOnly) {
    return teacherService.getAllTeachers(activeOnly);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
    return teacherService.getTeacherById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public Teacher createTeacher(@RequestBody Teacher teacher) {
    return teacherService.createTeacher(teacher);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Teacher> updateTeacher(@PathVariable Long id, @RequestBody Teacher teacher) {
    try {
      return ResponseEntity.ok(teacherService.updateTeacher(id, teacher));
    } catch (RuntimeException e) {
      return ResponseEntity.notFound().build();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
    teacherService.deleteTeacher(id);
    return ResponseEntity.ok().build();
  }
}
