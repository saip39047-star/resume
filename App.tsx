import React from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-12 px-4 flex flex-col items-center selection:bg-slate-200 selection:text-slate-900">
      {/* Professional Controls */}
      <div className="no-print mb-8 flex items-center gap-4">
        <button 
          onClick={handlePrint}
          className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-md border border-slate-200 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export Profile PDF
        </button>
      </div>

      {/* Main Resume Container */}
      <div className="resume-container bg-white w-full max-w-[1050px] min-h-[1485px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden rounded-[2rem] border border-slate-200/50">
        
        {/* Left Column (Sidebar) */}
        <div className="w-full md:w-[35%] bg-[#f8fafc] p-10 md:p-12 border-r border-slate-100">
          <Sidebar />
        </div>

        {/* Right Column (Main Content) */}
        <div className="w-full md:w-[65%] p-10 md:p-16 relative bg-white">
          <MainContent />
        </div>

      </div>
      
      <footer className="no-print mt-12 text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
        Professional Portfolio • Shazia Sirdeshmukh
      </footer>
    </div>
  );
};

export default App;