
import React, { useState } from 'react';
import { ActivityItem } from '../types';

const ACTIVITIES: ActivityItem[] = [
  { id: '1', title: '아침 러닝', time: '오전 07:00', duration: '30분', calories: 320, type: 'aerobic', icon: 'directions_run', color: 'bg-blue-50 text-blue-500' },
  { id: '2', title: '요가 플로우', time: '오후 08:00', duration: '40분', calories: 120, type: 'flexibility', icon: 'self_improvement', color: 'bg-purple-50 text-purple-500' },
  { id: '3', title: '상체 근력 운동', time: '어제', duration: '45분', calories: 210, type: 'strength', icon: 'fitness_center', color: 'bg-orange-50 text-orange-500' },
];

const Activity: React.FC = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="flex-1 flex flex-col p-6 pb-24 space-y-6 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-black">활동 추적</h1>
        <button className="flex items-center gap-1 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm text-xs font-bold">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          오늘
        </button>
      </div>

      {/* Date Switcher */}
      <div className="bg-white flex items-center justify-between p-2 rounded-2xl shadow-sm border border-gray-50">
        <button className="p-2"><span className="material-symbols-outlined">chevron_left</span></button>
        <div className="text-center">
          <p className="text-[10px] text-text-sub-light font-bold">2023년 10월</p>
          <p className="font-black">24일 화요일</p>
        </div>
        <button className="p-2"><span className="material-symbols-outlined">chevron_right</span></button>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex justify-between items-center relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-[20px] filled">local_fire_department</span>
            <span className="text-xs text-text-sub-light font-bold">소모 칼로리</span>
          </div>
          <p className="text-4xl font-black">450 <span className="text-sm text-text-sub-light">kcal</span></p>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-primary/20 text-primary-dark rounded-full text-[10px] font-bold">+5%</span>
            <span className="text-[10px] text-text-sub-light font-bold">목표 600 kcal</span>
          </div>
        </div>
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle cx="40" cy="40" r="34" fill="transparent" stroke="#f1f5f9" strokeWidth="6" />
            <circle cx="40" cy="40" r="34" fill="transparent" stroke="#0df280" strokeWidth="6" strokeDasharray="213.6" strokeDashoffset="53.4" strokeLinecap="round" />
          </svg>
          <span className="absolute text-xs font-black">75%</span>
        </div>
      </div>

      {/* Mini Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">schedule</span>
            </div>
            <span className="text-[10px] text-text-sub-light font-bold">활동 시간</span>
          </div>
          <p className="text-xl font-black">1h 20m</p>
          <p className="text-[10px] font-bold text-primary">+10% <span className="text-text-sub-light font-normal">vs 어제</span></p>
        </div>
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">footprint</span>
            </div>
            <span className="text-[10px] text-text-sub-light font-bold">걸음 수</span>
          </div>
          <p className="text-xl font-black">8,240</p>
          <p className="text-[10px] font-bold text-primary">+2% <span className="text-text-sub-light font-normal">달성</span></p>
        </div>
      </div>

      {/* Recent History */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-black text-lg">최근 활동</h2>
          <button className="text-primary text-sm font-bold">모두 보기</button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['전체', '유산소', '근력', '유연성'].map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setFilter(cat === '전체' ? 'all' : cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${i === 0 ? 'bg-text-main-light text-white shadow-md' : 'bg-white border border-gray-100 text-text-sub-light hover:bg-gray-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {ACTIVITIES.map(act => (
            <div key={act.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${act.color}`}>
                <span className="material-symbols-outlined">{act.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold truncate">{act.title}</h4>
                  <span className="text-[10px] text-text-sub-light font-bold shrink-0">{act.time}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-text-sub-light font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">timer</span> {act.duration}
                  </span>
                  <span className="text-primary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm filled">local_fire_department</span> {act.calories} kcal
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB - Activity Log */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center pointer-events-none">
        <button className="pointer-events-auto flex items-center gap-2 bg-text-main-light text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined">add</span>
          <span className="font-black text-lg">활동 기록하기</span>
        </button>
      </div>
    </div>
  );
};

export default Activity;
