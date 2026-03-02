interface BrandLogoProps {
  brand: string;
  className?: string;
}

const BRAND_IMAGE_MAP: Record<string, string> = {
  "toyota": "/assets/brands/toyota.webp",
  "honda": "/assets/brands/honda.webp",
  "nissan": "/assets/brands/nissan.png",
  "mazda": "/assets/brands/mazda.png",
  "subaru": "/assets/brands/subaru.webp",
  "mitsubishi": "/assets/brands/mitsubishi.png",
  "suzuki": "/assets/brands/suzuki.png",
  "bmw": "/assets/brands/bmw.png",
  "mercedes-benz": "/assets/brands/mercedes-benz.png",
  "mercedes benz": "/assets/brands/mercedes-benz.png",
  "mercedes": "/assets/brands/mercedes-benz.png",
  "volkswagen": "/assets/brands/volkswagen.png",
  "audi": "/assets/brands/audi.png",
  "mahindra": "/assets/brands/mahindra.png",
  "ford": "/assets/brands/ford.png",
  "peugeot": "/assets/brands/peugeot.png",
  "jeep": "/assets/brands/jeep.png",
  "volvo": "/assets/brands/volvo.png",
  "porsche": "/assets/brands/porsche.png",
  "hyundai": "/assets/brands/hyundai.png",
  "kia": "/assets/brands/kia.png",
  "lexus": "/assets/brands/lexus.webp",
  "land rover": "/assets/brands/land-rover.webp",
  "rover": "/assets/brands/land-rover.webp",
  "isuzu": "/assets/brands/isuzu.png"
};

export function BrandLogo({ brand, className = "h-8 w-8" }: BrandLogoProps) {
  if (!brand) return null;
  
  const brandLower = brand.toLowerCase();
  const imageSrc = BRAND_IMAGE_MAP[brandLower];

  if (!imageSrc) {
    // Elegant fallback for unknown brands
    const displayChar = brand.charAt(0).toUpperCase() || "?";
        
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 font-bold ${className}`}>
        {displayChar}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt={`${brand} logo`}
      className={`object-contain ${className}`}
      loading="lazy"
    />
  );
}
