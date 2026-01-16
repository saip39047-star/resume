import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Profile Photo - Using a placeholder for the uploaded photo style */}
      <div className="flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-slate-200 to-slate-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-56 h-72 rounded-2xl border-[8px] border-white overflow-hidden shadow-xl bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Shazia Sirdeshmukh" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          Contact
          <div className="h-[1px] flex-1 bg-slate-300"></div>
        </h2>
        <div className="space-y-5">
          <div className="group">
            <p className="font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-1 group-hover:text-slate-600 transition-colors">Phone</p>
            <p className="text-sm font-semibold text-slate-800">+91 9650388135</p>
          </div>
          <div className="group">
            <p className="font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-1 group-hover:text-slate-600 transition-colors">Email</p>
            <p className="text-sm font-semibold text-slate-800 break-all">shaziasirdeshmukh@gmail.com</p>
          </div>
          <div className="group">
            <p className="font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-1 group-hover:text-slate-600 transition-colors">Address</p>
            <p className="text-sm font-semibold text-slate-800">Delhi, India</p>
          </div>
        </div>
      </section>

      {/* Availability / Services */}
      <section className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
        <h2 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-300 pb-2">Availability</h2>
        <ul className="space-y-3">
          {[
            'Preschools & Learning Centers',
            'Academic Leadership Teams',
            'Teacher Mentorship Programs',
            'Parent Engagement Workshops',
            'Corporate Educational Spaces'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-slate-700 leading-tight">
              <span className="text-slate-400 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          Languages
          <div className="h-[1px] flex-1 bg-slate-300"></div>
        </h2>
        <div className="flex flex-wrap gap-2">
          {['English', 'Hindi', 'Urdu'].map(lang => (
            <span key={lang} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-200">
              {lang}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};