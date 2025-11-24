package com.school.schoolwebsite.repository;

import com.school.schoolwebsite.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
  List<Event> findAllByOrderByEventDateDesc();
}
