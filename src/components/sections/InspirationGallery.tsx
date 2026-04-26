import StyleCard from "@/components/ui/StyleCard";
import { GARDEN_STYLES } from "@/lib/constants";

export default function InspirationGallery() {
  return (
    <section className="py-20 md:py-28 bg-forest-50" id="gallery">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            השראה
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mt-2 mb-4">
            6 סגנונות גינה
          </h2>
          <p className="text-forest-600 text-lg max-w-xl mx-auto">
            כל מרפסת שונה — בחר את הסגנון שמדבר אליך ואנחנו נתאים אותו בדיוק
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GARDEN_STYLES.map((style) => (
            <StyleCard key={style.id} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
}
