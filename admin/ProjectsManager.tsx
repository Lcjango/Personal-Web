import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';
import { useAdmin, EditableProject } from './AdminContext';
import { Category } from '../types';

const categories = [
  { value: Category.NEW_MEDIA, label: '新媒体运营' },
  { value: Category.DESIGN, label: '图文编辑' },
  { value: Category.DEV, label: '应用开发' },
  { value: Category.PHOTO, label: '静态摄影' },
  { value: Category.VIDEO, label: '动态影像' },
  { value: Category.AI_MODEL, label: 'AI模型' },
];

export const ProjectsManager: React.FC = () => {
  const { projects, updateProject, addProject, deleteProject, language } = useAdmin();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<EditableProject>>({});

  const currentProjects = projects[language];
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' 
    ? currentProjects 
    : currentProjects.filter(p => p.category === filter);

  const handleEdit = (project: EditableProject) => {
    setEditingId(project.id);
    setFormData(project);
  };

  const handleSave = () => {
    if (editingId) {
      updateProject(language, editingId, formData);
      setEditingId(null);
      setFormData({});
    }
  };

  const handleAdd = () => {
    if (formData.id && formData.title) {
      addProject(language, {
        id: formData.id,
        title: formData.title,
        subtitle: formData.subtitle || '',
        category: formData.category || Category.NEW_MEDIA,
        description: formData.description || '',
        role: formData.role || '',
        image: formData.image || '',
        tags: formData.tags || [],
        ...formData
      } as EditableProject);
      setIsAdding(false);
      setFormData({});
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这个项目吗？')) {
      deleteProject(language, id);
    }
  };

  const generateId = () => `project-${Date.now()}`;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black">项目管理</h2>
        <button
          onClick={() => { setIsAdding(true); setFormData({ id: generateId(), title: '', subtitle: '', category: Category.NEW_MEDIA, description: '', role: '', image: '', tags: [] }); }}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          添加项目
        </button>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setFilter('All')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'All' ? 'bg-black text-white' : 'bg-white'}`}
        >
          全部
        </button>
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 py-2 rounded-lg transition-colors ${filter === cat.value ? 'bg-black text-white' : 'bg-white'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-2xl p-6 shadow-sm">
            {editingId === project.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                    <label className="block text-sm font-bold mb-2">副标题</label>
                    <input
                      type="text"
                      value={formData.subtitle || ''}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">分类</label>
                    <select
                      value={formData.category || ''}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">角色</label>
                    <input
                      type="text"
                      value={formData.role || ''}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">描述</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">图片URL</label>
                  <input
                    type="text"
                    value={formData.image || ''}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">标签（逗号分隔）</label>
                  <input
                    type="text"
                    value={formData.tags?.join(', ') || ''}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    <Save size={16} />
                    保存
                  </button>
                  <button
                    onClick={() => { setEditingId(null); setFormData({}); }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    <X size={16} />
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-16 h-16 object-cover rounded-lg" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-500">{project.subtitle}</p>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {categories.find(c => c.value === project.category)?.label || project.category}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isAdding && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">添加新项目</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">ID</label>
                <input
                  type="text"
                  value={formData.id || ''}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                  <label className="block text-sm font-bold mb-2">副标题</label>
                  <input
                    type="text"
                    value={formData.subtitle || ''}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">分类</label>
                  <select
                    value={formData.category || Category.NEW_MEDIA}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">角色</label>
                  <input
                    type="text"
                    value={formData.role || ''}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">描述</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">图片URL</label>
                <input
                  type="text"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">标签（逗号分隔）</label>
                <input
                  type="text"
                  value={formData.tags?.join(', ') || ''}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleAdd}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  <Save size={16} />
                  添加
                </button>
                <button
                  onClick={() => { setIsAdding(false); setFormData({}); }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
