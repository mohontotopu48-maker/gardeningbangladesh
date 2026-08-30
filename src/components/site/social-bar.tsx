import {
  Youtube,
  Facebook,
  Users,
  Instagram,
  Music2,
  Twitter,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import { socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Youtube,
  Facebook,
  Users,
  Instagram,
  Music2,
  Twitter,
  Linkedin,
};

type SocialBarProps = {
  className?: string;
  variant?: "default" | "compact" | "solid";
  size?: "sm" | "md";
};

export function SocialBar({
  className,
  variant = "default",
  size = "md",
}: SocialBarProps) {
  const sizeCls =
    size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconCls = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon] ?? Facebook;
        if (variant === "solid") {
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.nameEn}
              title={social.name}
              className={cn(
                "flex items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-sm",
                sizeCls,
              )}
              style={{ backgroundColor: social.color }}
            >
              <Icon className={iconCls} />
            </a>
          );
        }
        return (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.nameEn}
            title={social.name}
            className={cn(
              "flex items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all duration-300 hover:text-white hover:border-transparent hover:scale-110 hover:-translate-y-0.5",
              sizeCls,
            )}
            style={
              {
                "--hover-color": social.color,
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = social.color;
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <Icon className={iconCls} />
          </a>
        );
      })}
    </div>
  );
}
