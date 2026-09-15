import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src="/LogoNovo2.webp" alt="JOÁ" className="h-[60px] object-contain" />
        </div>

        {/* Topics and Sub Menus - 2 Column Grid */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-4 mb-14 max-w-3xl mx-auto justify-items-center">
          
          {/* Column 1: A JOÁ */}
          <div className="w-full flex flex-col items-center">
            <h4 className="font-bold text-[15px] uppercase tracking-widest mb-6 text-neutral-900">A JOÁ</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Sobre a JOÁ</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Nossa história</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Flagships</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 2: Ajuda */}
          <div className="w-full flex flex-col items-center">
            <h4 className="font-bold text-[15px] uppercase tracking-widest mb-6 text-neutral-900">Ajuda</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Entrega</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Trocas</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Pagamentos</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Eyewear */}
          <div className="w-full flex flex-col items-center">
            <h4 className="font-bold text-[15px] uppercase tracking-widest mb-6 text-neutral-900">Eyewear</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Óculos de Sol</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Óculos de Grau</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Marcas</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Novidades</a></li>
            </ul>
          </div>

          {/* Column 4: Serviços ópticos */}
          <div className="w-full flex flex-col items-center">
            <h4 className="font-bold text-[15px] uppercase tracking-widest mb-6 text-neutral-900">Serviços ópticos</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Lentes</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Receitas</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">JOÁ Concierge</a></li>
            </ul>
          </div>

        </div>

        {/* Socials */}
        <div className="flex flex-col items-center mb-10">
          <h4 className="font-bold text-[15px] uppercase tracking-widest mb-6 text-neutral-900">Conecte-se</h4>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col items-center justify-center gap-4 text-xs text-neutral-400">
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-neutral-900 transition-colors">Políticas</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacidade</a>
          </div>
          <p>&copy; {new Date().getFullYear()} JOÁ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
