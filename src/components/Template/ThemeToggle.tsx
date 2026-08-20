'use client';

import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const SunIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
      <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
      <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
      <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
    </g>
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.5 14.2A8.7 8.7 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Render a stable placeholder until the client determines the real theme,
  // to avoid a hydration mismatch / icon flash.
  const resolved = theme ?? 'light';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={resolved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={resolved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {resolved === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
