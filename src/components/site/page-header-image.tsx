import Image from "next/image";

type PageHeaderImageProps = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

// A proper-size header image banner for category/collection/membership pages
// Shows image at full width with proper aspect ratio (no zoom/crop beyond cover)
export function PageHeaderImage({ src, alt, title, subtitle }: PageHeaderImageProps) {
  return (
    <section className="relative w-full overflow-hidden bg-brand-green-deep">
      <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/85 via-brand-green-dark/50 to-brand-green-deep/60" />
        {title && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              {subtitle && (
                <p className="text-xs sm:text-sm font-semibold text-brand-green-bright mb-1">
                  {subtitle}
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">
                {title}
              </h2>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Category-to-related-image mapping
export const categoryHeaderImages: Record<number, string> = {
  1: "/gallery/organic-fertilizer-header.jpg", // Organic fertilizer → dedicated header image
  7: "/gallery/chemical-fertilizer-header.jpg", // Chemical fertilizer → dedicated header image
  8: "/gallery/gardening-bangladesh-garden-view-03.jpg", // Ready mix media → garden view
  2: "/gallery/gardening-bangladesh-garden-view-04.jpg", // Pots & planters → garden view
  3: "/gallery/gardening-bangladesh-mango.jpg", // Seeds → mango
  4: "/gallery/gardening-bangladesh-rooftop-garden.jpg", // Garden tools → rooftop garden
  5: "/gallery/gardening-bangladesh-dhaka-rooftop-lounge.jpg", // Pesticides → rooftop lounge
  6: "/gallery/gardening-bangladesh-nursery.jpg", // Other accessories → nursery
  9: "/gallery/gardening-bangladesh-indoor-plants-01.jpg", // Indoor plants → indoor
  10: "/gallery/outdoor-plants-header.jpg", // Outdoor plants → dedicated header image
};

// Collection-to-related-image mapping
export const collectionHeaderImages: Record<string, string> = {
  fertilizers: "/gallery/gardening-bangladesh-nursery.jpg",
  "plants-seeds": "/gallery/gardening-bangladesh-indoor-plants-02.jpg",
  "tools-care": "/gallery/gardening-bangladesh-rooftop-garden.jpg",
};
