import React, { useState, useEffect } from 'react';
import { 
  Upload, Eye, EyeOff, Trash2, FileText, Loader2, 
  ChevronDown, ChevronRight, Folder, FolderOpen, X,
  GraduationCap, Users, BookOpen, Calendar, Image as ImageIcon,
  Settings, FileCheck, Library, Layout, Award, ClipboardList,
  Languages
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useTranslation } from '../../hooks/useTranslation';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// Helper to generate consistent page keys from paths
const getPageKey = (path) => {
  if (!path) return '';
  return path.replace(/^\//, '').replace(/[\/\-]/g, '_');
};

const ManagePages = () => {
  const { t, language, toggleLanguage } = useTranslation();
  const [pagesData, setPagesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);

  // Enhanced Nav Structure with Icons and Colors - Moved inside component for translations
  const navStructure = [
    {
      name: t('studentAffairs'),
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-100',
      dropdown: [
        { name: t('admissionRegister'), path: '/admission-register' },
        { name: t('findStudent'), path: '/find-student' },
        { name: t('bookDistribution'), path: '/book-distribution' },
        { name: t('childSurveyInfo'), path: '/child-survey' },
        { name: t('dropoutInfo'), path: '/dropout-info' },
        { name: t('specialNeedsStudent'), path: '/special-needs' },
        { 
          name: t('stipend'), 
          dropdown: [
            { name: t('studentList'), path: '/stipend/list' },
            { name: t('classUpdateReport'), path: '/stipend/class-update' },
            { 
              name: t('demandReport'), 
              dropdown: [
                { name: 'Jan-Jun/2023', path: '/stipend/demand/jan-jun-2023' },
                { name: 'Jul-Dec/2023', path: '/stipend/demand/jul-dec-2023' },
                { name: 'Jan-Jun/2024', path: '/stipend/demand/jan-jun-2024' },
              ]
            },
            { 
              name: t('payroll'), 
              dropdown: [
                { name: 'Jul-Dec/2021', path: '/stipend/payroll/jul-dec-2021' },
                { name: 'Jan-Jun/2022', path: '/stipend/payroll/jan-jun-2022' },
                { name: 'Jul-Dec/2022', path: '/stipend/payroll/jul-dec-2022' },
                { name: 'Jan-Jun/2023', path: '/stipend/payroll/jan-jun-2023' },
                { name: 'Jul-Dec/2023', path: '/stipend/payroll/jul-dec-2023' },
                { name: 'Jan-Jun/2024', path: '/stipend/payroll/jan-jun-2024' },
              ]
            },
          ]
        },
      ]
    },
    {
      name: t('teacherAffairs'),
      icon: GraduationCap,
      color: 'bg-emerald-50 text-emerald-600',
      borderColor: 'border-emerald-100',
      dropdown: [
        { name: t('teacherInfo'), path: '/teacher-info' },
        { name: t('homeVisit'), path: '/home-visit' },
        { name: t('casualLeave'), path: '/casual-leave' },
        { name: t('classObservationChecklist'), path: '/class-observation' },
        { name: t('movement'), path: '/movement' },
        { name: t('trainingInfo'), path: '/training-info' },
        { name: t('dutyDistribution'), path: '/duty-distribution' },
        { name: t('dailyLesson'), path: '/daily-lesson' },
        { name: t('lessonStudy'), path: '/lesson-study' },
        { name: t('academicSupervision'), path: '/academic-supervision' },
        {
          name: t('teachersACR'),
          dropdown: [
            { name: '10-12th Grade Proposed Form', path: '/teachers-acr/grade-10-12' },
            { name: '13-16th Grade Proposed Form', path: '/teachers-acr/grade-13-16' },
          ]
        },
      ]
    },
    {
      name: t('evaluation'),
      icon: Award,
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-100',
      dropdown: [
        { name: t('examSchedule'), path: '/exam-schedule' },
        { name: t('terminalEvaluation1_3'), path: '/terminal-evaluation-1-3' },
        { name: t('practicalEvaluation4_5'), path: '/practical-evaluation-4-5' },
        { name: t('mayGradePromotion'), path: '/may-grade-promotion' },
        { name: t('completionInfo'), path: '/completion-info' },
        { name: t('certificate'), path: '/certificate' },
        { name: t('studentLetter'), path: '/student-letter' },
        { name: t('readingSkills'), path: '/reading-skills' },
        {
          name: t('piList'),
          dropdown: [
            { name: t('first'), path: '/pi-list/first-grade' },
            { name: t('second'), path: '/pi-list/second-grade' },
            { name: t('third'), path: '/pi-list/third-grade' },
          ]
        },
      ]
    },
    { 
      name: t('aboutUs'), 
      icon: Layout,
      color: 'bg-orange-50 text-orange-600',
      borderColor: 'border-orange-100',
      dropdown: [
        { name: t('history'), path: '/history' },
        { name: t('committee'), path: '/committee' },
        { name: t('headTeacher'), path: '/headmaster' },
        { name: t('teachers'), path: '/teachers' }
      ]
    },
    { 
      name: t('academic'), 
      icon: BookOpen,
      color: 'bg-indigo-50 text-indigo-600',
      borderColor: 'border-indigo-100',
      dropdown: [
        { name: t('schoolInfo'), path: '/school-info' },
        { name: t('schoolGazette'), path: '/school-gazette' },
        { name: t('teacherGazette'), path: '/teacher-gazette' },
        { name: t('headTeachersList'), path: '/head-teachers-list' },
        {
          name: t('register'),
          dropdown: [
            { name: t('inspection'), path: '/register/inspection' },
            { name: t('stockRegister'), path: '/register/stock' },
            { name: t('slip'), path: '/register/slip' },
            { name: t('minorRepair'), path: '/register/minor-repair' },
            { name: t('incomeExpense'), path: '/register/income-expense' },
            { name: t('materials'), path: '/register/materials' },
            { name: t('eventRegister'), path: '/register/event' },
          ]
        },
        {
          name: t('mr'),
          dropdown: [
            { name: 'January-February', path: '/mr/jan-feb' },
            { name: 'February-March', path: '/mr/feb-mar' },
            { name: 'March-April', path: '/mr/mar-apr' },
            { name: 'April-May', path: '/mr/apr-may' },
            { name: 'May-June', path: '/mr/may-jun' },
            { name: 'June-July', path: '/mr/jun-jul' },
            { name: 'July-August', path: '/mr/jul-aug' },
            { name: 'August-September', path: '/mr/aug-sep' },
            { name: 'September-October', path: '/mr/sep-oct' },
            { name: 'October-November', path: '/mr/oct-nov' },
            { name: 'November-December', path: '/mr/nov-dec' },
            { name: 'December-January', path: '/mr/dec-jan' },
          ]
        },
        {
          name: t('apa'),
          dropdown: [
            { name: 'APA 2023', path: '/apa/2023' },
            { name: 'APA 2024', path: '/apa/2024' },
          ]
        },
        { name: t('annualWorkPlan'), path: '/annual-work-plan' },
        { name: t('classRoutine'), path: '/routine' },
        { name: t('interSports'), path: '/inter-sports' },
        { name: t('holidayList'), path: '/holiday-list-2024' },
        { name: t('miscForms'), path: '/misc-forms' },
        { name: t('scholarshipExam'), path: '/scholarship-exam' },
        { name: t('electricityBill'), path: '/electricity-bill' },
        { name: t('vouchers'), path: '/vouchers' },
        { name: t('urcRelated'), path: '/urc-related' },
      ]
    },
    {
      name: t('committee'),
      icon: Users,
      color: 'bg-teal-50 text-teal-600',
      borderColor: 'border-teal-100',
      dropdown: [
        { name: t('managingCommittee'), path: '/managing-committee' },
        { name: t('pta'), path: '/pta' },
        { name: t('slipCommittee'), path: '/slip-committee' },
        { name: t('sacCommittee'), path: '/sac-committee' },
        { name: t('studentCouncil'), path: '/student-council' },
        { name: t('minorDoctorTeam'), path: '/minor-doctor-team' },
        { name: t('kabdol'), path: '/kabdol' },
      ]
    },
    {
      name: t('registration'),
      icon: FileCheck,
      color: 'bg-cyan-50 text-cyan-600',
      borderColor: 'border-cyan-100',
      dropdown: [
        { name: t('smcResolution'), path: '/smc-resolution' },
        { name: t('ptaResolution'), path: '/pta-resolution' },
        { name: t('slipResolution'), path: '/slip-resolution' },
        { name: t('sacResolution'), path: '/sac-resolution' },
        { name: t('mothersAssembly'), path: '/mothers-assembly' },
        { name: t('guardiansAssembly'), path: '/guardians-assembly' },
        { name: t('courtyardMeeting'), path: '/courtyard-meeting' },
        { name: t('staffMeeting'), path: '/staff-meeting' },
        { name: t('studentCouncilResolution'), path: '/student-council-resolution' },
        { name: t('minorDoctorResolution'), path: '/minor-doctor-resolution' },
      ]
    },
    {
      name: t('libraryAssistance'),
      icon: Library,
      color: 'bg-rose-50 text-rose-600',
      borderColor: 'border-rose-100',
      dropdown: [
        { name: t('textbook'), path: '/textbook' },
        { name: t('teachersGuide'), path: '/teachers-guide' },
      ]
    },
    {
      name: t('prePrimary'),
      icon: GraduationCap,
      color: 'bg-pink-50 text-pink-600',
      borderColor: 'border-pink-100',
      dropdown: [
        { name: t('annualCurriculumPlan'), path: '/pre-primary/annual-plan' },
        { name: t('weeklyClassRoutine'), path: '/pre-primary/weekly-routine' },
        { name: t('evaluationChart5Plus'), path: '/pre-primary/evaluation-5plus' },
        { name: t('certificate'), path: '/pre-primary/certificate' },
        { name: t('inspectionForm'), path: '/pre-primary/inspection-form' },
        { name: t('teachersGuide4Plus'), path: '/pre-primary/guide-4plus' },
        { name: t('teachersGuide5Plus'), path: '/pre-primary/guide-5plus' },
      ]
    },
    {
      name: t('curriculumLesson'),
      icon: ClipboardList,
      color: 'bg-amber-50 text-amber-600',
      borderColor: 'border-amber-100',
      dropdown: [
        { name: t('first'), path: '/curriculum/first' },
        { name: t('second'), path: '/curriculum/second' },
        { name: t('third'), path: '/curriculum/third' },
        { name: t('fourth'), path: '/curriculum/fourth' },
        { name: t('fifth'), path: '/curriculum/fifth' },
        {
          name: t('science'),
          dropdown: [
            { name: t('third'), path: '/curriculum/science/third' },
            { name: t('fourth'), path: '/curriculum/science/fourth' },
            { name: t('fifth'), path: '/curriculum/science/fifth' },
          ]
        },
      ]
    },
    {
      name: t('gallery'),
      icon: ImageIcon,
      color: 'bg-fuchsia-50 text-fuchsia-600',
      borderColor: 'border-fuchsia-100',
      dropdown: [
        {
          name: t('wallMagazine'),
          dropdown: [
            { name: '21 February', path: '/gallery/wall-magazine/21-february' },
            { name: '26 March', path: '/gallery/wall-magazine/26-march' },
          ]
        },
        { name: t('institutional'), path: '/gallery/institutional' },
        { name: t('primaryEducation'), path: '/gallery/primary-education' },
        { name: t('dayCelebrations'), path: '/gallery/day-celebrations' },
        { name: t('teachers'), path: '/gallery/teachers' },
        { name: t('others'), path: '/gallery/others' },
        {
          name: t('miscellaneous'),
          dropdown: [
            { name: t('slide'), path: '/gallery/miscellaneous/slide' },
          ]
        },
      ]
    },
    {
      name: t('tools'),
      icon: Settings,
      color: 'bg-slate-50 text-slate-600',
      borderColor: 'border-slate-100',
      dropdown: [
        { name: t('matriolaDrawing'), path: '/tools/matriola-drawing' },
        { name: t('calculator'), path: '/tools/calculator' },
        { name: t('bmiCalculator'), path: '/tools/bmi-calculator' },
        { name: t('dictionary'), path: '/tools/dictionary' },
        { name: t('countdown'), path: '/tools/countdown' },
        { name: t('stopwatch'), path: '/tools/stopwatch' },
        { name: t('todoList'), path: '/tools/todo-list' },
        { name: t('qrCode'), path: '/tools/qr-code' },
        { name: t('quiz'), path: '/tools/quiz' },
        { name: t('scientificCalculator'), path: '/tools/scientific-calculator' },
        { name: t('drawingTools'), path: '/tools/drawing' },
        { name: t('flipText'), path: '/tools/flip-text' },
      ]
    },
  ];

  const fetchPages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/pages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        const dataMap = {};
        data.forEach(page => {
          dataMap[page.pageKey] = page;
        });
        setPagesData(dataMap);
      }
    } catch (error) {
      console.error('Error fetching pages:', error);
      toast.error(t('loadFailed'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleFileUpload = async (pageKey, title, file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setUploading(pageKey);
    try {
      const token = localStorage.getItem('token');
      
      // 1. Upload File
      const uploadResponse = await fetch('http://localhost:8080/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error('File upload failed');
      const uploadData = await uploadResponse.json();
      const pdfUrl = uploadData.fileUrl;

      // 2. Update Page Content
      const currentPage = pagesData[pageKey] || {};
      const pageData = {
        pageKey,
        title,
        pdfUrl,
        visible: currentPage.visible !== undefined ? currentPage.visible : true
      };

      const saveResponse = await fetch('http://localhost:8080/api/pages', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(pageData),
      });

      if (!saveResponse.ok) throw new Error('Failed to save page info');
      
      toast.success(t('uploadSuccess'));
      fetchPages();
    } catch (error) {
      console.error(error);
      toast.error(t('uploadFailed'));
    } finally {
      setUploading(null);
    }
  };

  const toggleVisibility = async (pageKey, currentData) => {
    if (!currentData) return;

    try {
      const token = localStorage.getItem('token');
      const updatedPage = { ...currentData, visible: !currentData.visible };
      const response = await fetch('http://localhost:8080/api/pages', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedPage),
      });

      if (response.ok) {
        toast.success(`${t('visibilityUpdated')} ${updatedPage.visible ? t('live') : t('hidden')}`);
        fetchPages();
      }
    } catch (error) {
      toast.error(t('visibilityFailed'));
    }
  };

  const handleDelete = async (pageKey, id) => {
    if (!window.confirm(t('deleteConfirm'))) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/pages/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        toast.success(t('deleteSuccess'));
        fetchPages();
      }
    } catch (error) {
      toast.error(t('deleteFailed'));
    }
  };

  const toggleExpand = (name) => {
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Helper to count active files in a category
  const countActiveFiles = (items) => {
    let count = 0;
    const traverse = (list) => {
      list.forEach(item => {
        if (item.dropdown) {
          traverse(item.dropdown);
        } else {
          const key = getPageKey(item.path);
          if (pagesData[key]) count++;
        }
      });
    };
    traverse(items);
    return count;
  };

  const renderItem = (item, depth = 0) => {
    const hasChildren = item.dropdown && item.dropdown.length > 0;
    const paddingLeft = `${depth * 1.5}rem`;
    
    // If it's a leaf node (page)
    if (!hasChildren) {
      const pageKey = getPageKey(item.path);
      const currentData = pagesData[pageKey];
      const hasContent = !!currentData;
      const isVisible = currentData?.visible;

      return (
        <div key={item.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors group">
          <div className="flex items-center justify-between py-2.5 pr-4" style={{ paddingLeft }}>
            <div className="flex items-center space-x-3">
              <div className={`p-1.5 rounded-lg ${hasContent ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                <FileText size={16} />
              </div>
              <span className={`text-sm font-medium ${hasContent ? 'text-gray-900' : 'text-gray-500'}`}>
                {item.name}
              </span>
            </div>
            
            <div className="flex items-center space-x-3 opacity-60 group-hover:opacity-100 transition-opacity">
              {/* Status Badge */}
              {hasContent && (
                <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full ${
                  isVisible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {isVisible ? t('live') : t('hidden')}
                </span>
              )}

              {/* View Link */}
              {hasContent && (
                <button 
                  onClick={() => setPreviewUrl(currentData.pdfUrl)}
                  className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                >
                  {t('view')}
                </button>
              )}

              {/* Actions */}
              <div className="flex items-center space-x-1">
                <label className="cursor-pointer text-gray-500 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50 transition-colors" title={t('uploadPdf')}>
                  {uploading === pageKey ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <Upload size={16} />
                  )}
                  <input 
                    type="file" 
                    accept="application/pdf" 
                    className="hidden" 
                    onChange={(e) => handleFileUpload(pageKey, item.name, e.target.files[0])}
                    disabled={uploading === pageKey}
                  />
                </label>

                {hasContent && (
                  <>
                    <button 
                      onClick={() => toggleVisibility(pageKey, currentData)}
                      className={`p-1.5 rounded-md hover:bg-gray-100 transition-colors ${isVisible ? 'text-green-600' : 'text-gray-400'}`}
                      title={isVisible ? t('hidePage') : t('showPage')}
                    >
                      {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                    
                    <button 
                      onClick={() => handleDelete(pageKey, currentData.id)}
                      className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                      title={t('deleteContent')}
                    >
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // If it's a nested folder (Sub-category)
    const isExpanded = expanded[item.name];
    
    return (
      <div key={item.name} className="border-b border-gray-50 last:border-0">
        <div 
          className="flex items-center justify-between py-2.5 pr-4 cursor-pointer hover:bg-gray-50 transition-colors select-none group"
          style={{ paddingLeft }}
          onClick={() => toggleExpand(item.name)}
        >
          <div className="flex items-center space-x-2 text-gray-700 group-hover:text-gray-900">
            {isExpanded ? <FolderOpen size={16} className="text-blue-500" /> : <Folder size={16} className="text-gray-400 group-hover:text-blue-500" />}
            <span className="font-medium text-sm">{item.name}</span>
          </div>
          <ChevronRight size={14} className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
        </div>
        
        {isExpanded && (
          <div className="bg-gray-50/50 border-t border-gray-100 animate-in slide-in-from-top-1 duration-200">
            {item.dropdown.map(subItem => renderItem(subItem, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-8 relative pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">{t('manageContent')}</h2>
          <p className="text-gray-500 mt-1">{t('manageContentDesc')}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
          >
            <Languages size={16} className="text-blue-600" />
            <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <FileCheck size={16} className="text-green-500" />
            <span>{Object.keys(pagesData).length} {t('activeDocuments')}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        {navStructure.map((category) => {
          const activeCount = countActiveFiles(category.dropdown);
          const Icon = category.icon || Folder;
          
          return (
            <div key={category.name} className={`bg-white rounded-2xl shadow-sm border ${category.borderColor} overflow-hidden hover:shadow-md transition-shadow duration-300`}>
              {/* Card Header */}
              <div 
                className={`px-5 py-4 flex items-center justify-between cursor-pointer ${category.color} bg-opacity-10`}
                onClick={() => toggleExpand(category.name)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} bg-white bg-opacity-60`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{category.name}</h3>
                    <p className="text-xs opacity-70 font-medium">{activeCount} {t('activeFiles')}</p>
                  </div>
                </div>
                <div className={`p-1 rounded-full hover:bg-black/5 transition-colors`}>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 ${expanded[category.name] ? 'rotate-180' : ''}`} 
                  />
                </div>
              </div>

              {/* Card Body (Accordion Content) */}
              {expanded[category.name] && (
                <div className="border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                  {category.dropdown.map(item => renderItem(item, 1))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* PDF Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setPreviewUrl(null)}>
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2">
                <FileText className="text-blue-600" size={20} />
                <h3 className="font-bold text-gray-800">{t('documentPreview')}</h3>
              </div>
              <button 
                onClick={() => setPreviewUrl(null)} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 bg-gray-100/50 p-6 overflow-y-auto flex flex-col items-center">
              <Document
                file={previewUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center gap-3 mt-20">
                    <Loader2 className="animate-spin text-blue-600" size={40} />
                    <p className="text-gray-500 font-medium">{t('loadingDocument')}</p>
                  </div>
                }
                error={
                  <div className="flex flex-col items-center gap-3 mt-20 text-red-500">
                    <X size={40} />
                    <p className="font-medium">{t('failedToLoadPdf')}</p>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page 
                    key={`page_${index + 1}`} 
                    pageNumber={index + 1} 
                    width={700}
                    className="mb-6 shadow-lg rounded-lg overflow-hidden"
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePages;
