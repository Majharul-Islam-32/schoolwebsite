package com.school.schoolwebsite.repository;

import com.school.schoolwebsite.entity.PageContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PageContentRepository extends JpaRepository<PageContent, Long> {
  Optional<PageContent> findByPageKey(String pageKey);
}
