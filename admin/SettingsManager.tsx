import React from 'react';
import { Settings, Database, Trash2 } from 'lucide-react';
import { useAdmin } from './AdminContext';

export const SettingsManager: React.FC = () => {
  const { exportData, importData } = useAdmin();

  const handleClearData = () => {
    if (confirm('确定要清除所有编辑数据吗？这将恢复为原始数据。')) {
      localStorage.removeItem('adminData');
      window.location.reload();
    }
  };

  const handleResetAll = () => {
    if (confirm('确定要重置所有数据吗？此操作不可恢复！')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-black mb-8 flex items-center gap-2">
        <Settings size={32} />
        系统设置
      </h2>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database size={20} />
            数据管理
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="font-medium mb-2">数据存储说明</p>
              <p className="text-sm text-gray-600">
                所有编辑的数据保存在浏览器 localStorage 中。导出数据后可导入到其他浏览器或设备。
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
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
                }}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                导出所有数据
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trash2 size={20} />
            危险操作
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="font-medium text-red-700 mb-2">清除编辑数据</p>
              <p className="text-sm text-red-600 mb-4">
                清除所有通过管理后台编辑的数据，恢复为原始数据。此操作不会影响原始代码。
              </p>
              <button
                onClick={handleClearData}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                清除数据
              </button>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="font-medium text-red-700 mb-2">重置所有数据</p>
              <p className="text-sm text-red-600 mb-4">
                清除所有数据（包括导入的数据），恢复为代码中的原始状态。此操作不可恢复！
              </p>
              <button
                onClick={handleResetAll}
                className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors"
              >
                重置所有数据
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">使用说明</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>1. 管理后台用于编辑网站内容，数据保存在浏览器本地存储中</p>
            <p>2. 如需部署更改，需要导出数据并手动更新代码文件</p>
            <p>3. 导出/导入功能可在不同浏览器或设备间同步数据</p>
            <p>4. 切换语言可分别编辑中英文内容</p>
          </div>
        </div>
      </div>
    </div>
  );
};
