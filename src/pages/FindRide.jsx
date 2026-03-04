// src/pages/FindRide.jsx
import { useState } from "react";
import LocationInput from "../components/ui/LocationInput";
import RouteConnector from "../components/rides/RouteConnector";
import { POPULAR_ROUTES } from "../data/mockData";

export default function FindRide({ onResults }) {
  const [from,  setFrom]  = useState("");
  const [to,    setTo]    = useState("");
  const [date,  setDate]  = useState("");
  const [seats, setSeats] = useState("1");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!from || !to) { setError("Please select both pickup and drop-off."); return; }
    if (from === to)  { setError("Pickup and drop-off cannot be the same.");  return; }
    setError("");
    onResults({ from, to, date, seats });
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="fade-up flex flex-col gap-6 font-body max-w-xl mx-auto">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-yellow-400 opacity-10 blur-3xl pointer-events-none" />
        <div className="font-display text-5xl text-white leading-none mb-1">
          FIND YOUR<br />
          <span className="shimmer-text">RIDE TODAY</span>
        </div>
        <p className="text-zinc-400 text-sm mt-2">
          Share autos with fellow students · Save money · Go green 🌿
        </p>
      </div>

      {/* ── Search Form ── */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 flex flex-col gap-4">

        {/* Route connector + inputs */}
        <div className="flex gap-3 items-stretch">
          <RouteConnector />
          <div className="flex flex-col gap-3 flex-1">
            <LocationInput label="Pickup"   value={from} onChange={setFrom} icon="⬤" />
            <LocationInput label="Drop-off" value={to}   onChange={setTo}   icon="▪" />
          </div>
        </div>

        {/* Swap button */}
        <button
          onClick={handleSwap}
          className="self-end -mt-2 text-yellow-400 text-xs font-mono hover:text-yellow-300 transition-colors"
        >
          ⇅ Swap
        </button>

        {/* Date + Seats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-white px-3 py-3 rounded-xl text-sm transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif", colorScheme: "dark" }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">Seats</label>
            <select
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-white px-3 py-3 rounded-xl text-sm appearance-none transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>{n} seat{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Validation error */}
        {error && (
          <p className="text-red-400 text-xs font-mono bg-red-950 border border-red-900 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <button
          onClick={handleSearch}
          className="w-full bg-yellow-400 hover:bg-yellow-300 active:scale-[.98] text-black font-display text-2xl py-3.5 rounded-xl transition-all duration-150 tracking-widest shadow-lg shadow-yellow-400/20"
        >
          SEARCH RIDES
        </button>
      </div>

      {/* ── Popular Routes ── */}
      <div>
        <p className="text-zinc-500 text-xs uppercase tracking-widest font-mono mb-3">
          Popular Routes
        </p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_ROUTES.map(([f, t]) => (
            <button
              key={`${f}-${t}`}
              onClick={() => { setFrom(f); setTo(t); }}
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-zinc-300 hover:text-yellow-400 text-xs px-3 py-2 rounded-full transition-all font-mono"
            >
              {f.split(" ").slice(0, 2).join(" ")} → {t.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
