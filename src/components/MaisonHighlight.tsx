export function MaisonHighlight() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589810635657-232049bf69cb?auto=format&fit=crop&q=80&w=2000" 
          alt="Prada Eyewear Campaign" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-6">Prada Eyewear</h2>
        <p className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-tight">
          Uma nova visão sobre design contemporâneo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-white text-neutral-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
            Conhecer a coleção
          </a>
          <a href="#" className="w-full sm:w-auto bg-transparent border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-colors">
            Explorar Brand Store
          </a>
        </div>
      </div>
    </section>
  );
}
