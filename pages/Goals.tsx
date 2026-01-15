
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Goals: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col p-6 pb-24 space-y-6 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-black">나의 목표</h2>
        <button className="text-primary font-black">편집</button>
      </div>

      {/* Today Progress Hero */}
      <div className="space-y-4">
        <h1 className="text-2xl font-black">오늘의 달성률</h1>
        <div className="bg-primary/10 rounded-3xl p-6 flex items-center justify-between">
          <div className="space-y-3">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black">82</span>
              <span className="text-xl font-bold opacity-60">%</span>
            </div>
            <div className="flex gap-0.5 text-primary">
              <span className="material-symbols-outlined filled text-sm">star</span>
              <span className="material-symbols-outlined filled text-sm">star</span>
              <span className="material-symbols-outlined filled text-sm">star</span>
              <span className="material-symbols-outlined filled text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star_half</span>
            </div>
            <p className="text-xs font-bold opacity-80">어제보다 12% 더 높아요! 🔥</p>
          </div>
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle cx="56" cy="56" r="48" fill="transparent" stroke="rgba(0,0,0,0.05)" strokeWidth="6" />
              <circle cx="56" cy="56" r="48" fill="transparent" stroke="#0df280" strokeWidth="6" strokeDasharray="301.6" strokeDashoffset="54.2" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(13,242,128,0.5)]" />
            </svg>
            <div className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl filled">emoji_events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 gap-8">
        <button className="py-2 border-b-2 border-text-main-light font-black text-sm">진행 중</button>
        <button className="py-2 text-text-sub-light font-bold text-sm">완료</button>
        <button className="py-2 text-text-sub-light font-bold text-sm">전체</button>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-black">운동</h3>
          <span className="material-symbols-outlined text-gray-400">more_horiz</span>
        </div>

        {/* Goal Card 1 */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                <span className="material-symbols-outlined">directions_walk</span>
              </div>
              <div>
                <h4 className="font-black text-sm">하루 걸음 수</h4>
                <p className="text-[10px] text-text-sub-light font-bold">매일 10,000보 걷기</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-black">7,540</p>
              <p className="text-[10px] text-text-sub-light font-bold">/ 10,000</p>
            </div>
          </div>
          <div className="h-3 bg-gray-50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" style={{ width: '75%' }} />
          </div>
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-orange-500">75% 달성</span>
            <span className="text-text-sub-light">남은 걸음: 2,460</span>
          </div>
        </div>

        {/* Health Stat Cards */}
        <h3 className="text-lg font-black pt-4">건강 관리</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">monitor_weight</span>
              </div>
              <span className="text-xs font-black">목표 체중</span>
            </div>
            <p className="text-2xl font-black">68.4 <span className="text-xs font-bold text-text-sub-light">kg</span></p>
            <div className="bg-gray-50 p-2 rounded-xl flex justify-between text-[10px] font-bold">
              <span className="text-text-sub-light">목표</span>
              <span>65.0 kg</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '80%' }} />
            </div>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-400">
                <span className="material-symbols-outlined text-sm">bedtime</span>
              </div>
              <span className="text-xs font-black">수면 시간</span>
            </div>
            <p className="text-2xl font-black">6<span className="text-lg">h</span> 30<span className="text-lg">m</span></p>
            <div className="bg-indigo-50 px-2 py-1 rounded-lg text-indigo-500 text-[10px] font-bold inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
              어제보다 30분 증가
            </div>
          </div>
        </div>

        {/* Water Intake Wide Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-400">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <div>
              <h4 className="font-black text-sm">수분 섭취</h4>
              <div className="flex gap-1 mt-1 text-sky-400">
                <span className="material-symbols-outlined text-xs filled">water_drop</span>
                <span className="material-symbols-outlined text-xs filled">water_drop</span>
                <span className="material-symbols-outlined text-xs filled">water_drop</span>
                <span className="material-symbols-outlined text-xs filled">water_drop</span>
                <span className="material-symbols-outlined text-xs text-gray-100">water_drop</span>
                <span className="material-symbols-outlined text-xs text-gray-100">water_drop</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-xl font-black">4 <span className="text-xs text-text-sub-light font-bold">/ 8 컵</span></p>
            <button className="w-8 h-8 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-100 transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>
      </div>

      {/* Goal Add Sticky CTA */}
      <div className="fixed bottom-24 left-6 right-6 z-40">
        <button className="w-full bg-primary text-text-main-light py-5 rounded-3xl font-black text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-2 group transition-all">
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
          새로운 목표 추가하기
        </button>
      </div>
    </div>
  );
};

export default Goals;
