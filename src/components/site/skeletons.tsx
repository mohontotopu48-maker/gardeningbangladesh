import { motion } from "framer-motion";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-premium">
      <div className="aspect-square w-full bg-gradient-to-br from-muted to-brand-green-tint animate-pulse" />
      <div className="flex flex-col gap-2 p-3">
        <div className="h-3 w-3/4 bg-muted rounded animate-pulse" />
        <div className="h-3 w-1/2 bg-muted rounded animate-pulse" />
        <div className="mt-2 flex justify-between">
          <div className="h-5 w-16 bg-muted rounded animate-pulse" />
          <div className="h-8 w-16 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          <ProductCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
}
