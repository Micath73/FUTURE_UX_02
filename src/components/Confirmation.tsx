import { CheckCircle, User, Calendar, Clock, Hash } from 'lucide-react';

interface ConfirmationProps {
  specialistName: string;
  date: string;
  time: string;
  bookingId: string;
  onDone: () => void;
}

export default function Confirmation({ specialistName, date, time, bookingId, onDone }: ConfirmationProps) {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success icon */}
        <div className="animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
            <CheckCircle size={44} className="text-emerald-500" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="animate-fade-in stagger-1 text-[22px] font-bold text-slate-900 text-center">
          Booking Confirmed!
        </h2>
        <p className="animate-fade-in stagger-2 mt-1.5 text-[13px] text-slate-500 text-center">
          Your appointment has been scheduled
        </p>

        {/* Ticket card */}
        <div className="animate-slide-up stagger-3 w-full mt-6 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-dashed border-slate-200 relative">
            <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-50" />
            <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-50" />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-navy-800/10 flex items-center justify-center">
                <Hash size={16} className="text-navy-700" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Booking ID</p>
                <p className="text-[15px] font-bold text-navy-800 tracking-wide">{bookingId}</p>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <User size={14} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Specialist</p>
                <p className="text-[13px] font-semibold text-slate-800">{specialistName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Calendar size={14} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Date</p>
                <p className="text-[13px] font-semibold text-slate-800">{date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Clock size={14} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Time</p>
                <p className="text-[13px] font-semibold text-slate-800">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Done button */}
      <div className="px-6 py-5 bg-white border-t border-slate-100">
        <button
          onClick={onDone}
          className="w-full py-3.5 bg-navy-800 hover:bg-navy-700 active:scale-[0.98] text-white text-[14px] font-semibold rounded-2xl transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
}
