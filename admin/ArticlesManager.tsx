import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';
import { useAdmin, EditableArticle } from './AdminContext';
import { ArticleCategory } from '../types';

const articleCategories = [
  { value: ArticleCategory.DIT, label: 'DiT' },
  { value: ArticleCategory.LUNA, label: 'LUNA' },
  { value: ArticleCategory.TALK, label: '瞎叨be叨' },
  { value: ArticleCategory.AFTER8, label: 'After8' },
  { value: ArticleCategory.SERENITY, label: '山海疗养院' },
];

export const ArticlesManager: React.FC = () => {
  const { articles, updateArticle, addArticle, deleteArticle, language } = useAdmin();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<EditableArticle>>({});

  const currentArticles = articles[language];
  const [filter, setFilter] = useState<string>('All');

  const filteredArticles = filter === 'All' 
    ? currentArticles 
    : currentArticles.filter(a => a.category === filter);

  const handleEdit = (article: EditableArticle) => {
    setEditingId(article.id);
    setFormData(article);
  };

  const handleSave = () => {
    if (editingId) {
      updateArticle(language, editingId, formData);
      setEditingId(null);
      setFormData({});
    }
  };

  const handleAdd = () => {
    if (formData.id && formData.title) {
      addArticle(language, {
        id: formData.id,
        title: formData.title,
        category: formData.category || ArticleCategory.TALK,
        link: formData.link || '',
        ...formData
      } as EditableArticle);
      setIsAdding(false);
      setFormData({});
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这篇文章吗？')) {
      deleteArticle(language, id);
    }
  };

  const generateId = () => `article-${Date.now()}`;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black">文章管理</h2>
        <button
          onClick={() => { setIsAdding(true); setFormData({ id: generateId(), title: '', category: ArticleCategory.TALK, link: '' }); }}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          添加文章
        </button>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setFilter('All')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'All' ? 'bg-black text-white' : 'bg-white'}`}
        >
          全部
        </button>
        {articleCategories.map(cat => (
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
        {filteredArticles.map(article => (
          <div key={article.id} className="bg-white rounded-2xl p-6 shadow-sm">
            {editingId === article.id ? (
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
                    <label className="block text-sm font-bold mb-2">分类</label>
                    <select
                      value={formData.category || ''}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      {articleCategories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">链接</label>
                  <input
                    type="text"
                    value={formData.link || ''}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">封面图URL</label>
                  <input
                    type="text"
                    value={formData.coverImage || ''}
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">日期</label>
                  <input
                    type="text"
                    value={formData.date || ''}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
                  {article.coverImage && (
                    <img src={article.coverImage} alt={article.title} className="w-16 h-16 object-cover rounded-lg" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {articleCategories.find(c => c.value === article.category)?.label || article.category}
                      </span>
                      {article.date && (
                        <span className="text-sm text-gray-500">{article.date}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(article)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
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
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">添加新文章</h2>
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
                  <label className="block text-sm font-bold mb-2">分类</label>
                  <select
                    value={formData.category || ArticleCategory.TALK}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    {articleCategories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">链接</label>
                <input
                  type="text"
                  value={formData.link || ''}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">封面图URL</label>
                <input
                  type="text"
                  value={formData.coverImage || ''}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
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
