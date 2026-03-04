// src/pages/BookingConfirm.jsx
import { useState } from "react";
import StarRating from "../components/ui/StarRating";

const SUMMARY_FIELDS = ["from", "to", "dept", "duration", "type"];
const SUMMARY_LABELS = { from: "From", to: "To", dept: "Departs", duration: "Duration", type: "Vehicle" };

export default function BookingConfirm({ ride, onConfirm, onBack }) {
  const [name,  setName]  = useState("");
  const [phone, setPhone] = useState("");
  const [note,  setNote]  = useState("");
  const [done,  setDone]  = useState(false);

  const bookingId = Math.random().toString(36).slice(2, 8).toUpperCase();

  const handleConfirm = () => {
    if (!name || !phone) return;
    setDone(true);
    setTimeout(() => onConfirm(), 2800);
  };

  // ── Success screen ──
  if (done) {
    return (
      <div className="fade-up flex flex-col items-center justify-center gap-5 font-body min-h-[50vh] text-center max-w-xs mx-auto">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl">✓</div>
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-ping opacity-30" />
        </div>
        <div>
          <div className="font-display text-4xl text-white">BOOKING CONFIRMED!</div>
          <p className="text-zinc-400 text-sm mt-2">
            Your ride with <span className="text-yellow-400">{ride.driver}</span> is booked.<br />
            You'll be notified when they're on the way.
          </p>
        </div>
        <div className="bg-zinc-900 border border-yellow-400/30 rounded-xl px-6 py-3 font-mono text-yellow-400 text-lg">
          #{bookingId}
        </div>
      </div>
    );
  }

  // ── Confirm form ──
  return (
    <div className="fade-up flex flex-col gap-5 font-body max-w-xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Go back"
          className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-400 hover:text-yellow-400 transition-all"
        >
          ←
        </button>
        <div className="font-display text-3xl text-white">CONFIRM RIDE</div>
      </div>

      {/* Ride summary */}
      <div className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-400 text-black font-display text-2xl flex items-center justify-center">
            {ride.avatar}
          </div>
          <div>
            <div className="text-white font-semibold">{ride.driver}</div>
            <StarRating rating={ride.rating} />
          </div>
          <div className="ml-auto text-right">
            <div className="text-yellow-400 font-display text-2xl">₹{ride.price}</div>
            <div className="text-zinc-500 text-xs font-mono">per person</div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-3 space-y-2">
          {SUMMARY_FIELDS.map((key) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-zinc-500 font-mono text-xs uppercase">{SUMMARY_LABELS[key]}</span>
              <span className="text-white">{ride[key]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Passenger details */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3">
        <p className="text-zinc-400 text-xs uppercase tracking-widest font-mono">Passenger Details</p>

        {[
          { label: "Full Name", value: name,  setter: setName,  type: "text", placeholder: "Your name"          },
          { label: "Phone",     value: phone, setter: setPhone, type: "tel",  placeholder: "+91 XXXXX XXXXX"    },
          { label: "Note",      value: note,  setter: setNote,  type: "text", placeholder: "Note for driver (optional)" },
        ].map((field) => (
          <div key={field.label} className="flex flex-col gap-1">
            <label className="text-zinc-400 text-xs uppercase tracking-widest">{field.label}</label>
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              placeholder={field.placeholder}
              className="bg-zinc-950 border border-zinc-700 text-white px-3 py-2.5 rounded-xl text-sm transition-all placeholder-zinc-600"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        disabled={!name || !phone}
        className="w-full bg-yellow-400 disabled:bg-zinc-700 disabled:text-zinc-500 hover:bg-yellow-300 active:scale-[.98] text-black font-display text-2xl py-4 rounded-xl transition-all tracking-widest shadow-lg shadow-yellow-400/20 disabled:shadow-none"
      >
        BOOK RIDE · ₹{ride.price}
      </button>
    </div>
  );
}
