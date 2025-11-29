package com.school.schoolwebsite.controller;

import com.school.schoolwebsite.entity.PageContent;
import com.school.schoolwebsite.service.PageContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pages")
public class PageContentController {

  @Autowired
  private PageContentService pageContentService;

  @GetMapping("/{pageKey}")
  public ResponseEntity<PageContent> getPageByKey(@PathVariable String pageKey) {
    Optional<PageContent> pageContent = pageContentService.getPageByKey(pageKey);
    return pageContent.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping
  public ResponseEntity<List<PageContent>> getAllPages() {
    return ResponseEntity.ok(pageContentService.getAllPages());
  }

  @PostMapping
  public ResponseEntity<PageContent> saveOrUpdatePage(@RequestBody PageContent pageContent) {
    PageContent savedPage = pageContentService.saveOrUpdatePage(
        pageContent.getPageKey(),
        pageContent.getTitle(),
        pageContent.getPdfUrl(),
        pageContent.isVisible());
    return ResponseEntity.ok(savedPage);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deletePage(@PathVariable Long id) {
    pageContentService.deletePage(id);
    return ResponseEntity.noContent().build();
  }
}
