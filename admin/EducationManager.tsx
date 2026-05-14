import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Save, BookOpen, Briefcase } from 'lucide-react';
import { useAdmin, EditableExperience, EditableEducationContent } from './AdminContext';

export const EducationManager: React.FC = () => {
  const { education, updateEducation, language } = useAdmin();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<EditableEducationContent>>({});
  const [editingExperience, setEditingExperience] = useState<{ type: 'education' | 'work'; index: number } | null>(null);
  const [isAddingExperience, setIsAddingExperience] = useState<'education' | 'work' | null>(null);

  const currentEdu = education[language];

  const handleSaveBasic = () => {
    updateEducation(language, formData);
    setEditingField(null);
  };

  const handleEditExperience = (type: 'education' | 'work', index: number) => {
    const list = type === 'education' ? currentEdu.experiences : currentEdu.workExperiences;
    setEditingExperience({ type, index });
    setFormData({ ...list[index] });
  };

  const handleSaveExperience = () => {
    if (!editingExperience) return;
    const { type, index } = editingExperience;
    const key = type === 'education' ? 'experiences' : 'workExperiences';
    const newList = [...(currentEdu[key] as EditableExperience[])];
    newList[index] = { ...formData } as EditableExperience;
    updateEducation(language, { [key]: newList });
    setEditingExperience(null);
    setFormData({});
  };

  const handleAddExperience = () => {
    if (!isAddingExperience) return;
    const key = isAddingExperience === 'education' ? 'experiences' : 'workExperiences';
    const newExp: EditableExperience = {
      id: `exp-${Date.now()}`,
      year: '',
      title: '',
      institution: '',
      description: '',
      type: isAddingExperience
    };
    updateEducation(language, { [key]: [...(currentEdu[key] as EditableExperience[]), newExp] });
    setIsAddingExperience(null);
  };

  const handleDeleteExperience = (type: 'education' | 'work', index: number) => {
    if (!confirm('确定要删除吗？')) return;
    const key = type === 'education' ? 'experiences' : 'workExperiences';
    const newList = [...(currentEdu[key] as EditableExperience[])];
    newList.splice(index, 1);
    updateEducation(language, { [key]: newList });
  };

  return (
    <div>
      <h2 className="text-3xl font-black mb-8">背景管理</h2>

      <div className="bg-white rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">基本信息</h3>
        {editingField === 'basic' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">标题</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">简介</label>
              <textarea
                value={formData.about || ''}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">状态</label>
              <input
                type="text"
                value={formData.openToWork || ''}
                onChange={(e) => setFormData({ ...formData, openToWork: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={handleSaveBasic} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                保存
              </button>
              <button onClick={() => { setEditingField(null); setFormData({}); }} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                取消
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p><strong>标题：</strong>{currentEdu.title}</p>
            <p><strong>简介：</strong>{currentEdu.about}</p>
            <p><strong>状态：</strong>{currentEdu.openToWork}</p>
            <button onClick={() => { setEditingField('basic'); setFormData(currentEdu); }} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              编辑
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen size={20} />
              教育经历
            </h3>
            <button
              onClick={() => { setIsAddingExperience('education'); setFormData({ id: `edu-${Date.now()}`, year: '', title: '', institution: '', description: '', type: 'education' }); }}
              className="px-3 py-1 bg-black text-white rounded-lg text-sm"
            >
              添加
            </button>
          </div>
          <div className="space-y-4">
            {currentEdu.experiences.map((exp, index) => (
              <div key={exp.id} className="border rounded-xl p-4">
                {editingExperience?.type === 'education' && editingExperience?.index === index ? (
                  <div className="space-y-2">
                    <input type="text" value={formData.year || ''} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="时间" />
                    <input type="text" value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="标题" />
                    <input type="text" value={formData.institution || ''} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="机构" />
                    <textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 border rounded" rows={2} placeholder="描述" />
                    <div className="flex gap-2">
                      <button onClick={handleSaveExperience} className="px-3 py-1 bg-green-500 text-white rounded text-sm">保存</button>
                      <button onClick={() => { setEditingExperience(null); setFormData({}); }} className="px-3 py-1 bg-gray-200 rounded text-sm">取消</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{exp.title}</p>
                      <p className="text-sm text-gray-500">{exp.year}</p>
                      <p className="text-sm">{exp.institution}</p>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => handleEditExperience('education', index)} className="p-1 bg-blue-100 text-blue-600 rounded"><Edit2 size={14} /></button>
                      <button onClick={() => handleDeleteExperience('education', index)} className="p-1 bg-red-100 text-red-600 rounded"><Trash2 size={14} /></button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Briefcase size={20} />
              工作经历
            </h3>
            <button
              onClick={() => { setIsAddingExperience('work'); setFormData({ id: `work-${Date.now()}`, year: '', title: '', institution: '', description: '', type: 'work' }); }}
              className="px-3 py-1 bg-black text-white rounded-lg text-sm"
            >
              添加
            </button>
          </div>
          <div className="space-y-4">
            {currentEdu.workExperiences.map((exp, index) => (
              <div key={exp.id} className="border rounded-xl p-4">
                {editingExperience?.type === 'work' && editingExperience?.index === index ? (
                  <div className="space-y-2">
                    <input type="text" value={formData.year || ''} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="时间" />
                    <input type="text" value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="标题" />
                    <input type="text" value={formData.institution || ''} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="机构" />
                    <textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 border rounded" rows={2} placeholder="描述" />
                    <div className="flex gap-2">
                      <button onClick={handleSaveExperience} className="px-3 py-1 bg-green-500 text-white rounded text-sm">保存</button>
                      <button onClick={() => { setEditingExperience(null); setFormData({}); }} className="px-3 py-1 bg-gray-200 rounded text-sm">取消</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{exp.title}</p>
                      <p className="text-sm text-gray-500">{exp.year}</p>
                      <p className="text-sm">{exp.institution}</p>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => handleEditExperience('work', index)} className="p-1 bg-blue-100 text-blue-600 rounded"><Edit2 size={14} /></button>
                      <button onClick={() => handleDeleteExperience('work', index)} className="p-1 bg-red-100 text-red-600 rounded"><Trash2 size={14} /></button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isAddingExperience && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">添加{isAddingExperience === 'education' ? '教育' : '工作'}经历</h3>
            <div className="space-y-3">
              <input type="text" value={formData.year || ''} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="时间" />
              <input type="text" value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="标题" />
              <input type="text" value={formData.institution || ''} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="w-full px-3 py-2 border rounded" placeholder="机构" />
              <textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 border rounded" rows={2} placeholder="描述" />
              <div className="flex gap-3">
                <button onClick={handleAddExperience} className="flex-1 py-2 bg-green-500 text-white rounded-lg">添加</button>
                <button onClick={() => { setIsAddingExperience(null); setFormData({}); }} className="flex-1 py-2 bg-gray-200 rounded-lg">取消</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
