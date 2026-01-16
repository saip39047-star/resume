import React from 'react';

const ExpertiseItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="group relative pl-10 mb-8 last:mb-0">
    {/* Timeline Vertical Line Segment */}
    <div className="absolute left-[3px] top-[24px] bottom-[-32px] w-[1px] bg-slate-200 group-last:hidden"></div>
    {/* Node Accent */}
    <div className="absolute left-0 top-[6px] w-[7px] h-[7px] bg-slate-800 rounded-full transition-transform group-hover:scale-150 z-10"></div>
    
    <h4 className="font-bold text-slate-900 text-lg mb-1 leading-tight group-hover:text-slate-700 transition-colors">{title}</h4>
    <p className="text-[13px] text-slate-600 leading-relaxed max-w-[95%]">
      {description}
    </p>
  </div>
);

export const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Executive Header */}
      <header className="mb-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-1">
            SHAZIA <span className="text-slate-400 font-light italic">Sirdeshmukh</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-slate-800"></div>
            <p className="text-lg text-slate-600 font-semibold tracking-wide uppercase text-sm">
              Education Specialist & Child Psychologist
            </p>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex flex-col gap-12">
        
        {/* About Section */}
        <section>
          <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Executive Summary</h2>
          <p className="text-[15px] text-slate-700 leading-relaxed text-justify font-medium">
            A seasoned Early Childhood Education and Teacher Training Specialist with over 25 years of experience. 
            Holding a Master’s degree in Child Psychology, Shazia specializes in designing impactful training programs 
            that support <span className="text-slate-900 font-bold">holistic child development</span>, effective teaching practices, 
            and strong parent–school partnerships.
          </p>
        </section>

        {/* Expertise Section */}
        <section>
          <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Professional Core</h2>
          <div className="flex flex-col">
            <ExpertiseItem 
              title="Teacher Training & Capacity Building" 
              description="Empowering educators through evidence-based pedagogical training and modern classroom management strategies." 
            />
            <ExpertiseItem 
              title="Curriculum & Pedagogy Design" 
              description="Crafting innovative, age-appropriate educational frameworks that balance global standards with local heritage." 
            />
            <ExpertiseItem 
              title="Academic Leadership" 
              description="Strategic planning and quality enhancement for institutional growth and academic excellence." 
            />
            <ExpertiseItem 
              title="Stakeholder Communication" 
              description="Bridging the gap between institutions and parents through empathetic and effective engagement models." 
            />
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mt-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 -mr-12 -mt-12 rounded-full"></div>
          <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Philosophy</h2>
          <p className="text-[14px] text-slate-700 leading-relaxed italic relative z-10">
            "My approach bridges modern global pedagogies like Reggio Emilia with traditional Vedic principles. 
            The goal is not just academic instruction, but the nurturing of cognitive, emotional, social, and moral growth 
            within an inclusive, reflective learning environment."
          </p>
        </section>

      </div>
      
      {/* Modern Minimal Footer for Resume */}
      <div className="mt-auto pt-12 flex justify-between items-end border-t border-slate-100">
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          Portfolio 2025
        </div>
        <div className="w-16 h-[2px] bg-slate-200"></div>
      </div>
    </div>
  );
};