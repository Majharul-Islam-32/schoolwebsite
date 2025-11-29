package com.school.schoolwebsite.service;

import com.school.schoolwebsite.entity.PageContent;
import java.util.List;
import java.util.Optional;

public interface PageContentService {
  PageContent saveOrUpdatePage(String pageKey, String title, String pdfUrl, boolean isVisible);

  Optional<PageContent> getPageByKey(String pageKey);

  List<PageContent> getAllPages();

  void deletePage(Long id);
}
