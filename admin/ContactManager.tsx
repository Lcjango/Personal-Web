import React, { useState } from 'react';
import { Save, Globe } from 'lucide-react';
import { useAdmin, EditableContact } from './AdminContext';

export const ContactManager: React.FC = () => {
  const { contact, updateContact, language } = useAdmin();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<EditableContact>(contact[language]);

  const currentContact = contact[language];

  const handleSave = () => {
    updateContact(language, formData);
    setEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black flex items-center gap-2">
          <Globe size={32} />
          联系信息管理
        </h2>
        {!editing && (
          <button
            onClick={() => { setEditing(true); setFormData(currentContact); }}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            编辑
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6">
        {editing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Hello标题</label>
                <input
                  type="text"
                  value={formData.hello}
                  onChange={(e) => setFormData({ ...formData, hello: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">邮箱</label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">位置</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">邮箱标签</label>
                <input
                  type="text"
                  value={formData.emailMeLabel}
                  onChange={(e) => setFormData({ ...formData, emailMeLabel: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">简介</label>
              <textarea
                value={formData.intro}
                onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Footer文字</label>
              <input
                type="text"
                value={formData.footerDesign}
                onChange={(e) => setFormData({ ...formData, footerDesign: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Tooltip提示</label>
              <input
                type="text"
                value={formData.tooltipText}
                onChange={(e) => setFormData({ ...formData, tooltipText: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            {formData.base && (
              <div>
                <label className="block text-sm font-bold mb-2">BASE文字</label>
                <input
                  type="text"
                  value={formData.base}
                  onChange={(e) => setFormData({ ...formData, base: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-bold mb-2">社交媒体</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">微信公众号</label>
                  <input
                    type="text"
                    value={formData.socials?.wechat || ''}
                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, wechat: e.target.value } })}
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">小红书</label>
                  <input
                    type="text"
                    value={formData.socials?.xiaohongshu || ''}
                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, xiaohongshu: e.target.value } })}
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Bilibili</label>
                  <input
                    type="text"
                    value={formData.socials?.bilibili || ''}
                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, bilibili: e.target.value } })}
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">500px</label>
                  <input
                    type="text"
                    value={formData.socials?.px500 || ''}
                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, px500: e.target.value } })}
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
              >
                <Save size={20} />
                保存
              </button>
              <button
                onClick={() => setEditing(false)}
                className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Hello标题</p>
                <p className="font-bold text-lg">{currentContact.hello}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">邮箱</p>
                <p className="font-bold text-lg">{currentContact.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">位置</p>
                <p className="font-bold text-lg">{currentContact.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">邮箱标签</p>
                <p className="font-bold text-lg">{currentContact.emailMeLabel}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">简介</p>
              <p className="font-medium">{currentContact.intro}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Footer文字</p>
              <p className="font-medium">{currentContact.footerDesign}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tooltip提示</p>
              <p className="font-medium">{currentContact.tooltipText}</p>
            </div>
            {currentContact.base && (
              <div>
                <p className="text-sm text-gray-500">BASE文字</p>
                <p className="font-medium">{currentContact.base}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500 mb-2">社交媒体</p>
              <div className="flex gap-4">
                {currentContact.socials?.wechat && <span className="bg-gray-100 px-3 py-1 rounded">微信: {currentContact.socials.wechat}</span>}
                {currentContact.socials?.xiaohongshu && <span className="bg-gray-100 px-3 py-1 rounded">小红书: {currentContact.socials.xiaohongshu}</span>}
                {currentContact.socials?.bilibili && <span className="bg-gray-100 px-3 py-1 rounded">B站: {currentContact.socials.bilibili}</span>}
                {currentContact.socials?.px500 && <span className="bg-gray-100 px-3 py-1 rounded">500px: {currentContact.socials.px500}</span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
