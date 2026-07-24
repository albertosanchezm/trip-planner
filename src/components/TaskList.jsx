'use client';

import { useState } from 'react';

export default function TaskList({ tasks, onToggle, onDelete, sectionId }) {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.done;
    if (filter === 'pending') return !task.done;
    return true;
  });

  const completedCount = tasks.filter(t => t.done).length;
  const totalCount = tasks.length;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-gray-500 bg-gray-50';
      default: return 'border-l-blue-500 bg-blue-50';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high': return '🔴 Importante';
      case 'medium': return '🟡 Normal';
      case 'low': return '⚪ Baja';
      default: return '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Progreso */}
      <div className="bg-gradient-to-r from-trip-primary to-trip-secondary rounded-lg p-4 text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Progreso</span>
          <span className="text-sm font-mono">{completedCount}/{totalCount}</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-300"
            style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-2">
        {['all', 'pending', 'done'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? 'bg-trip-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {f === 'all' && 'Todas'}
            {f === 'pending' && '⏳ Pendientes'}
            {f === 'done' && '✅ Completadas'}
          </button>
        ))}
      </div>

      {/* Tareas */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">
              {filter === 'done' && '¡Nada completado aún!'}
              {filter === 'pending' && '¡Todo hecho! 🎉'}
              {filter === 'all' && 'No hay tareas'}
            </p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className={`border-l-4 rounded-r p-3 transition-all cursor-pointer hover:shadow-md ${getPriorityColor(task.priority)} ${
                task.done ? 'opacity-60' : 'opacity-100'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => onToggle(sectionId, task.id)}
                  className="mt-1 w-5 h-5 cursor-pointer accent-trip-primary"
                />
                <div className="flex-1">
                  <p className={`font-medium ${task.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.title}
                  </p>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {task.priority && (
                      <span className="text-xs bg-white/50 px-2 py-0.5 rounded">
                        {getPriorityBadge(task.priority)}
                      </span>
                    )}
                    {task.deadline && (
                      <span className="text-xs bg-white/50 px-2 py-0.5 rounded">
                        📅 {task.deadline}
                      </span>
                    )}
                    {task.schedule && (
                      <span className="text-xs bg-white/50 px-2 py-0.5 rounded">
                        🗓️ {task.schedule}
                      </span>
                    )}
                    {task.transport && (
                      <span className="text-xs bg-white/50 px-2 py-0.5 rounded">
                        🚆 {task.transport}
                      </span>
                    )}
                  </div>
                  {task.note && (
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {task.note}
                    </p>
                  )}
                  {task.link && (
                    <a
                      href={task.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-trip-accent hover:underline mt-1 block"
                    >
                      🔗 Ver web oficial
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
