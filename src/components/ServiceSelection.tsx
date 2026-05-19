import { Search, Star } from 'lucide-react';

interface Specialist {
  id: number;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

interface ServiceSelectionProps {
  onSelectSpecialist: (specialist: Specialist) => void;
}

const specialists: Specialist[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Senior UI/UX Consultant',
    rating: 4.9,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Alex Rivera',
    role: 'Full-Stack Tech Lead',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
];

const categories = ['All', 'Tech', 'Legal', 'Design', 'Finance', 'Health'];

export default function ServiceSelection({ onSelectSpecialist }: ServiceSelectionProps) {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="px-5 pt-3 pb-4 bg-white">
        <h2 className="text-[20px] font-bold text-slate-900 animate-fade-in">Find a Specialist</h2>
        <p className="text-[13px] text-slate-500 mt-0.5 animate-fade-in stagger-1">
          Browse certified professionals near you
        </p>

        {/* Search bar */}
        <div className="mt-3 flex items-center gap-2 px-3.5 py-2.5 bg-slate-100 rounded-xl animate-fade-in stagger-2">
          <Search size={16} className="text-slate-400" />
          <span className="text-[13px] text-slate-400">Search specialists...</span>
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 py-3 bg-white border-b border-slate-100">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[12px] font-medium transition-all animate-fade-in stagger-${i + 1} ${
                cat === 'All'
                  ? 'bg-navy-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Specialist list */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {specialists.map((s, i) => (
          <div
            key={s.id}
            className={`flex items-center gap-3.5 p-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 animate-slide-up stagger-${i + 1}`}
          >
            <img
              src={s.avatar}
              alt={s.name}
              className="w-[52px] h-[52px] rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] font-semibold text-slate-900 truncate">{s.name}</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">{s.role}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-[11px] font-medium text-slate-700">{s.rating}</span>
                <span className="text-[11px] text-slate-400">(128)</span>
              </div>
            </div>
            <button
              onClick={() => onSelectSpecialist(s)}
              className="flex-shrink-0 px-4 py-2 bg-navy-800 hover:bg-navy-700 active:scale-95 text-white text-[12px] font-semibold rounded-xl transition-all"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
