import { ArrowRight } from 'lucide-react';

interface OnboardingProps {
  onGetStarted: () => void;
}

export default function Onboarding({ onGetStarted }: OnboardingProps) {
  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-800/85 to-navy-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end p-6 pb-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-[11px] font-medium tracking-wide uppercase">
              Now Available
            </span>
          </div>
        </div>

        <h1 className="animate-fade-in stagger-1 text-[32px] leading-[1.1] font-bold text-white tracking-tight">
          Book Expert Services Instantly.
        </h1>

        <p className="animate-fade-in stagger-2 mt-3 text-[14px] leading-relaxed text-slate-300 max-w-[280px]">
          Connect with top-tier certified specialists in your area with zero hassle.
        </p>

        <button
          onClick={onGetStarted}
          className="animate-fade-in stagger-3 mt-8 w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold text-[15px] rounded-2xl transition-all shadow-lg shadow-emerald-500/30"
        >
          Get Started
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>

        <p className="animate-fade-in stagger-4 mt-4 text-center text-[12px] text-slate-500">
          No account needed. Start booking in seconds.
        </p>
      </div>
    </div>
  );
}
