import BeforeAfterCard from "@/components/ui/BeforeAfterCard";
import { BEFORE_AFTER_PAIRS } from "@/lib/constants";

export default function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="examples">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            לפני ואחרי
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mt-2 mb-4">
            הטרנספורמציה שאנחנו יוצרים
          </h2>
          <p className="text-forest-600 text-lg max-w-xl mx-auto">
            גרור את הסרגל ותראה את ההבדל — מרפסת ריקה למרחב ירוק ומפנק
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BEFORE_AFTER_PAIRS.map((pair, i) => (
            <BeforeAfterCard key={i} pair={pair} />
          ))}
        </div>
      </div>
    </section>
  );
}
