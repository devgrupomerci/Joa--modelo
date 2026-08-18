import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const STORES = [
  {
    name: "SHOPPING HIGIENÓPOLIS",
    address: "Av. Higienópolis 618, Lj.419",
    details: "Piso Vilaboim - São Paulo - SP",
    cep: "CEP 01238-000",
    phone: "(11) 3823-2747",
    hours: "Seg. à Sab. 10h00 às 22h00 - Dom. e Fer. 14h00 às 20h00",
    email: "higienopolis@oticajoa.com.br",
    whatsapp: "https://wa.me/551138232747"
  },
  {
    name: "SHOPPING BUTANTÃ",
    address: "Av. Prof. Francisco Morato 2718, Lj.30",
    details: "São Paulo SP",
    cep: "CEP 05512-300",
    phone: "(11) 2155-1505",
    hours: "Seg. à Sab. 10h00 às 22h00 - Dom. e Fer. 14h00 às 20h00",
    email: "butanta@oticajoa.com.br",
    whatsapp: "https://wa.me/551121551505"
  },
  {
    name: "VILA NOVA CONCEIÇÃO",
    address: "Rua Afonso Braz 618",
    details: "São Paulo SP",
    cep: "CEP 04511-001",
    phone: "(11) 3849-1211",
    hours: "Seg. à Sex. 09h30 às 18h30 - Sábado 09h00 às 13h00",
    email: "vilanova@oticajoa.com.br",
    whatsapp: "https://wa.me/551138491211"
  },
  {
    name: "JOÁ SPORTS & KIDS",
    address: "Rua Afonso Braz 636 B",
    details: "Vila Nova Conceição - São Paulo SP",
    cep: "CEP 04511-001",
    phone: "(11) 3331-6245",
    hours: "Seg. à Sex. 09h30 às 18h30 - Sábado 09h00 às 13h00",
    email: "sportskids@oticajoa.com.br",
    whatsapp: "https://wa.me/551133316245"
  },
  {
    name: "BELA VISTA",
    address: "Rua Itapeva 240, Lj.02",
    details: "São Paulo SP",
    cep: "CEP 01332-000",
    phone: "(11) 2507-9374",
    hours: "Seg. à Sex. 09h30 às 18h30 - Sábado 09h00 às 13h00",
    email: "itapeva@oticajoa.com.br",
    whatsapp: "https://wa.me/551125079374"
  },
  {
    name: "CONJUNTO NACIONAL",
    address: "Av. Paulista 2073, Lj.127",
    details: "São Paulo SP",
    cep: "CEP 01311-300",
    phone: "(11) 3262-4545",
    hours: "Seg. à Sex. 09h30 às 18h30 - Sábado 09h00 às 13h00",
    email: "cnacional@oticajoa.com.br",
    whatsapp: "https://wa.me/551132624545"
  },
  {
    name: "JARDIM PAULISTANO",
    address: "Rua Dr. Mário Ferraz, 480",
    details: "São Paulo SP",
    cep: "CEP 01453-011",
    phone: "(11) 3079-0182",
    hours: "Seg. à Sex. 09h30 às 18h30 - Sábado 09h00 às 13h00",
    email: "marioferraz@oticajoa.com.br",
    whatsapp: "https://wa.me/551130790182"
  },
  {
    name: "FARIA LIMA",
    address: "Av. Brigadeiro Faria Lima 2782",
    details: "São Paulo SP",
    cep: "CEP 01451-000",
    phone: "(11) 3814-2645",
    hours: "Seg. à Sex. 09h30 às 18h30 - Sábado 09h00 às 13h00",
    email: "flima@oticajoa.com.br",
    whatsapp: "https://wa.me/551138142645"
  }
];

export function FlagshipsSection() {
  return (
    <section className="py-24 bg-cream-50" id="lojas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-neutral-500">Nossas Lojas</h2>
          <p className="text-3xl md:text-4xl font-serif text-neutral-900">Encontre a JOÁ mais próxima de você</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORES.map((store, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-8 flex flex-col transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6 pb-4 border-b border-neutral-100">{store.name}</h3>
              
              <div className="flex-1 space-y-4 text-sm text-neutral-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{store.address}</p>
                    <p>{store.details}</p>
                    <p className="text-neutral-400">{store.cep}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  <p>{store.phone}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">{store.hours}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  <a href={`mailto:${store.email}`} className="hover:text-neutral-900 transition-colors break-all">
                    {store.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <a 
                  href={store.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-50 text-green-700 border border-green-200 px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
