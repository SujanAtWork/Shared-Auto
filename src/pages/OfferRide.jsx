// src/pages/OfferRide.jsx
import { useState } from "react";
import LocationInput from "../components/ui/LocationInput";

const STEPS = [
  { number: 1, label: "Route Details" },
  { number: 2, label: "Trip Details"  },
  { number: 3, label: "Review & Post" },
];

const REVIEW_FIELDS = [
  ["From",    "from"],
  ["To",      "to"],
  ["Time",    "time"],
  ["Seats",   "seats"],
  ["Price",   "price"],
  ["Vehicle", "vehicle"],
];

export default function OfferRide() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    from: "", to: "", time: "", seats: "1", price: "", vehicle: "Auto",
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
    else alert("🎉 Ride posted! Students can now find your ride.");
  };

  return (
    <div className="fade-up flex flex-col gap-5 font-body max-w-xl mx-auto">

      {/* ── Title ── */}
      <div>
        <div className="font-display text-4xl text-white">OFFER A RIDE</div>
        <p className="text-zinc-500 text-sm mt-1">
          Help fellow students — earn on every seat you share
        </p>
      </div>

      {/* ── Step progress ── */}
      <div className="flex gap-2 items-center">
        {STEPS.map((s, i) => (
          <div key={s.number} className="flex items-center gap-2 flex-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
              s.number <= step ? "bg-yellow-400 text-black" : "bg-zinc-800 text-zinc-500"
            }`}>
              {s.number}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 transition-all ${s.number < step ? "bg-yellow-400" : "bg-zinc-800"}`} />
            )}
          </div>
        ))}
      </div>

      {/* ── Step content ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">

        {/* Step 1: Route */}
        {step === 1 && (
          <>
            <p className="text-yellow-400 font-mono text-xs uppercase tracking-widest">
              Step 1 · Route Details
            </p>
            <LocationInput label="Starting From" value={form.from} onChange={(v) => update("from", v)} icon="⬤" />
            <LocationInput label="Going To"      value={form.to}   onChange={(v) => update("to", v)}   icon="▪" />
          </>
        )}

        {/* Step 2: Trip details */}
        {step === 2 && (
          <>
            <p className="text-yellow-400 font-mono text-xs uppercase tracking-widest">
              Step 2 · Trip Details
            </p>
            {[
              { label: "Departure Time",     key: "time",  type: "time",   min: undefined, max: undefined },
              { label: "Seats Available",    key: "seats", type: "number", min: 1,         max: 3         },
              { label: "Price per Seat (₹)", key: "price", type: "number", min: 10,        max: undefined },
            ].map((field) => (
              <div key={field.key} className="flex flex-col gap-1">
                <label className="text-zinc-400 text-xs uppercase tracking-widest">{field.label}</label>
                <input
                  type={field.type}
                  min={field.min}
                  max={field.max}
                  value={form[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                  className="bg-zinc-950 border border-zinc-700 text-white px-3 py-2.5 rounded-xl text-sm transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif", colorScheme: "dark" }}
                />
              </div>
            ))}

            {/* Vehicle type toggle */}
            <div className="flex flex-col gap-1">
              <label className="text-zinc-400 text-xs uppercase tracking-widest">Vehicle Type</label>
              <div className="flex gap-2">
                {["Auto", "E-Auto"].map((v) => (
                  <button
                    key={v}
                    onClick={() => update("vehicle", v)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      form.vehicle === v
                        ? "bg-yellow-400 border-yellow-400 text-black"
                        : "bg-zinc-950 border-zinc-700 text-zinc-400 hover:border-yellow-400/40"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <>
            <p className="text-yellow-400 font-mono text-xs uppercase tracking-widest">
              Step 3 · Review & Post
            </p>
            <div className="space-y-2.5">
              {REVIEW_FIELDS.map(([label, key]) => (
                <div key={key} className="flex justify-between text-sm border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-500 font-mono text-xs uppercase">{label}</span>
                  <span className="text-white">
                    {key === "price" ? `₹${form[key] || "—"}/seat` : form[key] || "—"}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Navigation buttons ── */}
      <div className="flex gap-3">
        {step > 1 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex-1 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 hover:border-yellow-400 hover:text-yellow-400 font-display text-xl transition-all"
          >
            BACK
          </button>
        )}
        <button
          onClick={handleNext}
          className="flex-1 bg-yellow-400 hover:bg-yellow-300 active:scale-[.98] text-black font-display text-xl py-3.5 rounded-xl transition-all tracking-widest shadow-lg shadow-yellow-400/10"
        >
          {step < 3 ? "NEXT →" : "POST RIDE"}
        </button>
      </div>
    </div>
  );
}
