
import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const heartRateData = [
  { time: '00:00', hr: 60 }, { time: '03:00', hr: 62 },
  { time: '06:00', hr: 58 }, { time: '09:00', hr: 85 },
  { time: '12:00', hr: 72 }, { time: '15:00', hr: 78 },
  { time: '18:00', hr: 95 }, { time: '21:00', hr: 70 },
  { time: '24:00', hr: 65 },
];

const sleepData = [
  { stage: 'Deep', value: 60, color: '#6366f1' },
  { stage: 'Light', value: 35, color: '#818cf8' },
  { stage: 'REM', value: 25, color: '#a5b4fc' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col p-6 pb-24 space-y-6 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden shadow-sm">
            <img src="https://picsum.photos/100/100?random=1" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold text-primary tracking-widest">오늘</h4>
            <p className="text-xs font-semibold text-text-sub-light">10월 24일</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-sm border border-gray-50">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-black text-text-main-light leading-tight">안녕하세요,<br />알렉스님!</h1>
      </div>

      {/* Steps Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col space-y-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="material-symbols-outlined text-[20px]">directions_walk</span>
              <span className="text-sm">일일 걸음 수</span>
            </div>
            <p className="text-xs text-text-sub-light font-medium">목표: 10,000보</p>
          </div>
          <span className="text-2xl font-black text-primary">75%</span>
        </div>
        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm">7,543 <span className="text-text-sub-light font-normal">걸음</span></p>
          <p className="text-[10px] text-text-sub-light font-medium">2,457보 남음</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-4 bg-primary rounded-2xl text-text-main-light font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">add</span>
          <span>운동 기록</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-4 bg-white rounded-2xl border border-gray-100 font-bold active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-blue-400">water_drop</span>
          <span>수분 섭취</span>
        </button>
      </div>

      {/* Heart Rate Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-bold text-text-main-light">
              <div className="p-1.5 bg-red-50 text-red-500 rounded-lg">
                <span className="material-symbols-outlined text-[18px] filled">favorite</span>
              </div>
              <span className="text-sm">심박수</span>
            </div>
            <p className="text-2xl font-black">72 <span className="text-xs text-text-sub-light font-bold">평균 BPM</span></p>
          </div>
          <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-lg text-[10px] font-bold">
            <span className="material-symbols-outlined text-[12px]">trending_down</span>
            <span>2%</span>
          </div>
        </div>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={heartRateData}>
              <defs>
                <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="hr" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorHr)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-bold text-text-sub-light px-2">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
        </div>
      </div>

      {/* Sleep Card */}
      <Link to="/sleep" className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 block">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-bold text-text-main-light">
              <div className="p-1.5 bg-indigo-50 text-indigo-500 rounded-lg">
                <span className="material-symbols-outlined text-[18px] filled">bedtime</span>
              </div>
              <span className="text-sm">수면 분석</span>
            </div>
            <p className="text-2xl font-black">7<span className="text-lg">h</span> 30<span className="text-lg">m</span></p>
            <p className="text-[10px] text-text-sub-light font-bold">지난 밤</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-indigo-500">85</p>
            <p className="text-[10px] text-text-sub-light font-bold">수면 점수</p>
          </div>
        </div>
        <div className="h-24 w-full flex items-end gap-4 px-2">
          {sleepData.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
              <div 
                className="w-full rounded-t-xl transition-all duration-700" 
                style={{ backgroundColor: d.color, height: `${d.value}%` }} 
              />
              <span className="text-[10px] font-bold text-text-sub-light">{d.stage === 'Deep' ? '깊음' : d.stage === 'Light' ? '얕음' : '렘'}</span>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
