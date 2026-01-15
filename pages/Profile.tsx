
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col pb-24 space-y-1 overflow-y-auto no-scrollbar bg-background-light">
      {/* Header */}
      <div className="bg-white p-4 sticky top-0 z-30 flex items-center border-b border-gray-50">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center font-black text-lg pr-10">프로필 및 설정</h2>
      </div>

      {/* User Info Card */}
      <div className="bg-white p-8 flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 shadow-2xl overflow-hidden ring-4 ring-white">
            <img src="https://picsum.photos/400/400?random=5" alt="User" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-1 right-1 w-7 h-7 bg-primary rounded-full border-4 border-white shadow-sm" />
        </div>
        
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-black">김민수</h1>
          <p className="text-sm font-bold text-text-sub-light">minsoo.kim@email.com</p>
          <div className="bg-gray-50 px-4 py-1.5 rounded-full inline-flex items-center gap-1 mt-2">
            <span className="material-symbols-outlined text-primary text-sm filled">verified</span>
            <span className="text-[10px] font-black text-text-sub-light">2023년부터 회원</span>
          </div>
        </div>

        <button className="bg-primary text-text-main-light font-black px-12 py-3.5 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          프로필 수정
        </button>
      </div>

      {/* Sections Wrapper */}
      <div className="space-y-2">
        {/* Personal Info */}
        <div className="bg-white p-6 space-y-4">
          <h3 className="text-[10px] font-black text-text-sub-light uppercase tracking-widest">개인 정보</h3>
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-transform group-active:scale-90">
                <span className="material-symbols-outlined">accessibility_new</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-black">신체 정보</p>
                <p className="text-[10px] font-bold text-text-sub-light">키 178cm, 몸무게 72kg</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </button>
          <div className="h-[1px] bg-gray-50 w-full" />
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-transform group-active:scale-90">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <p className="text-sm font-black">계정 및 보안</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </button>
        </div>

        {/* App Settings */}
        <div className="bg-white p-6 space-y-4">
          <h3 className="text-[10px] font-black text-text-sub-light uppercase tracking-widest">앱 설정</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <p className="text-sm font-black">푸시 알림</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative shadow-inner cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>
          <div className="h-[1px] bg-gray-50 w-full" />
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-transform group-active:scale-90">
                <span className="material-symbols-outlined">watch</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-black">연동된 기기</p>
                <p className="text-[10px] font-bold text-text-sub-light">Apple Health 연결됨</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </button>
          <div className="h-[1px] bg-gray-50 w-full" />
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-transform group-active:scale-90">
                <span className="material-symbols-outlined">straighten</span>
              </div>
              <p className="text-sm font-black">단위 설정</p>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-text-sub-light">
              미터법 (kg, cm)
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </button>
        </div>

        {/* Support */}
        <div className="bg-white p-6 space-y-4">
          <h3 className="text-[10px] font-black text-text-sub-light uppercase tracking-widest">지원</h3>
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-active:scale-90">
                <span className="material-symbols-outlined">help</span>
              </div>
              <p className="text-sm font-black">도움말 및 FAQ</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </button>
          <div className="h-[1px] bg-gray-50 w-full" />
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-active:scale-90">
                <span className="material-symbols-outlined">policy</span>
              </div>
              <p className="text-sm font-black">개인정보 처리방침</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </button>
          <div className="flex justify-between items-center text-[10px] font-bold text-text-sub-light pt-2 opacity-60">
            <span>앱 버전</span>
            <span>v1.0.2</span>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6">
          <button className="w-full py-4 rounded-2xl bg-red-50 text-red-500 font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
