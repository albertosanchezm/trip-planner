'use client';

import { useState } from 'react';

export default function SectionTabs({ sections, activeSection, onSelect }) {
  return (
    <div className="mb-6">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex-shrink-0 ${
              activeSection === key
                ? 'bg-gradient-to-r from-trip-primary to-trip-secondary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{section.icon}</span>
            <span className="hidden sm:inline">{section.title.split(' ').pop()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
