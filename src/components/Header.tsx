import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-neutral-200 text-neutral-900 py-4 shadow-sm" 
          : "bg-transparent border-transparent text-white pt-10 pb-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu & Search */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2 -ml-2"><Menu className="w-5 h-5" /></button>
            <button className="p-2"><Search className="w-5 h-5" /></button>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left flex justify-center lg:justify-start">
            <a href="/" className="inline-block">
              <img src="/images/LogoNovo2.webp" alt="JOÁ" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-6 text-[10px] xl:text-[11px] font-semibold uppercase tracking-widest px-4">
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Óculos de Sol</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Óculos de Grau</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Marcas</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Brand Store</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">JOÁ Collections</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap text-neutral-500">Lentes</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap text-neutral-500">Flagships</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap text-neutral-500">Sports & Kids</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap text-neutral-500">Bazar</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 lg:gap-4">
            <button className="p-2 hidden lg:flex items-center gap-2 hover:opacity-70 transition-opacity group">
              <Search className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden xl:block group-hover:underline">Busca</span>
            </button>
            <button className="p-2 hidden lg:flex items-center gap-2 hover:opacity-70 transition-opacity group">
              <User className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden xl:block group-hover:underline">Conta</span>
            </button>
            <button className="p-2 hover:opacity-70 transition-opacity flex items-center gap-2 group">
              <Heart className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden xl:block group-hover:underline">Favoritos</span>
            </button>
            <button className="p-2 -mr-2 lg:mr-0 hover:opacity-70 transition-opacity flex items-center gap-2 group">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden xl:block group-hover:underline">Sacola</span>
              <span className="text-[10px] font-bold mt-1 xl:hidden">0</span>
              <span className="text-[10px] font-bold ml-1 hidden xl:block">(0)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
