import React from 'react';

const ExpertiseItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="mb-5 last:mb-0">
    <h4 className="text-[15px] font-black text-slate-900 mb-1 leading-tight">{title}</h4>
    <p className="text-[13px] text-slate-600 leading-snug">{desc}</p>
  </div>
);

export const MainContent: React.FC = () => {
  return (
    <div className="relative pl-8">
      {/* Timeline Vertical Line */}
      <div className="absolute left-0 top-[220px] bottom-0 w-[2px] bg-slate-400"></div>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-[54px] font-black text-slate-900 leading-none mb-4">
          Shazia Sirdeshmukh
        </h1>
        <p className="text-[19px] font-medium text-slate-800 leading-tight">
          Education & Training Specialist | Child Psychology | Academic Leadership
        </p>
        <div className="h-[1.5px] w-full bg-slate-300 mt-8"></div>
      </header>

      {/* About Section */}
      <section className="relative mb-14">
        {/* Timeline Node */}
        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-[3px] border-white ring-4 ring-transparent"></div>
        <h2 className="text-[20px] font-black text-slate-400 uppercase tracking-widest mb-6">About</h2>
        <p className="text-[14px] text-slate-800 leading-relaxed text-justify font-medium">
          Shazia Sirdeshmukh is a seasoned education professional with over 25 years of experience in the field of early childhood and school education, specializing in teacher training, academic leadership, and holistic learning practices. She holds a Master's degree in Child Psychology, enabling her to design learning frameworks that are developmentally appropriate, impactful, and learner-centric. With deep expertise in training educators, mentoring academic teams, and improving student learning outcomes, she has successfully partnered with schools, institutions, and corporate organizations to deliver structured training programs, workshops, and capacity-building initiatives.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="relative mb-14">
        {/* Timeline Node */}
        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-[3px] border-white ring-4 ring-transparent"></div>
        <h2 className="text-[20px] font-black text-slate-400 uppercase tracking-widest mb-8">Professional Expertise</h2>
        
        <ExpertiseItem 
          title="Teacher Training & Capacity Building" 
          desc="Designing and delivering impactful training programs for educators to enhance teaching effectiveness and classroom practices." 
        />
        <ExpertiseItem 
          title="Classroom Observation & Feedback" 
          desc="Providing constructive observations, performance feedback, and mentoring to support continuous teacher development." 
        />
        <ExpertiseItem 
          title="Curriculum & Pedagogy Design" 
          desc="Developing innovative, age-appropriate curricula aligned with modern pedagogies and learner needs." 
        />
        <ExpertiseItem 
          title="Student Learning Outcome Improvement" 
          desc="Implementing strategies focused on academic excellence, engagement, and measurable learning progress." 
        />
        <ExpertiseItem 
          title="Academic Leadership & School Engagement" 
          desc="Supporting school leadership teams in academic planning, quality enhancement, and institutional growth." 
        />
        <ExpertiseItem 
          title="Stakeholder & Parent Communication" 
          desc="Strengthening parent-school partnerships through effective communication strategies and engagement models." 
        />
        <ExpertiseItem 
          title="Workshop Design & Facilitation" 
          desc="Conducting interactive workshops for teachers, school leaders, and corporate teams." 
        />
      </section>

      {/* Philosophy Section */}
      <section className="relative pb-10">
        {/* Timeline Node */}
        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-[3px] border-white ring-4 ring-transparent"></div>
        <h2 className="text-[20px] font-black text-slate-400 uppercase tracking-widest mb-6">Approach & Philosophy</h2>
        <p className="text-[14px] text-slate-800 leading-relaxed text-justify font-medium">
          With over two decades of hands-on experience, Shazia specializes in blending modern global pedagogies such as the Reggio Emilia approach with India's rich Vedic education principles. Her work emphasizes holistic child development, nurturing cognitive, emotional, social, and moral growth.
        </p>
      </section>
    </div>
  );
};