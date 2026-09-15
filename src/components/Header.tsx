import { Search, User, Heart, ShoppingBag, Menu, ChevronDown } from 'lucide-react';
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
            <button className="p-2 -ml-2 hover:text-[var(--color-joa-green)] transition-colors"><Menu className="w-5 h-5" /></button>
            <button className="p-2 hover:text-[var(--color-joa-green)] transition-colors"><Search className="w-5 h-5" /></button>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left flex justify-center lg:justify-start">
            <a href="/" className="inline-block">
              <img src="/LogoNovo2.webp" alt="JOÁ" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 text-[11px] font-semibold uppercase tracking-widest px-4">
            <div className="relative group cursor-pointer h-full py-2">
              <a href="#" className="flex items-center gap-1 hover:text-[var(--color-joa-green)] transition-colors whitespace-nowrap">
                Óculos de Grau <ChevronDown className="w-3 h-3" />
              </a>
            </div>
            <div className="relative group cursor-pointer h-full py-2">
              <a href="#" className="flex items-center gap-1 hover:text-[var(--color-joa-green)] transition-colors whitespace-nowrap">
                Óculos de Sol <ChevronDown className="w-3 h-3" />
              </a>
            </div>
            <a href="#" className={clsx("hover:text-[var(--color-joa-green)] transition-colors whitespace-nowrap", isScrolled ? "text-neutral-500" : "text-white")}>Lentes</a>
            <a href="#" className="hover:text-[var(--color-joa-green)] transition-colors whitespace-nowrap">Joá Collections</a>
            <a href="#" className={clsx("hover:text-[var(--color-joa-green)] transition-colors whitespace-nowrap", isScrolled ? "text-neutral-500" : "text-white")}>Sports & Kids</a>
            <a href="#" className="hover:text-[var(--color-joa-green)] transition-colors whitespace-nowrap font-bold">[CAMPANHA]</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 lg:gap-4">
            <button className="p-2 hidden lg:flex items-center justify-center hover:text-[var(--color-joa-green)] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hidden lg:flex items-center justify-center hover:text-[var(--color-joa-green)] transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 flex items-center justify-center hover:text-[var(--color-joa-green)] transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 -mr-2 lg:mr-0 flex items-center justify-center hover:text-[var(--color-joa-green)] transition-colors relative group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 lg:-top-1 lg:-right-1 bg-neutral-900 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-[var(--color-joa-green)] group-hover:text-neutral-900 transition-colors">0</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
