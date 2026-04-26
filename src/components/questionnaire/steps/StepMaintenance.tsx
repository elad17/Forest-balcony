import { QuestionnaireAnswers } from "@/lib/types";

const options: { value: QuestionnaireAnswers["maintenance"]; label: string; desc: string; icon: string }[] = [
  { value: "נמוך", label: "נמוך", desc: "השקיה אוטו׳ + צמחים עמידים", icon: "😌" },
  { value: "בינוני", label: "בינוני", desc: "10-15 דקות בשבוע", icon: "👌" },
  { value: "גבוה", label: "גבוה", desc: "אני אוהב/ת לטפל בצמחים", icon: "🧑‍🌾" },
];

export default function StepMaintenance({
  onSelect,
}: {
  onSelect: (v: QuestionnaireAnswers["maintenance"]) => void;
}) {
  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-3xl font-bold text-forest-800 mb-2">
        כמה זמן לתחזוקה?
      </h2>
      <p className="text-forest-500 mb-8">נתאים צמחים לרמת המאמץ שמתאים לך</p>
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
