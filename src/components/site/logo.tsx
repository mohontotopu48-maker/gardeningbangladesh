import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "icon";
  theme?: "light" | "dark";
};

export function Logo({ className, variant = "full", theme = "light" }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5 shrink-0", className)}>
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden ring-1 ${
          theme === "light"
            ? "bg-brand-green-light ring-brand-green/20"
            : "bg-white/10 ring-white/20"
        }`}
      >
        <Image
          src="/gb-logo.png"
          alt="Gardening Bangladesh Logo"
          fill
          className="object-contain p-1.5"
          sizes="44px"
        />
      </span>
      {variant === "full" && (
        <span className="flex flex-col leading-tight">
          <span
            className={`text-[15px] sm:text-base font-extrabold tracking-tight ${
              theme === "light" ? "text-brand-green-deep" : "text-white"
            }`}
          >
            Gardening
            <span className="text-brand-green"> Bangladesh</span>
          </span>
          <span
            className={`text-[10px] font-medium -mt-0.5 ${
              theme === "light" ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            সবুজে বাঁচি প্রতিদিন
          </span>
        </span>
      )}
    </span>
  );
}
