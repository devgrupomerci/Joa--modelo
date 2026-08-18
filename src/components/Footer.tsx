import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Column 1: JOÁ */}
          <div className="lg:col-span-1">
            <img src="/assets/LogoNovo2.webp" alt="JOÁ" className="h-8 mb-6 object-contain" />
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Sobre a JOÁ</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Nossa história</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Flagships</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 2: Ajuda */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-neutral-900">Ajuda</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Entrega</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Trocas</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Pagamentos</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Eyewear */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-neutral-900">Eyewear</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Óculos de Sol</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Óculos de Grau</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Marcas</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Novidades</a></li>
            </ul>
          </div>

          {/* Column 4: Serviços ópticos */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-neutral-900">Serviços ópticos</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Lentes</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Receitas</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">JOÁ Concierge</a></li>
            </ul>
          </div>

          {/* Column 5: Social / Newsletter placeholder */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-neutral-900">Conecte-se</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>&copy; {new Date().getFullYear()} JOÁ. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Políticas</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
