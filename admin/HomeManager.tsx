import React, { useState } from 'react';
import { Edit2, Save, Plus, Trash2, X } from 'lucide-react';
import { useAdmin, EditableHomeItem } from './AdminContext';
import { Category } from '../types';

const categories = [
  { value: Category.NEW_MEDIA, label: '新媒体运营' },
  { value: Category.DESIGN, label: '图文编辑' },
  { value: Category.DEV, label: '应用开发' },
  { value: Category.PHOTO, label: '静态摄影' },
  { value: Category.VIDEO, label: '动态影像' },
  { value: Category.AI_MODEL, label: 'AI模型' },
];

export const HomeManager: React.FC = () => {
  const { homeItems, updateHomeItem, language } = useAdmin();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<EditableHomeItem>>({});
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (item: EditableHomeItem) => {
    setEditingId(item.id);
    setFormData({ ...item });
  };

  const handleSave = () => {
    if (editingId) {
      updateHomeItem(editingId, formData);
      setEditingId(null);
      setFormData({});
    }
  };

  const handleAdd = () => {
    if (formData.title && formData.titleEn) {
      const newItem: EditableHomeItem = {
        id: `home-${Date.now()}`,
        title: formData.title,
        titleEn: formData.titleEn,
        subtitle: formData.subtitle || '',
        subtitleEn: formData.subtitleEn || '',
        category: formData.category || Category.NEW_MEDIA,
        link: formData.link || '',
        image: formData.image || '',
        tags: formData.tags || []
      };
      homeItems.push(newItem);
      setIsAdding(false);
      setFormData({});
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除吗？')) {
      const newItems = homeItems.filter(item => item.id !== id);
      updateHomeItem(id, {} as any);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black">首页管理</h2>
        <button
          onClick={() => { setIsAdding(true); setFormData({ title: '', titleEn: '', subtitle: '', subtitleEn: '', category: Category.NEW_MEDIA, link: '', image: '', tags: [] }); }}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
        >
          <Plus size={20} />
          添加项目
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeItems.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
            {editingId === item.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-bold mb-1">中文标题</label>
                  <input type="text" value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">英文标题</label>
                  <input type="text" value={formData.titleEn || ''} onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">分类</label>
                  <select value={formData.category || ''} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm">
                    {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">中文副标题</label>
                  <input type="text" value={formData.subtitle || ''} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">图片URL</label>
                  <input type="text" value={formData.image || ''} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>
                <div className="flex gap-2">
                  <button onClick={handleSave} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm"><Save size={14} />保存</button>
                  <button onClick={() => { setEditingId(null); setFormData({}); }} className="px-3 py-2 bg-gray-200 rounded-lg text-sm"><X size={14} /></button>
                </div>
              </div>
            ) : (
              <div>
                {item.image && <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-xl mb-4" />}
                <h3 className="font-bold text-lg">{language === 'zh' ? item.title : item.titleEn}</h3>
                <p className="text-gray-500 text-sm">{language === 'zh' ? item.subtitle : item.subtitleEn}</p>
                <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded">{categories.find(c => c.value === item.category)?.label || item.category}</span>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => handleEdit(item)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm"><Edit2 size={14} />编辑</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isAdding && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">添加首页项目</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-bold mb-1">中文标题</label>
                <input type="text" value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">英文标题</label>
                <input type="text" value={formData.titleEn || ''} onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">分类</label>
                <select value={formData.category || Category.NEW_MEDIA} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 border rounded-lg">
                  {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">中文副标题</label>
                <input type="text" value={formData.subtitle || ''} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">英文副标题</label>
                <input type="text" value={formData.subtitleEn || ''} onChange={(e) => setFormData({ ...formData, subtitleEn: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">图片URL</label>
                <input type="text" value={formData.image || ''} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">标签（逗号分隔）</label>
                <input type="text" value={formData.tags?.join(', ') || ''} onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="flex gap-3">
                <button onClick={handleAdd} className="flex-1 py-2 bg-green-500 text-white rounded-lg">添加</button>
                <button onClick={() => { setIsAdding(false); setFormData({}); }} className="flex-1 py-2 bg-gray-200 rounded-lg">取消</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
