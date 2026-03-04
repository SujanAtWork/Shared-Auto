// src/components/rides/RouteConnector.jsx
// Visual dot-line-square connector shown between pickup & dropoff inputs

export default function RouteConnector() {
  return (
    <div className="flex flex-col items-center gap-1 pt-7">
      {/* Pickup dot with pulse ring */}
      <div className="relative w-3 h-3 rounded-full bg-yellow-400 pulse-dot" />
      {/* Connecting line */}
      <div className="w-0.5 flex-1 bg-zinc-700 my-1" style={{ minHeight: 32 }} />
      {/* Drop-off square */}
      <div className="w-3 h-3 rounded-sm bg-white" />
    </div>
  );
}
