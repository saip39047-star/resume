import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 text-slate-900">
      {/* Profile Photo Frame */}
      <div className="flex justify-center mb-4">
        <div className="w-56 h-72 rounded-[3rem] border-[12px] border-slate-900 overflow-hidden shadow-xl bg-slate-300">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Shazia Sirdeshmukh" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Contact</h2>
        <div className="h-[1px] w-full bg-slate-400 mb-6"></div>
        <div className="space-y-5">
          <div>
            <p className="text-sm font-black mb-0.5">Phone</p>
            <p className="text-sm font-medium text-slate-600">+91 9650388135</p>
          </div>
          <div>
            <p className="text-sm font-black mb-0.5">Email</p>
            <p className="text-sm font-medium text-slate-600 break-all">shaziasirdeshmukh@gmail.com</p>
          </div>
          <div>
            <p className="text-sm font-black mb-0.5">Address</p>
            <p className="text-sm font-medium text-slate-600">Delhi</p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section>
        <h2 className="text-lg font-black mb-4">Shazia is available for:</h2>
        <ul className="text-sm space-y-3 list-disc pl-5 font-medium text-slate-700">
          <li>School teacher training programs</li>
          <li>Academic audits & mentoring</li>
          <li>Leadership and capacity-building workshops</li>
          <li>Corporate training programs related to education, child development, and learning design</li>
        </ul>
      </section>

      {/* Passions */}
      <section>
        <h2 className="text-lg font-black mb-4">She is passionate about:</h2>
        <ul className="text-sm space-y-3 list-disc pl-5 font-medium text-slate-700">
          <li>Creating engaging and inclusive learning environments.</li>
          <li>Empowering teachers through mentorship and collaborative leadership</li>
          <li>Building strong parent–school relationships</li>
          <li>Leading teams toward sustainable academic excellence</li>
          <li>Training Engagements</li>
        </ul>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Language</h2>
        <div className="h-[1px] w-full bg-slate-400 mb-4"></div>
        <div className="space-y-1 text-sm font-black uppercase">
          <p>English</p>
          <p>Hindi</p>
          <p>Urdu</p>
        </div>
      </section>
    </div>
  );
};