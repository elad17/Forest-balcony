import { useState } from "react";
import Button from "@/components/ui/Button";

export default function StepContact({
  name,
  phone,
  loading,
  error,
  onSubmit,
  onChange,
}: {
  name: string;
  phone: string;
  loading: boolean;
  error: string | null;
  onSubmit: () => void;
  onChange: (name: string, phone: string) => void;
}) {
  const [localName, setLocalName] = useState(name);
  const [localPhone, setLocalPhone] = useState(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(localName, localPhone);
    onSubmit();
  };

  const isValid = localName.trim().length >= 2 && localPhone.trim().length >= 9;

  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-3xl font-bold text-forest-800 mb-2">
        כמעט שם! 🌿
      </h2>
      <p className="text-forest-500 mb-6">
        אחרי שה-AI ייצור את העיצוב שלך, אחזור אליך עם הצעת מחיר מותאמת
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-forest-700 font-medium mb-1 text-sm">
            שם מלא *
          </label>
          <input
            type="text"
            value={localName}
            onChange={(e) => {
              setLocalName(e.target.value);
              onChange(e.target.value, localPhone);
            }}
            placeholder="ישראל ישראלי"
            className="w-full border-2 border-forest-200 rounded-xl px-4 py-3 text-forest-800 placeholder-forest-300 focus:border-forest-500 focus:outline-none transition-colors bg-white"
            required
            minLength={2}
          />
        </div>

        <div>
          <label className="block text-forest-700 font-medium mb-1 text-sm">
            מספר טלפון *
          </label>
          <input
            type="tel"
            value={localPhone}
            onChange={(e) => {
              setLocalPhone(e.target.value);
              onChange(localName, e.target.value);
            }}
            placeholder="050-0000000"
            className="w-full border-2 border-forest-200 rounded-xl px-4 py-3 text-forest-800 placeholder-forest-300 focus:border-forest-500 focus:outline-none transition-colors bg-white"
            required
            dir="ltr"
          />
        </div>

        <div className="text-xs text-forest-400 text-center">
          🔒 הפרטים שלך לא יועברו לצד שלישי
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm text-center">
            {error}
          </div>
        )}

        <Button
          type="submit"
          variant="bloom"
          size="lg"
          className="w-full"
          disabled={!isValid || loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ה-AI מעבד את העיצוב שלך...
            </span>
          ) : (
            "✨ ייצור לי עיצוב!"
          )}
        </Button>
      </form>
    </div>
  );
}
