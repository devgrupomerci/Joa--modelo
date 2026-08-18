import { useState, useEffect } from 'react';

const BENEFITS = [
  "Produtos 100% originais",
  "Curadoria desde 1957",
  "Retire em nossas lojas",
  "Atendimento JOÁ Concierge",
  "Compra segura"
];

export function UtilityBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BENEFITS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-neutral-900 text-cream-50 text-xs font-medium py-2 px-4 text-center tracking-wide uppercase transition-all duration-500">
      <p className="animate-fade-in-up" key={currentIndex}>{BENEFITS[currentIndex]}</p>
    </div>
  );
}
