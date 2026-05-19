import { ChevronLeft, Calendar } from 'lucide-react';
import { useState } from 'react';

interface Specialist {
  id: number;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

interface DateTimePickerProps {
  specialist: Specialist;
  onBack: () => void;
  onConfirm: (date: string, time: string, bookingId: string) => void;
}

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

const morningTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '11:30 AM'];
const afternoonTimes = ['01:00 PM', '02:15 PM', '03:00 PM', '04:00 PM'];

export default function DateTimePicker({ specialist, onBack, onConfirm }: DateTimePickerProps) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = getCalendarDays(year, month);
  const monthName = new Date(year, month).toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const today = now.getDate();
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const canConfirm = selectedDate !== null && selectedTime !== null;

  const handleConfirm = () => {
    if (!canConfirm || !selectedTime) return;
    const dateStr = `${selectedDate} ${new Date(year, month).toLocaleString('en-US', { month: 'short' })} ${year}`;
    const id = `#BK-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    onConfirm(dateStr, selectedTime, id);
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="px-5 pt-3 pb-4 bg-white border-b border-slate-100">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 -ml-1.5 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ChevronLeft size={20} className="text-slate-700" />
          </button>
          <div>
            <h2 className="text-[16px] font-bold text-slate-900">Select Date & Time</h2>
            <p className="text-[12px] text-slate-500">with {specialist.name}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Calendar */}
        <div className="px-5 pt-4 pb-2 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <button onClick={prevMonth} className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
              <ChevronLeft size={16} className="text-slate-500" />
            </button>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-navy-700" />
              <span className="text-[13px] font-semibold text-slate-800">{monthName}</span>
            </div>
            <button onClick={nextMonth} className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
              <ChevronLeft size={16} className="text-slate-500 rotate-180" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <div key={d} className="text-center text-[10px] font-medium text-slate-400 py-1">{d}</div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => {
              if (day === null) return <div key={`e-${i}`} />;
              const isPast = isCurrentMonth && day < today;
              const isSelected = day === selectedDate;
              const isToday = isCurrentMonth && day === today;
              return (
                <button
                  key={day}
                  disabled={isPast}
                  onClick={() => setSelectedDate(day)}
                  className={`h-9 rounded-xl text-[12px] font-medium transition-all ${
                    isSelected
                      ? 'bg-navy-800 text-white shadow-md'
                      : isPast
                      ? 'text-slate-300 cursor-not-allowed'
                      : isToday
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time selection */}
        <div className="px-5 pt-4 pb-4 animate-fade-in stagger-2">
          <h3 className="text-[13px] font-semibold text-slate-800 mb-2.5">Select Time</h3>

          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">Morning</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {morningTimes.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-2.5 rounded-xl text-[12px] font-medium transition-all ${
                  selectedTime === t
                    ? 'bg-navy-800 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">Afternoon</p>
          <div className="grid grid-cols-2 gap-2">
            {afternoonTimes.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-2.5 rounded-xl text-[12px] font-medium transition-all ${
                  selectedTime === t
                    ? 'bg-navy-800 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action */}
      <div className="px-5 py-4 bg-white border-t border-slate-100">
        <button
          onClick={handleConfirm}
          disabled={!canConfirm}
          className={`w-full py-3.5 rounded-2xl text-[14px] font-semibold transition-all ${
            canConfirm
              ? 'bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white shadow-lg shadow-emerald-500/30'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
