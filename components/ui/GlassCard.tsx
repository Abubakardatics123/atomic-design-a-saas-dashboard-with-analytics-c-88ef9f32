// GlassCard — reusable glassmorphism container
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  noPadding?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  title,
  subtitle,
  action,
  noPadding = false,
}: GlassCardProps) {
  return (
    <div className={["glass-card", className].join(" ")}>
      {(title || action) && (
        <div className="flex items-center justify-between px-5 pt-5 pb-0">
          <div>
            {title && <h3 className="text-sm font-semibold text-white">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={noPadding ? "" : "p-5"}>{children}</div>
    </div>
  );
}
