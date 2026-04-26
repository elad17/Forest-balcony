import ImageUpload from "@/components/ui/ImageUpload";
import Button from "@/components/ui/Button";

export default function StepPhoto({
  hasPhoto,
  onImageSelected,
  onClear,
  onNext,
  onSkip,
}: {
  hasPhoto: boolean;
  onImageSelected: (base64: string, mimeType: string) => void;
  onClear: () => void;
  onNext: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-3xl font-bold text-forest-800 mb-2">
        העלה תמונה של המרפסת
      </h2>
      <p className="text-forest-500 mb-2">
        <span className="text-forest-400 font-semibold">מומלץ</span> — ה-AI יתאים
        את ההמלצות לתנאים הקיימים
      </p>
      <div className="inline-block bg-forest-100 text-forest-600 text-xs px-3 py-1 rounded-full mb-6">
        ✅ התמונה לא נשמרת בשרת
      </div>

      <ImageUpload onImageSelected={onImageSelected} onClear={onClear} />

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        {hasPhoto ? (
          <Button variant="primary" size="lg" className="flex-1" onClick={onNext}>
            ✨ ייצור לי עיצוב!
          </Button>
        ) : (
          <Button variant="primary" size="lg" className="flex-1" onClick={onNext} disabled>
            ✨ ייצור לי עיצוב!
          </Button>
        )}
        <Button variant="ghost" size="lg" onClick={onSkip} className="text-forest-500">
          דלג על תמונה ←
        </Button>
      </div>
    </div>
  );
}
