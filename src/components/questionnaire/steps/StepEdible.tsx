import { QuestionnaireAnswers } from "@/lib/types";

const options: { value: QuestionnaireAnswers["edible"]; label: string; desc: string; icon: string }[] = [
  { value: "כן", label: "כן!", desc: "ירקות ועשבי תיבול בלבד", icon: "🥬" },
  { value: "שילוב", label: "שילוב", desc: "גם אכילים וגם נוי", icon: "🌿" },
  { value: "לא", label: "לא", desc: "נוי בלבד", icon: "🌸" },
];

export default function StepEdible({
  onSelect,
}: {
  onSelect: (v: QuestionnaireAnswers["edible"]) => void;
}) {
  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-3xl font-bold text-forest-800 mb-2">
        רוצה צמחים אכילים?
      </h2>
      <p className="text-forest-500 mb-8">ירקות, עשבי תיבול ותבלינים</p>
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
            <span className="text-forest-500 text-sm text-center">{opt.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
