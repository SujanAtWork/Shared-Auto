// src/components/layout/Header.jsx
import { useState } from "react";
import Badge from "../ui/Badge";

export default function Header() {
  const [notify, setNotify] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black font-display text-lg">
            R
          </div>
          <span className="font-display text-xl text-white tracking-wider">RIDEWISE</span>
          <Badge>BETA</Badge>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {notify && (
            <button
              onClick={() => setNotify(false)}
              aria-label="Notifications"
              className="relative w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-400 hover:text-yellow-400 transition-all text-sm"
            >
              🔔
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-yellow-400 badge-pulse" />
            </button>
          )}
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black font-display text-lg">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
