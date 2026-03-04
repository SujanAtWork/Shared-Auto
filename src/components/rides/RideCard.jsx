// src/components/rides/RideCard.jsx
import Badge from "../ui/Badge";
import StarRating from "../ui/StarRating";

export default function RideCard({ ride, onBook, index = 0 }) {
  return (
    <div
      className="ride-card bg-zinc-900 border border-zinc-800 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/5 rounded-2xl overflow-hidden"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* Top section */}
      <div className="p-4 flex gap-4 items-start">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-xl bg-yellow-400 text-black font-display text-2xl flex items-center justify-center">
            {ride.avatar}
          </div>
          {ride.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-zinc-900 flex items-center justify-center text-[9px] text-black font-bold">
              ✓
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-white font-semibold text-sm">{ride.driver}</span>
            <StarRating rating={ride.rating} />
          </div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge>{ride.type}</Badge>
            {ride.verified && <Badge color="green">Verified</Badge>}
            <span className="text-zinc-500 text-xs font-mono">{ride.trips} trips</span>
          </div>
          <div className="flex items-center gap-1 text-zinc-400 text-xs font-mono mb-1">
            <span className="text-yellow-400">●</span> {ride.from}
          </div>
          <div className="flex items-center gap-1 text-zinc-400 text-xs font-mono">
            <span className="text-white">■</span> {ride.to}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-4">
          {[
            { value: ride.dept,     label: "DEPARTS"  },
            { value: ride.duration, label: "DURATION" },
            { value: ride.seats,    label: "SEATS LEFT" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-yellow-400 font-display text-xl">{value}</div>
              <div className="text-zinc-500 text-[10px] font-mono">{label}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onBook(ride)}
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-bold text-sm px-4 py-2 rounded-xl transition-all"
        >
          ₹{ride.price} <span className="card-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
