export function MaisonHighlight() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/d85d9b36-9242-484a-b7da-b886227223a1.png" 
          alt="Prada Eyewear Campaign" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 text-white">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-6">Prada Eyewear</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-tight">
            Uma nova visão sobre design contemporâneo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="w-full sm:w-auto bg-white text-neutral-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
              Conhecer a coleção
            </a>
            <a href="#" className="w-full sm:w-auto bg-transparent border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-colors">
              Explorar Brand Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
