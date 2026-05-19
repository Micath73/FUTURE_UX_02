import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
      <div className="relative w-[375px] h-[812px] bg-white rounded-[3rem] shadow-2xl shadow-black/50 overflow-hidden border-[8px] border-slate-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-slate-800 rounded-b-2xl z-50" />

        {/* Status bar */}
        <div className="relative z-40 flex items-center justify-between px-6 pt-2 h-[44px] bg-transparent">
          <span className="text-[12px] font-semibold text-slate-800">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-[2px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-[3px] h-[6px] rounded-sm ${i < 3 ? 'bg-slate-800' : 'bg-slate-400'}`} />
              ))}
            </div>
            <svg width="15" height="10" viewBox="0 0 15 10" className="ml-1">
              <path d="M1 9L4 6L7 3L10 1L13 0" stroke="#1E293B" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="ml-1 w-[22px] h-[10px] border border-slate-800 rounded-[2px] relative">
              <div className="absolute inset-[1px] right-[4px] bg-slate-800 rounded-[1px]" />
              <div className="absolute right-[-3px] top-[2px] w-[2px] h-[4px] bg-slate-800 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="h-[calc(100%-44px)] overflow-hidden">
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-slate-800 rounded-full" />
      </div>
    </div>
  );
}
