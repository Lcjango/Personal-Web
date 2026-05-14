import React, { useState } from 'react';
import { Settings, Layout, FileText, GraduationCap, Home, Globe, Download, Upload, ChevronLeft } from 'lucide-react';
import { useAdmin } from './AdminContext';

type Tab = 'projects' | 'articles' | 'education' | 'home' | 'contact' | 'settings';

interface AdminLayoutProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  children: React.ReactNode;
  onBack: () => void;
}

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'projects', label: '项目管理', icon: <Layout size={20} /> },
  { id: 'articles', label: '文章管理', icon: <FileText size={20} /> },
  { id: 'education', label: '背景管理', icon: <GraduationCap size={20} /> },
  { id: 'home', label: '首页管理', icon: <Home size={20} /> },
  { id: 'contact', label: '联系管理', icon: <Globe size={20} /> },
  { id: 'settings', label: '系统设置', icon: <Settings size={20} /> },
];

export const AdminLayout: React.FC<AdminLayoutProps> = ({ activeTab, setActiveTab, children, onBack }) => {
  const { language, setLanguage, exportData, importData } = useAdmin();
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const [message, setMessage] = useState('');

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `website-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMessage('导出成功！');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleImport = () => {
    if (importData(importText)) {
      setMessage('导入成功！');
      setShowImport(false);
      setImportText('');
    } else {
      setMessage('导入失败，请检查JSON格式！');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-lg min-h-screen fixed left-0 top-0 flex flex-col">
          <div className="p-6 border-b">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="font-bold">返回网站</span>
            </button>
            <h1 className="text-2xl font-black mt-4">管理后台</h1>
          </div>

          <nav className="flex-1 p-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t space-y-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'zh' | 'en')}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={handleExport}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                <Download size={16} />
                导出
              </button>
              <button
                onClick={() => setShowImport(!showImport)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                <Upload size={16} />
                导入
              </button>
            </div>
          </div>
        </aside>

        <main className="ml-64 flex-1 p-8">
          {message && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in">
              {message}
            </div>
          )}

          {showImport && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
                <h2 className="text-xl font-bold mb-4">导入数据</h2>
                <textarea
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder="粘贴导出的JSON数据..."
                  className="w-full h-64 p-4 border rounded-xl font-mono text-sm"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleImport}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    确认导入
                  </button>
                  <button
                    onClick={() => setShowImport(false)}
                    className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    取消
                  </button>
                </div>
              </div>
            </div>
          )}

          {children}
        </main>
      </div>
    </div>
  );
};
