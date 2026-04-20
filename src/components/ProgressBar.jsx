export default function ProgressBar({ found, total, pct }) {
  const progressPct = pct !== undefined ? pct : (total > 0 ? Math.round((found / total) * 100) : 0);

  // Cor muda conforme progresso
  const barColor =
    progressPct >= 100
      ? "var(--g)"
      : progressPct >= 60
      ? "#00e5ff"
      : progressPct >= 30
      ? "#ffd600"
      : "#ff2d55";

  const segments = total > 0 ? total : 1;

  return (
    <div style={{ marginTop: ".7rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <span className="ptitle" style={{ margin: 0, border: "none", padding: 0 }}>
          PROGRESSO GLOBAL
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: ".55rem",
              color: barColor,
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 700,
              transition: "color .3s",
            }}
          >
            {progressPct}%
          </span>
          <span style={{ fontSize: ".52rem", color: "var(--c)", fontFamily: "'Orbitron',sans-serif" }}>
            {found}/{total}
          </span>
        </div>
      </div>

      {/* Barra principal */}
      <div className="prog" style={{ position: "relative", height: "6px" }}>
        <div
          className="prog-f"
          style={{
            width: `${progressPct}%`,
            background: barColor,
            boxShadow: `0 0 8px ${barColor}88`,
            transition: "width .4s ease, background .3s",
          }}
        />
        {/* Marcadores de segmento */}
        {Array.from({ length: segments - 1 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${((i + 1) / segments) * 100}%`,
              top: 0,
              bottom: 0,
              width: "1px",
              background: "#05080f",
              zIndex: 2,
            }}
          />
        ))}
      </div>

      {/* Barra de milestone — pisca quando completo */}
      {progressPct >= 100 && (
        <div
          style={{
            textAlign: "center",
            fontSize: ".5rem",
            fontFamily: "'Orbitron',sans-serif",
            color: "var(--g)",
            marginTop: "4px",
            letterSpacing: "3px",
            animation: "glow 1.2s ease-in-out infinite",
          }}
        >
          ✔ TODAS ENCONTRADAS
        </div>
      )}
    </div>
  );
}
