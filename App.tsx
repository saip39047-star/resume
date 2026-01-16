import React, { useState } from 'react';
import { Resume } from './components/Resume';

const App: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    // Ensure the window is focused for the print dialog
    window.focus();
    
    // Use a slightly longer timeout to ensure browser layout is stable
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] md:py-12 flex flex-col items-center">
      {/* PDF Export Header */}
      <div className="no-print w-full max-w-[1050px] px-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Shazia Sirdeshmukh</h1>
          <p className="text-slate-500 text-sm">Professional Portfolio & Executive Resume</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="group bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-3 border border-slate-700 disabled:opacity-50"
          >
            {isExporting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating PDF...
              </span>
            ) : (
              <>
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download PDF
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Document Content */}
      <Resume />

      {/* Footer info for web view only */}
      <footer className="no-print my-12 text-center max-w-lg px-6">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
          Shazia Sirdeshmukh • Educator & Consultant
        </p>
        <p className="text-slate-400 text-[10px] italic">
          To save as PDF, click the button above and select "Save as PDF" in your browser's print destination.
        </p>
      </footer>
    </div>
  );
}; export default App;