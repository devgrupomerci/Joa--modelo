const BRANDS = [
  "Prada", "Gucci", "Oakley", "Ray-Ban", "Miu Miu", "Tom Ford", "Cartier", "Anne et Valentin"
];

export function BrandStores() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-20">Entre no universo das grandes maisons</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 items-center justify-items-center opacity-60 grayscale mb-20">
          {BRANDS.map((brand, idx) => (
            <a key={idx} href="#" className="font-serif text-2xl md:text-3xl hover:opacity-100 hover:grayscale-0 transition-all duration-500 text-neutral-900">
              {brand.toUpperCase()}
            </a>
          ))}
        </div>

        <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors inline-block">
          Ver todas as marcas
        </a>
      </div>
    </section>
  );
}
