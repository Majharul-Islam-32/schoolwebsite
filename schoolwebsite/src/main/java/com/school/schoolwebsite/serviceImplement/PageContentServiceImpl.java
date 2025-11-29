package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.entity.PageContent;
import com.school.schoolwebsite.repository.PageContentRepository;
import com.school.schoolwebsite.service.PageContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PageContentServiceImpl implements PageContentService {

  @Autowired
  private PageContentRepository pageContentRepository;

  @Override
  public PageContent saveOrUpdatePage(String pageKey, String title, String pdfUrl, boolean isVisible) {
    Optional<PageContent> existingPage = pageContentRepository.findByPageKey(pageKey);
    PageContent pageContent;
    if (existingPage.isPresent()) {
      pageContent = existingPage.get();
      pageContent.setTitle(title);
      if (pdfUrl != null)
        pageContent.setPdfUrl(pdfUrl);
      pageContent.setVisible(isVisible);
    } else {
      pageContent = new PageContent();
      pageContent.setPageKey(pageKey);
      pageContent.setTitle(title);
      pageContent.setPdfUrl(pdfUrl);
      pageContent.setVisible(isVisible);
    }
    return pageContentRepository.save(pageContent);
  }

  @Override
  public Optional<PageContent> getPageByKey(String pageKey) {
    return pageContentRepository.findByPageKey(pageKey);
  }

  @Override
  public List<PageContent> getAllPages() {
    return pageContentRepository.findAll();
  }

  @Override
  public void deletePage(Long id) {
    pageContentRepository.deleteById(id);
  }
}
