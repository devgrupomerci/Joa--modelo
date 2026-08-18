export function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/6a5147649bde2_13_03BannerSite1_compra09_031.jpg" 
          alt="High fashion eyewear" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
