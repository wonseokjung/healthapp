
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sleep from './pages/Sleep';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import Diet from './pages/Diet';
import Activity from './pages/Activity';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-between items-center px-8 py-3 pb-8 z-50 max-w-md mx-auto shadow-lg">
      <Link to="/dashboard" className={`flex flex-col items-center gap-1 ${isActive('/dashboard') ? 'text-primary' : 'text-gray-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/dashboard') ? 'filled' : ''}`}>home</span>
        <span className="text-[10px] font-bold">홈</span>
      </Link>
      <Link to="/activity" className={`flex flex-col items-center gap-1 ${isActive('/activity') ? 'text-primary' : 'text-gray-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/activity') ? 'filled' : ''}`}>fitness_center</span>
        <span className="text-[10px] font-bold">활동</span>
      </Link>
      <Link to="/diet" className={`flex flex-col items-center gap-1 ${isActive('/diet') ? 'text-primary' : 'text-gray-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/diet') ? 'filled' : ''}`}>nutrition</span>
        <span className="text-[10px] font-bold">식단</span>
      </Link>
      <Link to="/goals" className={`flex flex-col items-center gap-1 ${isActive('/goals') ? 'text-primary' : 'text-gray-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/goals') ? 'filled' : ''}`}>flag</span>
        <span className="text-[10px] font-bold">목표</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-primary' : 'text-gray-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/profile') ? 'filled' : ''}`}>person</span>
        <span className="text-[10px] font-bold">프로필</span>
      </Link>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto min-h-screen bg-background-light relative overflow-x-hidden flex flex-col no-scrollbar">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
        <Navigation />
      </div>
    </HashRouter>
  );
};

export default App;
