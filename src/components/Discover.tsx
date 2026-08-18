const CATEGORIES = [
  {
    title: "Óculos de Sol",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Óculos de Grau",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Novidades",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Exclusivos JOÁ",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
  }
];

export function Discover() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">Descubra seu próximo olhar</h2>
        <p className="text-neutral-500 uppercase tracking-widest text-xs font-semibold">Categorias principais</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {CATEGORIES.map((category, idx) => (
          <a key={idx} href="#" className="group relative aspect-[3/4] overflow-hidden block">
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-xl font-serif tracking-wide">{category.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
