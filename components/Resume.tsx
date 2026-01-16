import React from 'react';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

export const Resume: React.FC = () => {
  return (
    <div className="resume-container bg-white w-full max-w-[1050px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] flex flex-col md:flex-row overflow-hidden border border-slate-200/50 relative fade-in">
      {/* Sidebar Section - Grey Background explicitly set for both web and print */}
      <aside className="sidebar-column w-full md:w-[35%] bg-[#e5e7eb] p-10 md:p-14 print:bg-[#e5e7eb]">
        <Sidebar />
      </aside>

      {/* Main Content Section - White Background */}
      <main className="main-column w-full md:w-[65%] p-10 md:p-16 relative bg-white print:bg-white">
        <MainContent />
      </main>
    </div>
  );
};