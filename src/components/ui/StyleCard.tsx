import Image from "next/image";
import { GardenStyle } from "@/lib/types";

export default function StyleCard({ style }: { style: GardenStyle }) {
  return (
    <div className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white cursor-pointer">
      <div className="relative h-48">
        <Image
          src={style.unsplashUrl}
          alt={style.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-800/80 to-transparent" />
        <div className="absolute bottom-3 start-4">
          <span className="text-2xl">{style.emoji}</span>
          <h3 className="text-white font-bold text-lg font-display">{style.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-forest-700 text-sm mb-3">{style.description}</p>
        <div className="flex flex-wrap gap-1">
          {style.plants.slice(0, 3).map((plant) => (
            <span
              key={plant}
              className="text-xs bg-forest-50 text-forest-600 border border-forest-200 px-2 py-0.5 rounded-full"
            >
              {plant}
            </span>
          ))}
          {style.plants.length > 3 && (
            <span className="text-xs text-forest-400">
              +{style.plants.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
