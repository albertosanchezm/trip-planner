'use client';

import { useState, useEffect } from 'react';

export default function Stats({ sections, tips }) {
  const [overallStats, setOverallStats] = useState({ total: 0, completed: 0 });

  useEffect(() => {
    let total = 0;
    let completed = 0;

    Object.values(sections).forEach(section => {
      section.tasks.forEach(task => {
        total++;
        if (task.done) completed++;
      });
    });

    setOverallStats({ total, completed });
  }, [sections]);

  const percentage = overallStats.total > 0 ? Math.round((overallStats.completed / overallStats.total) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Resumen general */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-trip-accent">{overallStats.total}</div>
          <div className="text-xs text-gray-600 mt-1">Tareas totales</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-green-600">{overallStats.completed}</div>
          <div className="text-xs text-gray-600 mt-1">Completadas</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-trip-primary">{percentage}%</div>
          <div className="text-xs text-gray-600 mt-1">Progreso</div>
        </div>
      </div>

      {/* Barra de progreso grande */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-800">Progreso total del viaje</span>
          <span className="text-sm font-mono text-gray-600">{overallStats.completed}/{overallStats.total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-trip-primary to-trip-secondary rounded-full h-3 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Tips */}
      <div className="bg-trip-dark rounded-lg p-4 text-white space-y-2">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          💡 Consejos útiles
        </h3>
        <div className="space-y-2 text-sm">
          {tips.slice(0, 3).map((tip, idx) => (
            <div key={idx} className="flex gap-2">
              <span className="flex-shrink-0">→</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
