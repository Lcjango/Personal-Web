
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BACKGROUND_DATA } from '../src/data/education';
import { Language } from '../types';
import { ArrowUpRight, X, Mail, Briefcase, Award, GraduationCap, Wrench, Lock, Eye, EyeOff } from 'lucide-react';

interface BackgroundSectionProps {
  language: Language;
}

export const TimelineSection: React.FC<BackgroundSectionProps> = ({ language }) => {
  const content = BACKGROUND_DATA[language];
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  
  const CORRECT_PASSWORD = '江';

  const handleUnlock = () => {
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

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
    <>
      {/* Education Page Access Card */}
      <div className="w-full max-w-[96vw] mx-auto pb-32 animate-[fadeIn_0.6s_ease-out_forwards]">
        <div className="border-2 border-black dark:border-white rounded-[2rem] p-12 md:p-16 text-center">
          <GraduationCap size={64} className="mx-auto mb-8 text-black dark:text-white" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black dark:text-white">
            {content.educationTitle}
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12">
            {language === 'zh' ? '输入密码访问' : 'Enter password to access'}
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                placeholder={language === 'zh' ? '请输入密码' : 'Enter password'}
                className={`w-full px-6 py-4 text-xl border-2 rounded-full bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${
                  error 
                    ? 'border-red-500 animate-shake' 
                    : 'border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white"
              >
                {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>
            <button
              onClick={handleUnlock}
              className="mt-6 px-12 py-4 bg-black dark:bg-white text-white dark:text-black text-xl font-bold rounded-full hover:scale-105 transition-transform"
            >
              {language === 'zh' ? '解锁' : 'Unlock'}
            </button>
          </div>
          {error && (
            <p className="mt-6 text-red-500 font-bold text-lg animate-pulse">
              {language === 'zh' ? '密码错误' : 'Incorrect password'}
            </p>
          )}
        </div>
      </div>

      {/* Education Content Modal */}
      {isRendered && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.3s_ease-out_forwards]">
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl animate-message-pop">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={24} className="text-black dark:text-white" />
            </button>
            
            <div className="p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-black dark:text-white">
                {content.educationTitle}
              </h2>
              
              <div className="space-y-6">
                {content.educationList.map((edu) => (
                  <div key={edu.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                    <div className="font-mono text-sm text-gray-400 dark:text-gray-500 mb-2">
                      {edu.period}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                      <p className="text-xl md:text-2xl font-bold text-black dark:text-white">
                        {edu.institution}
                      </p>
                      <span className="text-lg text-gray-500 dark:text-gray-400">
                        {edu.degree}
                      </span>
                    </div>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
                      {edu.major !== '无' ? edu.major : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default TimelineSection;
