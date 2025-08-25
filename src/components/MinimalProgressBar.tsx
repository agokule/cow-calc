export default function MinimalProgressBar({ progress = 0, color = "#3498db", height = 6 }) {
  // progress: 0 - 1
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: height,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        overflow: "hidden",
        pointerEvents: "none", // so clicks go through
      }}
    >
      <div
        style={{
          width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
          height: "100%",
          background: color,
          transition: "width 0.2s",
        }}
      />
    </div>
  );
}
