import Image from "next/image";
import { GARDEN_STYLES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function StepStyle({
  selected,
  onChange,
  onNext,
}: {
  selected: string[];
  onChange: (styles: string[]) => void;
  onNext: () => void;
}) {
  const toggle = (name: string) => {
    onChange(
      selected.includes(name)
        ? selected.filter((s) => s !== name)
        : [...selected, name]
    );
  };

  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-3xl font-bold text-forest-800 mb-2">
        איזה סגנון אוהב/ת?
      </h2>
      <p className="text-forest-500 mb-6">ניתן לבחור יותר מאחד</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {GARDEN_STYLES.map((style) => {
          const isSelected = selected.includes(style.name);
          return (
            <button
              key={style.id}
              onClick={() => toggle(style.name)}
              className={`relative rounded-2xl overflow-hidden h-28 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "ring-4 ring-forest-500 scale-[1.02]"
                  : "hover:scale-[1.02] opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={style.unsplashUrl}
                alt={style.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className={`absolute inset-0 transition-all ${
                  isSelected ? "bg-forest-800/50" : "bg-forest-900/40"
                }`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl mb-1">{style.emoji}</span>
                <span className="text-white font-bold text-sm">{style.name}</span>
              </div>
              {isSelected && (
                <div className="absolute top-2 end-2 bg-forest-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={onNext}
        disabled={selected.length === 0}
      >
        המשך {selected.length > 0 && `(${selected.length} נבחרו)`}
      </Button>
    </div>
  );
}
