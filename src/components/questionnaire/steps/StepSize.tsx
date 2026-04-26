import { QuestionnaireAnswers } from "@/lib/types";

const options: { value: QuestionnaireAnswers["size"]; label: string; desc: string; icon: string }[] = [
  { value: "קטנה", label: "קטנה", desc: "עד 6 מ״ר", icon: "🪴" },
  { value: "בינונית", label: "בינונית", desc: "6–15 מ״ר", icon: "🌿" },
  { value: "גדולה", label: "גדולה", desc: "15 מ״ר ומעלה", icon: "🌳" },
];

export default function StepSize({
  onSelect,
}: {
  onSelect: (v: QuestionnaireAnswers["size"]) => void;
}) {
  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-3xl font-bold text-forest-800 mb-2">
        מה גודל המרפסת שלך?
      </h2>
      <p className="text-forest-500 mb-8">בחר את הגודל המתאים</p>
      <div className="grid grid-cols-3 gap-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-forest-200 bg-white hover:border-forest-500 hover:bg-forest-50 hover:scale-105 transition-all duration-200 cursor-pointer group"
          >
            <span className="text-5xl group-hover:scale-110 transition-transform">
              {opt.icon}
            </span>
            <span className="font-bold text-forest-800 text-lg">{opt.label}</span>
            <span className="text-forest-500 text-sm">{opt.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
