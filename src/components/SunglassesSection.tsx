const SUNGLASSES = [
  {
    brand: "TIFFANY",
    model: "4251 Gatinho Preto",
    image: "/180_oculos_de_sol_gatinho_tiffany_4251_preto_10163991_2_7b094a4383f24b2611aeb5f09dd8fc23.webp",
  },
  {
    brand: "MKENZY",
    model: "DJ9099S Quadrado Marrom",
    image: "/180_oculos_de_sol_quadrado_mkenzy_dj9099s_marrom_10167083_2_9a7c49ef4b4bb020de6cf032e313785e.webp",
  },
];

export function SunglassesSection() {
  return (
    <section id="oculos-de-sol" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors inline-block mb-5">
              Óculos de Sol
            </a>
            <h2 className="text-3xl md:text-4xl font-serif">Óculos de Sol</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SUNGLASSES.map((item) => (
            <a key={item.model} href="#" className="group relative min-h-[420px] overflow-hidden bg-white">
              <img
                src={item.image}
                alt={`${item.brand} ${item.model}`}
                className="absolute inset-0 w-full h-full object-contain p-10 md:p-16 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">{item.brand}</p>
                <h3 className="text-2xl md:text-3xl font-serif">{item.model}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
