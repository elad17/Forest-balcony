export default function PlantTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-forest-100 text-forest-700 px-3 py-1 rounded-full text-sm font-medium border border-forest-200">
      🌿 {name}
    </span>
  );
}
