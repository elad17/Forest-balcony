"use client";
import { useRef, useState } from "react";

interface ImageUploadProps {
  onImageSelected: (base64: string, mimeType: string) => void;
  onClear: () => void;
}

const MAX_SIZE_MB = 3;

export default function ImageUpload({ onImageSelected, onClear }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = (file: File) => {
    setError(null);
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`הקובץ גדול מדי — מקסימום ${MAX_SIZE_MB}MB`);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("יש להעלות קובץ תמונה בלבד");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const [header, base64] = dataUrl.split(",");
      const mimeType = header.match(/:(.*?);/)?.[1] || "image/jpeg";
      setPreview(dataUrl);
      onImageSelected(base64, mimeType);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleClear = () => {
    setPreview(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
    onClear();
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-forest-300 rounded-2xl p-8 text-center cursor-pointer hover:border-forest-500 hover:bg-forest-50 transition-colors"
        >
          <div className="text-4xl mb-3">📷</div>
          <p className="text-forest-700 font-semibold mb-1">
            גרור תמונה לכאן או לחץ להעלאה
          </p>
          <p className="text-forest-400 text-sm">JPG, PNG, WebP — עד {MAX_SIZE_MB}MB</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden border-2 border-forest-300">
          <img src={preview} alt="תצוגה מקדימה" className="w-full h-48 object-cover" />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-2 start-2 bg-white/90 text-forest-800 text-xs px-3 py-1 rounded-full hover:bg-white transition-colors"
          >
            ✕ הסר תמונה
          </button>
        </div>
      )}
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
