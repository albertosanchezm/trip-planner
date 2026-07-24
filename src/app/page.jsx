'use client';

import { useState, useEffect } from 'react';
import { tripData } from '@/data/tripData';
import SectionTabs from '@/components/SectionTabs';
import TaskList from '@/components/TaskList';
import Stats from '@/components/Stats';

const mergeSavedSections = (savedSections) =>
  Object.fromEntries(
    Object.entries(tripData.sections).map(([sectionId, latestSection]) => {
      const savedTasks = new Map((savedSections?.[sectionId]?.tasks || []).map(task => [task.id, task]));
      return [
        sectionId,
        {
          ...latestSection,
          tasks: latestSection.tasks.map(task => ({
            ...task,
            done: savedTasks.get(task.id)?.done ?? task.done,
          })),
        },
      ];
    })
  );

export default function Home() {
  const [sections, setSections] = useState(tripData.sections);
  const [activeSection, setActiveSection] = useState('before');
  const [mounted, setMounted] = useState(false);

  // Cargar datos del localStorage al montar
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tripPlanner');
    if (saved) {
      try {
        setSections(mergeSavedSections(JSON.parse(saved)));
      } catch (e) {
        console.error('Error cargando datos:', e);
      }
    }
  }, []);

  // Guardar en localStorage cuando cambian los datos
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('tripPlanner', JSON.stringify(sections));
    }
  }, [sections, mounted]);

  const toggleTask = (sectionId, taskId) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        tasks: prev[sectionId].tasks.map(task =>
          task.id === taskId ? { ...task, done: !task.done } : task
        )
      }
    }));
  };

  const resetAll = () => {
    if (confirm('¿Estás seguro? Esto borrará todo el progreso.')) {
      setSections(tripData.sections);
      localStorage.removeItem('tripPlanner');
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(sections, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `trip-planner-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin">✈️</div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  const currentSection = sections[activeSection];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-trip-primary via-trip-secondary to-trip-accent text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">✈️</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{tripData.title}</h1>
              <p className="text-sm sm:text-base opacity-90">{tripData.dates}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
        {/* Stats */}
        <div className="mb-8 animate-slide-in">
          <Stats sections={sections} tips={tripData.tips} />
        </div>

        {/* Tabs de secciones */}
        <div className="mb-6 animate-slide-in">
          <SectionTabs sections={sections} activeSection={activeSection} onSelect={setActiveSection} />
        </div>

        {/* Contenido de la sección activa */}
        {currentSection && (
          <div className="card p-6 space-y-4 animate-slide-in">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{currentSection.icon}</span>
              <h2 className="text-2xl font-bold text-gray-800">{currentSection.title}</h2>
            </div>

            <TaskList
              tasks={currentSection.tasks}
              onToggle={toggleTask}
              sectionId={activeSection}
            />
          </div>
        )}

        {/* Botones de utilidad */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg sm:relative sm:border-t-0 sm:bg-transparent sm:p-6 sm:mt-8">
          <div className="max-w-4xl mx-auto flex gap-2 justify-end flex-col sm:flex-row">
            <button
              onClick={exportData}
              className="btn-secondary text-sm"
            >
              📥 Exportar progreso
            </button>
            <button
              onClick={resetAll}
              className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-all text-sm"
            >
              🔄 Reiniciar todo
            </button>
          </div>
        </div>
      </div>

      {/* Footer con tips */}
      <div className="mt-12 bg-trip-dark text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            💡 Más tips útiles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tripData.tips.slice(3).map((tip, idx) => (
              <div key={idx} className="flex gap-2 text-sm">
                <span className="flex-shrink-0">→</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Trip Planner v1.0 • Praga · Český Krumlov · Viena · Budapest • Julio 2026
          </p>
        </div>
      </div>
    </main>
  );
}
