import { ArrowUp, ArrowDown } from 'lucide-react';
import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  prefix?: string;
  suffix?: string;
  icon?: ReactNode;
  iconBg?: string;
  description?: string;
}

export default function StatCard({
  label,
  value,
  change,
  prefix = "",
  suffix = "",
  icon,
  iconBg = "from-[#6366F1] to-[#8B5CF6]",
  description,
}: StatCardProps) {
  const isPositive = change !== undefined && change >= 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <div className="glass-card glass-card-hover p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold text-white mt-1">
            {prefix}
            {typeof value === "number" ? value.toLocaleString() : value}
            {suffix}
          </p>
          {description && (
            <p className="text-xs text-slate-500 mt-1">{description}</p>
          )}
        </div>
        {icon && (
          <div className={["w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0", iconBg].join(" ")}>
            {icon}
          </div>
        )}
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-1.5">
          <div
            className={[
              "flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full",
              isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400",
            ].join(" ")}
          >
            {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
          <span className="text-xs text-slate-500">vs last month</span>
        </div>
      )}
    </div>
  );
}
