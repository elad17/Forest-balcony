const TOTAL_STEPS = 7;
const STEP_LABELS = ["גודל", "שמש", "סגנון", "אכילים", "תחזוקה", "תמונה", "פרטים"];

export default function ProgressBar({ step }: { step: number }) {
  const pct = Math.round(((step - 1) / (TOTAL_STEPS - 1)) * 100);

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={`text-xs flex-1 text-center transition-colors ${
              i + 1 <= step ? "text-forest-600 font-semibold" : "text-forest-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-1 text-xs font-bold transition-all ${
                i + 1 < step
                  ? "bg-forest-600 text-white"
                  : i + 1 === step
                  ? "bg-forest-400 text-white scale-110"
                  : "bg-forest-100 text-forest-300"
              }`}
            >
              {i + 1 < step ? "✓" : i + 1}
            </div>
            <span className="hidden sm:block">{label}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-forest-100 rounded-full h-2">
        <div
          className="bg-forest-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
