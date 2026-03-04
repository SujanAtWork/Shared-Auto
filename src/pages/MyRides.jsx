// src/pages/MyRides.jsx
import Badge from "../components/ui/Badge";
import { MY_BOOKINGS } from "../data/mockData";

const STATS = [
  { value: "12",   label: "Total Rides" },
  { value: "₹420", label: "Saved"       },
  { value: "4.9",  label: "Your Rating" },
];

export default function MyRides() {
  return (
    <div className="fade-up flex flex-col gap-5 font-body max-w-xl mx-auto">

      {/* ── Title ── */}
      <div>
        <div className="font-display text-4xl text-white">MY RIDES</div>
        <p className="text-zinc-500 text-sm mt-1">Your bookings & history</p>
      </div>

      {/* ── Stats row ── */}
      <div className="grid grid-cols-3 gap-3">
        {STATS.map(({ value, label }) => (
          <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <div className="font-display text-2xl text-yellow-400">{value}</div>
            <div className="text-zinc-500 text-[10px] font-mono uppercase mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* ── Booking cards ── */}
      {MY_BOOKINGS.map((booking) => (
        <div
          key={booking.id}
          className="ride-card bg-zinc-900 border border-zinc-800 hover:border-yellow-400/40 rounded-2xl p-4"
        >
          {/* Booking ID + Status */}
          <div className="flex items-start justify-between mb-3">
            <span className="font-mono text-xs text-zinc-500">#{booking.id}</span>
            <Badge color={booking.status === "upcoming" ? "yellow" : "gray"}>
              {booking.status}
            </Badge>
          </div>

          {/* Route */}
          <div className="flex flex-col gap-1.5 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">●</span>
              <span className="text-white">{booking.from}</span>
            </div>
            <div className="ml-5 w-0.5 h-4 bg-zinc-700" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white">■</span>
              <span className="text-white">{booking.to}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
            <div className="text-zinc-400 text-xs">
              {booking.date} · {booking.driver}
            </div>
            <div className="text-yellow-400 font-display text-xl">₹{booking.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
