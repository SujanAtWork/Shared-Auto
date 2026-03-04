// src/components/ui/StarRating.jsx
export default function StarRating({ rating }) {
  return (
    <span className="font-mono text-yellow-400 text-xs font-bold">
      ★ {rating}
    </span>
  );
}
