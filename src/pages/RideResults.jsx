// src/pages/RideResults.jsx
import RideCard from "../components/rides/RideCard";
import { RIDES } from "../data/mockData";

const FILTERS = ["All", "E-Auto", "Verified", "Cheapest", "Fastest"];

export default function RideResults({ params, onBook, onBack }) {
  const filtered = RIDES.filter(
    (r) => (!params.from || r.from === params.from) || (!params.to || r.to === params.to)
  );

  return (
    <div className="fade-up flex flex-col gap-4 font-body max-w-xl mx-auto">

      {/* ── Header ── */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Go back"
          className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-400 hover:text-yellow-400 transition-all text-lg"
        >
          ←
        </button>
        <div>
          <div className="text-white font-semibold text-sm">
            {params.from || "Any"} → {params.to || "Any"}
          </div>
          <div className="text-zinc-500 text-xs font-mono">
            {filtered.length} rides available
          </div>
        </div>
      </div>

      {/* ── Filter chips ── */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-full border border-zinc-800 hover:border-yellow-400 hover:text-yellow-400 text-zinc-400 transition-all"
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Ride cards ── */}
      {filtered.map((ride, i) => (
        <RideCard key={ride.id} ride={ride} onBook={onBook} index={i} />
      ))}

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-zinc-600">
          <div className="text-5xl mb-3">🚌</div>
          <div className="font-display text-2xl text-zinc-500">NO RIDES FOUND</div>
          <p className="text-sm mt-1">Try a different route or time.</p>
        </div>
      )}
    </div>
  );
}
