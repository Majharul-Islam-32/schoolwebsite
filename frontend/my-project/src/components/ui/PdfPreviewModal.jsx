import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X, Download, Loader2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfPreviewModal = ({ pdfUrl, title, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white z-10">
          <h3 className="font-semibold text-gray-800 truncate max-w-md" title={title}>
            {title || 'PDF Preview'}
          </h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center p-2 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <button
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium text-gray-600">
              Page {pageNumber} of {numPages || '--'}
            </span>
            <button
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))}
              className="p-1.5 rounded hover:bg-gray-200"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-sm font-medium text-gray-600 w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale(prev => Math.min(2.0, prev + 0.1))}
              className="p-1.5 rounded hover:bg-gray-200"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-100 flex justify-center p-4">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center h-full">
                <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
                <p className="text-gray-500">Loading PDF...</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center h-full text-red-500">
                <p>Failed to load PDF.</p>
                <button onClick={handleDownload} className="mt-2 text-blue-600 hover:underline">
                  Download to view
                </button>
              </div>
            }
            className="shadow-lg"
          >
            <Page 
              pageNumber={pageNumber} 
              scale={scale} 
              renderAnnotationLayer={true}
              renderTextLayer={true}
              className="bg-white"
              loading={<div className="h-[800px] w-[600px] bg-white animate-pulse" />}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfPreviewModal;
