const BRANDS = [
  {
    title: "JOÁ × Oakley",
    image: "/assets/ChatGPT Image 18_08_2026, 03_48_15 (1).png",
  },
  {
    title: "JOÁ × Ray-Ban",
    image: "/assets/ChatGPT Image 18_08_2026, 03_48_15 (2).png",
  },
  {
    title: "JOÁ × Anne et Valentin",
    image: "/assets/ChatGPT Image 18_08_2026, 03_48_15 (3).png",
  },
  {
    title: "JOÁ × Designers",
    image: "/assets/ChatGPT Image 18_08_2026, 03_48_16 (4).png",
  }
];

export function CuradoriaBrands() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">Curadoria JOÁ</h2>
          <p className="text-neutral-500 font-light text-lg">Uma seleção de casas, designers e ícones escolhidos pela JOÁ.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRANDS.map((brand, idx) => (
            <a key={idx} href="#" className="group relative aspect-[4/3] md:aspect-[16/9] overflow-hidden block bg-neutral-200">
              <img 
                src={brand.image} 
                alt={brand.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
