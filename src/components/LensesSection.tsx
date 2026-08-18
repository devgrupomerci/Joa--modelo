export function LensesSection() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-8 leading-tight text-balance">
          Um novo olhar <br/>começa pelas lentes.
        </h2>
        <p className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto">
          Apresentamos a mais alta tecnologia óptica em parceria com os melhores laboratórios do mundo, garantindo conforto e precisão absoluta.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            Lentes de grau
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            Lentes solares
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            Tratamentos
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            Tecnologia ZEISS
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors text-red-700 border-red-700">
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
