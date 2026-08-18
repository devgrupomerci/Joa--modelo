import { ShieldCheck, MapPin, RefreshCcw, Headphones, CheckCircle2 } from 'lucide-react';

const BENEFITS = [
  { icon: CheckCircle2, title: "Produtos originais" },
  { icon: ShieldCheck, title: "Compra segura" },
  { icon: MapPin, title: "Retire na loja" },
  { icon: RefreshCcw, title: "Troca facilitada" },
  { icon: Headphones, title: "Atendimento especializado" }
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-cream-100 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {BENEFITS.map((Benefit, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-4">
              <Benefit.icon className="w-6 h-6 text-neutral-600 stroke-[1.5]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                {Benefit.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
