import { Heart } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    brand: "MKENZY",
    model: "KMN80 Oval",
    color: "Grafite",
    price: "R$ 450",
    installments: "ou 10x de R$ 45",
    image: "/images/180_oculos_de_grau_oval_mkenzy_kmn80_grafite_10167103_2_e51944cfc3f09c61d899620fdc685f87.webp",
    colors: ['#4b4b4b'],
    tag: "Lançamento",
    tagColor: "bg-neutral-900 text-white"
  },
  {
    id: 2,
    brand: "LACOSTE",
    model: "2986 Retangular",
    color: "Tartaruga",
    price: "R$ 890",
    installments: "ou 10x de R$ 89",
    image: "/images/180_oculos_de_grau_retangular_lacoste_2986_tartaruga_10169423_2_d955bd6c25536fdbde9db6750a7bbd9c.webp",
    colors: ['#8b4513'],
    tag: "Oferta",
    tagColor: "bg-red-700 text-white"
  },
  {
    id: 3,
    brand: "TIFFANY",
    model: "4251 Gatinho",
    color: "Preto",
    price: "R$ 1.950",
    installments: "ou 10x de R$ 195",
    image: "/images/180_oculos_de_sol_gatinho_tiffany_4251_preto_10163991_2_7b094a4383f24b2611aeb5f09dd8fc23.webp",
    colors: ['#000000'],
    tag: "Exclusivo",
    tagColor: "bg-neutral-200 text-neutral-900"
  },
  {
    id: 4,
    brand: "MKENZY",
    model: "DJ9099S Quadrado",
    color: "Marrom",
    price: "R$ 550",
    installments: "ou 10x de R$ 55",
    image: "/images/180_oculos_de_sol_quadrado_mkenzy_dj9099s_marrom_10167083_2_9a7c49ef4b4bb020de6cf032e313785e.webp",
    colors: ['#8b4513'],
    tag: "Mais Vendido",
    tagColor: "bg-neutral-900 text-white"
  }
];

export function NewArrivals() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">Novidades da semana</h2>
            <p className="text-neutral-500 font-light text-lg">Produtos recém-chegados à curadoria JOÁ.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors inline-block">
              Ver todas as novidades
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
            {[...PRODUCTS, ...PRODUCTS].map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="group/card border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-sm">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={`${product.brand} ${product.model}`} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover/card:scale-105"
                  />
                  
                  {/* Tag */}
                  {product.tag && (
                    <span className={`absolute top-2 left-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  )}

                  <button className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity hover:text-red-500 shadow-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <button className="w-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-widest py-3 hover:bg-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">{product.brand}</h3>
                  <p className="text-neutral-500 text-sm mb-1">{product.model}</p>
                  <p className="text-neutral-400 text-xs mb-3">{product.color}</p>
                  
                  <div className="flex items-center justify-center gap-1.5 mb-4">
                    {product.colors.map((c, i) => (
                      <span key={i} className="w-3 h-3 rounded-full border border-neutral-200" style={{ backgroundColor: c }}></span>
                    ))}
                  </div>

                  <p className="font-serif text-lg text-neutral-900">{product.price}</p>
                  <p className="text-xs text-neutral-500">{product.installments}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
