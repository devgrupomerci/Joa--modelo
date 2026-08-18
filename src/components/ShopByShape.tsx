const SHAPES = [
  "Gatinho",
  "Retangular",
  "Redondo",
  "Aviador",
  "Geométrico",
  "Oversized"
];

export function ShopByShape() {
  return (
    <section className="py-24 bg-cream-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-16">Encontre o formato certo</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {SHAPES.map((shape, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 font-serif text-lg tracking-wide min-w-[160px]"
            >
              {shape}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
