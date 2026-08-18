export function JoaCollections() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image 18_08_2026, 04_19_23.png" 
          alt="JOÁ Selection Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white/80">JOÁ Selection</h2>
        <p className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-tight">
          Peças selecionadas pelo olhar dos nossos especialistas.
        </p>
        <a href="#" className="inline-block bg-white text-neutral-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
          Conhecer a seleção
        </a>
      </div>
    </section>
  );
}
