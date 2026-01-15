
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sleep: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col p-6 pb-24 space-y-6 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-black">수면 추적</h2>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">calendar_month</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white p-1 rounded-2xl flex shadow-sm border border-gray-100">
        <button className="flex-1 py-3 bg-primary rounded-xl font-bold text-sm">일별</button>
        <button className="flex-1 py-3 text-text-sub-light font-bold text-sm">주별</button>
        <button className="flex-1 py-3 text-text-sub-light font-bold text-sm">월별</button>
      </div>

      {/* Circular Progress Score */}
      <div className="flex flex-col items-center py-4">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="80" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
            <circle cx="96" cy="96" r="80" fill="transparent" stroke="#0df280" strokeWidth="12" strokeDasharray="502.6" strokeDashoffset="75.4" strokeLinecap="round" className="transition-all duration-1000" />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-xs font-bold text-text-sub-light uppercase tracking-widest">수면 점수</span>
            <span className="text-5xl font-black">85</span>
          </div>
        </div>
        <p className="mt-6 text-lg font-bold">어젯밤 수면 품질: <span className="text-primary">좋음</span></p>
        <p className="text-sm text-text-sub-light">평소보다 30분 더 잤어요 😴</p>
      </div>

      {/* Trend Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">주간 트렌드</h3>
          <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">Avg 7h 12m</span>
        </div>
        <div className="h-32 flex items-end justify-between gap-1">
          {['월', '화', '수', '목', '금', '토', '일'].map((day, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className={`w-full rounded-t-lg transition-all ${day === '수' ? 'bg-primary' : 'bg-primary/20 group-hover:bg-primary/50'}`} style={{ height: `${[40, 60, 90, 50, 75, 95, 80][i]}%` }} />
              <span className={`text-[10px] font-bold ${day === '수' ? 'text-text-main-light' : 'text-text-sub-light'}`}>{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-text-sub-light font-bold">총 수면 시간</p>
          <p className="text-2xl font-black">7<span className="text-lg">h</span> 45<span className="text-lg">m</span></p>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined filled">bedtime</span>
        </div>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-primary font-bold text-xs mb-2">
            <span className="material-symbols-outlined text-[16px]">flag</span>
            목표
          </div>
          <p className="text-lg font-black">8h 00m</p>
        </div>
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-primary font-bold text-xs mb-2">
            <span className="material-symbols-outlined text-[16px]">wb_sunny</span>
            기상 시간
          </div>
          <p className="text-lg font-black">06:45 AM</p>
        </div>
      </div>

      {/* Stages breakdown */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
        <h3 className="font-bold">수면 단계</h3>
        {[
          { label: '깊은 수면', val: '1h 30m', percent: 20, color: 'bg-primary' },
          { label: '얕은 수면', val: '4h 15m', percent: 55, color: 'bg-primary/60' },
          { label: 'REM 수면', val: '2h 00m', percent: 25, color: 'bg-primary/30' },
        ].map((s, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${s.color}`} />
                <span className="text-text-sub-light">{s.label}</span>
              </div>
              <p>{s.val} <span className="text-text-sub-light font-normal">({s.percent}%)</span></p>
            </div>
            <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
              <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.percent}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Tip Card */}
      <div className="bg-primary p-6 rounded-3xl shadow-lg shadow-primary/20 relative overflow-hidden group">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
        <div className="relative flex items-start gap-4 text-text-main-light">
          <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined filled">lightbulb</span>
          </div>
          <div>
            <h4 className="font-black text-lg mb-1">수면 팁</h4>
            <p className="text-sm font-semibold opacity-80 leading-relaxed">오늘 밤은 30분 일찍 잠자리에 들어보세요. 내일 아침 컨디션이 훨씬 좋아질 거예요.</p>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-6 z-40">
        <button className="w-14 h-14 rounded-full bg-primary text-text-main-light shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-3xl font-bold">add</span>
        </button>
      </div>
    </div>
  );
};

export default Sleep;
