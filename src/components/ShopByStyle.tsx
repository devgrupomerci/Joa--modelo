const STYLES = [
  { name: "Minimalista", image: "/assets/ChatGPT Image 18_08_2026, 04_00_21 (1).png" },
  { name: "Clássico", image: "/assets/ChatGPT Image 18_08_2026, 04_00_21 (2).png" },
  { name: "Statement", image: "/assets/ChatGPT Image 18_08_2026, 04_00_22 (3).png" },
  { name: "Retrô", image: "/assets/ChatGPT Image 18_08_2026, 04_00_22 (4).png" },
  { name: "Esportivo", image: "/assets/ChatGPT Image 18_08_2026, 04_00_22 (5).png" },
  { name: "Avant-garde", image: "/assets/ChatGPT Image 18_08_2026, 04_00_22 (6).png" },
];

export function ShopByStyle() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-16">Qual é o seu estilo?</h2>
        
        <div className="flex overflow-x-auto hide-scrollbar gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0">
          {STYLES.map((style, idx) => (
            <a key={idx} href="#" className="min-w-[160px] md:min-w-0 group block text-center">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-cream-50 rounded-full">
                <img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-lg text-neutral-900 group-hover:text-neutral-500 transition-colors">{style.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
