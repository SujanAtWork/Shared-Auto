// src/components/ui/Badge.jsx
const COLOR_MAP = {
  yellow: "bg-yellow-400 text-black",
  green:  "bg-emerald-400 text-black",
  gray:   "bg-zinc-700 text-zinc-300",
  red:    "bg-red-500 text-white",
};

export default function Badge({ children, color = "yellow" }) {
  return (
    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${COLOR_MAP[color]}`}>
      {children}
    </span>
  );
}
