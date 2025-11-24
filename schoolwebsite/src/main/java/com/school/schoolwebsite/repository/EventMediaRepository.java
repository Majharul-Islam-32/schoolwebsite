package com.school.schoolwebsite.repository;

import com.school.schoolwebsite.entity.EventMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventMediaRepository extends JpaRepository<EventMedia, Long> {
}
