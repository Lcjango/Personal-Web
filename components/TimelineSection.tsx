
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BACKGROUND_DATA } from '../src/data/education';
import { Language } from '../types';
import { ArrowUpRight, X, Mail, Briefcase, Award, GraduationCap, Wrench } from 'lucide-react';

interface BackgroundSectionProps {
  language: Language;
}

export const TimelineSection: React.FC<BackgroundSectionProps> = ({ language }) => {
  const content = BACKGROUND_DATA[language];
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <div className="w-full max-w-[96vw] mx-auto pb-32 animate-[fadeIn_0.6s_ease-out_forwards]">
      
      {/* Header Section */}
      <div className="mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-none text-black dark:text-white">
              {content.title}
            </h2>
            <a 
              href={`mailto:${content.email}`}
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
              {content.email}
            </a>
          </div>
          <div className="text-xl md:text-2xl font-bold text-black dark:text-white">
            LcjanGo
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <Briefcase size={28} className="text-black dark:text-white" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white">
            {content.workExperienceTitle}
          </h3>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {content.workExperiences.map((work) => (
            <div key={work.id} className="border-l-4 border-black dark:border-white pl-6 md:pl-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 md:mb-4">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">
                  {work.institution}
                </h4>
                <span className="font-mono text-gray-400 dark:text-gray-500 font-bold text-sm md:text-base mt-1 md:mt-0">
                  {work.period}
                </span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                {work.title}
              </div>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Highlights Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <Award size={28} className="text-black dark:text-white" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white">
            {content.workHighlightsTitle}
          </h3>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          {content.workHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl">
              <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                {idx + 1}
              </span>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Honors & Education & Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
        
        {/* Personal Honors */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Award size={24} className="text-black dark:text-white" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black dark:text-white">
              {content.personalHonorsTitle}
            </h3>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {content.personalHonors.map((honor, idx) => (
              <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6">
                <div className="font-mono text-sm text-gray-400 dark:text-gray-500 mb-2">
                  {honor.year}
                </div>
                <p className="text-lg md:text-xl font-bold text-black dark:text-white leading-relaxed">
                  {honor.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap size={24} className="text-black dark:text-white" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black dark:text-white">
              {content.educationTitle}
            </h3>
          </div>
          
          <div className="space-y-4">
            {content.educationList.map((edu) => (
              <div key={edu.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6">
                <div className="font-mono text-sm text-gray-400 dark:text-gray-500 mb-2">
                  {edu.period}
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                  <p className="text-lg md:text-xl font-bold text-black dark:text-white">
                    {edu.institution}
                  </p>
                  <span className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                    {edu.degree}
                  </span>
                </div>
                <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mt-1">
                  {edu.major !== '无' ? edu.major : ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills Section - Full Width */}
      <section className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <Wrench size={28} className="text-black dark:text-white" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white">
            {content.skillsTitle}
          </h3>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {content.skills.map((skill) => (
            <div key={skill.id} className="border-t-2 border-black dark:border-white pt-6 md:pt-8">
              <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 md:mb-8">
                {skill.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 md:p-6">
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
