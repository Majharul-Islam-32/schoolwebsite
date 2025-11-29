import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useTranslation } from '../hooks/useTranslation';
import { Loader2, FileX, Calendar } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const SkeletonLoader = () => (
  <div className="container mx-auto px-4 py-8 animate-pulse">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Skeleton */}
      <div className="h-24 bg-gray-200 w-full"></div>
      
      {/* Body Skeleton */}
      <div className="p-6 bg-gray-50 min-h-[600px] flex flex-col items-center space-y-6">
        <div className="h-8 bg-gray-200 w-3/4 rounded"></div>
        <div className="h-[600px] w-full max-w-[800px] bg-gray-200 rounded shadow-sm"></div>
      </div>
    </div>
  </div>
);

const UniversalPdfViewer = ({ pageKey }) => {
  const { t } = useTranslation();
  const [pageContent, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/pages/${pageKey}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Page not found');
          } else {
            throw new Error('Failed to fetch page content');
          }
        } else {
          const data = await response.json();
          if (data.visible) {
            setPageContent(data);
          } else {
            setError('Content not available');
          }
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    if (pageKey) {
      fetchPageContent();
    }
  }, [pageKey]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Resize observer to make PDF responsive
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    const container = document.getElementById('pdf-container');
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [loading, pageContent]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error || !pageContent) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh] text-gray-500">
        <FileX size={64} className="mb-4" />
        <h2 className="text-2xl font-semibold">{t('contentNotAvailable') || 'Content Not Available'}</h2>
        <p className="mt-2">{t('checkBackLater') || 'Please check back later.'}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-700 text-white p-6 text-center">
          <h2 className="text-2xl font-bold">{pageContent.title}</h2>
          {pageContent.updatedAt && (
            <div className="flex items-center justify-center mt-2 text-blue-100 text-sm opacity-90">
              <Calendar size={14} className="mr-1.5" />
              <span>
                Last Updated: {new Date(pageContent.updatedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', month: 'long', day: 'numeric' 
                })}
              </span>
            </div>
          )}
        </div>
        
        <div id="pdf-container" className="p-6 flex flex-col items-center bg-gray-100 min-h-[600px]">
          {pageContent.pdfUrl ? (
            <Document
              file={pageContent.pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="h-[600px] w-full max-w-[800px] bg-gray-200 animate-pulse rounded"></div>}
              error={<div className="text-red-500">Failed to load PDF file.</div>}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  width={containerWidth ? Math.min(containerWidth - 48, 800) : undefined}
                  className="mb-4 shadow-md"
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                />
              ))}
            </Document>
          ) : (
             <div className="text-center py-10">
                <p>No PDF file attached to this page.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversalPdfViewer;
