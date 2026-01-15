
import React from 'react';
import { MealItem } from '../types';

const BREAKFAST_ITEMS: MealItem[] = [
  { id: '1', name: 'Avocado Toast', details: '2 slices • 280 kcal', calories: 280, image: 'https://picsum.photos/200/200?random=11' },
  { id: '2', name: 'Boiled Egg', details: '2 large • 140 kcal', calories: 140, image: 'https://picsum.photos/200/200?random=12' },
];

const LUNCH_ITEMS: MealItem[] = [
  { id: '3', name: 'Grilled Chicken Salad', details: '1 bowl • 450 kcal', calories: 450, image: 'https://picsum.photos/200/200?random=13' },
];

const MealCard: React.FC<{ title: string, icon: string, color: string, calories: number, items: MealItem[] }> = ({ title, icon, color, calories, items }) => (
  <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        <div>
          <h4 className="font-black text-sm">{title}</h4>
          <p className="text-[10px] font-bold text-text-sub-light">{calories} kcal</p>
        </div>
      </div>
      <button className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[18px] font-bold">add</span>
      </button>
    </div>
    
    {items.length > 0 ? (
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 group">
            <img src={item.image} alt={item.name} className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate">{item.name}</p>
              <p className="text-[10px] text-text-sub-light font-bold">{item.details}</p>
            </div>
            <button className="text-gray-200 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
        ))}
      </div>
    ) : (
      <div className="py-6 text-center border-t border-dashed border-gray-100 mt-2">
        <p className="text-xs text-text-sub-light italic font-medium">No food logged yet</p>
      </div>
    )}
  </div>
);

const Diet: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col p-6 pb-32 space-y-6 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="text-center">
          <h2 className="text-lg font-black">Today</h2>
          <p className="text-[10px] font-bold text-text-sub-light">Wed, Oct 20</p>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">calendar_month</span>
        </button>
      </div>

      {/* Date Scroller */}
      <div className="flex justify-between gap-2 overflow-x-auto no-scrollbar">
        {['Mon\n18', 'Tue\n19', 'Wed\n20', 'Thu\n21', 'Fri\n22'].map((d, i) => {
          const [day, date] = d.split('\n');
          const isSelected = day === 'Wed';
          return (
            <button key={i} className={`flex-1 flex flex-col items-center justify-center py-3 rounded-2xl min-w-[3.5rem] transition-all ${isSelected ? 'bg-primary text-text-main-light shadow-lg shadow-primary/30 scale-105' : 'bg-white border border-gray-50 text-text-sub-light'}`}>
              <span className="text-[10px] font-bold uppercase mb-1">{day}</span>
              <span className="text-sm font-black">{date}</span>
            </button>
          );
        })}
      </div>

      {/* Calories Summary */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-[10px] font-black uppercase text-text-sub-light tracking-widest">CALORIES</h3>
          <div className="text-right">
            <span className="text-3xl font-black">1,250</span>
            <span className="text-sm font-bold text-text-sub-light"> / 2,000 kcal</span>
          </div>
        </div>
        <div className="w-full h-4 bg-gray-50 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '62%' }} />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'Carbs', val: '150g', color: 'bg-blue-400', p: 50 },
            { label: 'Protein', val: '85g', color: 'bg-purple-400', p: 70 },
            { label: 'Fat', val: '45g', color: 'bg-yellow-400', p: 40 },
          ].map((m, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-text-sub-light">
                <span>{m.label}</span>
                <span>{m.val}</span>
              </div>
              <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
                <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-4">
        <MealCard title="Breakfast" icon="bakery_dining" color="bg-orange-50 text-orange-500" calories={420} items={BREAKFAST_ITEMS} />
        <MealCard title="Lunch" icon="lunch_dining" color="bg-green-50 text-green-500" calories={650} items={LUNCH_ITEMS} />
        <MealCard title="Dinner" icon="dinner_dining" color="bg-blue-50 text-blue-500" calories={0} items={[]} />
      </div>

      {/* Water Tracker Mini */}
      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="material-symbols-outlined text-[20px] filled">water_drop</span>
          </div>
          <div>
            <h4 className="font-black text-sm">Water Intake</h4>
            <p className="text-[10px] font-bold text-blue-500/70">4 / 8 glasses</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white text-blue-500 shadow-sm flex items-center justify-center font-black">-</button>
          <button className="w-10 h-10 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center font-black">+</button>
        </div>
      </div>

      {/* Central Scanner FAB in App.tsx (Nav) - But UI shows it differently in one screen */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
        <button className="w-16 h-16 rounded-full bg-primary text-text-main-light shadow-2xl flex items-center justify-center ring-8 ring-background-light active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
        </button>
      </div>
    </div>
  );
};

export default Diet;
