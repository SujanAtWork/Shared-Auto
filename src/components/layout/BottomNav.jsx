// src/components/layout/BottomNav.jsx
const NAV_ITEMS = [
  { id: "find",  label: "Find Ride",  icon: "🔍" },
  { id: "offer", label: "Offer Ride", icon: "🚗" },
  { id: "rides", label: "My Rides",   icon: "🎫" },
];

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-zinc-900">
      <div className="max-w-xl mx-auto px-4 h-16 flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all ${
                isActive ? "text-yellow-400" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`font-mono text-[10px] uppercase tracking-widest ${isActive ? "tab-active" : ""}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
