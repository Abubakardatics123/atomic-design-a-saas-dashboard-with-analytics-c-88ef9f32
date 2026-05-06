"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { planBreakdownData } from "@/lib/mock-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-[rgba(99,102,241,0.25)] rounded-xl p-3 shadow-2xl">
        <p className="text-xs font-semibold text-slate-400 mb-2">{label}</p>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 text-xs mb-1">
            <div className="w-2 h-2 rounded-full" style={{ background: entry.fill }} />
            <span className="text-slate-400 capitalize">{entry.name}:</span>
            <span className="text-white font-semibold">${entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface PlanBreakdownChartProps {
  data?: typeof planBreakdownData;
}

export default function PlanBreakdownChart({ data = planBreakdownData }: PlanBreakdownChartProps) {
  const fmtY = (v: number) => "$" + (v / 1000).toFixed(0) + "k";

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }} barSize={12}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: "#64748B", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#64748B", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={fmtY}
          width={40}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,102,241,0.05)" }} />
        <Legend
          wrapperStyle={{ fontSize: "11px", color: "#64748B", paddingTop: "12px" }}
          iconType="circle"
          iconSize={8}
        />
        <Bar dataKey="starter" name="Starter" stackId="a" fill="#22D3EE" radius={[0, 0, 0, 0]} />
        <Bar dataKey="pro" name="Pro" stackId="a" fill="#8B5CF6" radius={[0, 0, 0, 0]} />
        <Bar dataKey="enterprise" name="Enterprise" stackId="a" fill="#6366F1" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
