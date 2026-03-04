// src/components/ui/LocationInput.jsx
import { LOCATIONS } from "../../data/mockData";

export default function LocationInput({ label, value, onChange, icon }) {
  return (
    <div className="flex flex-col gap-1 font-body w-full">
      <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-base">
          {icon}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 text-white pl-9 pr-4 py-3 rounded-xl text-sm appearance-none cursor-pointer transition-all"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="">Select location…</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-xs">
          ▾
        </span>
      </div>
    </div>
  );
}
