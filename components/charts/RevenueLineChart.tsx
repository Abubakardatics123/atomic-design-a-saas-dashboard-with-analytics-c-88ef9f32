"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { revenueData } from "@/lib/mock-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-[rgba(99,102,241,0.25)] rounded-xl p-3 shadow-2xl">
        <p className="text-xs font-semibold text-slate-400 mb-2">{label}</p>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-slate-400">{entry.name}:</span>
            <span className="text-white font-semibold">${entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface RevenueLineChartProps {
  data?: typeof revenueData;
}

export default function RevenueLineChart({ data = revenueData }: RevenueLineChartProps) {
  const fmtY = (v: number) => "$" + (v / 1000).toFixed(0) + "k";

  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
          width={45}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: "11px", color: "#64748B", paddingTop: "12px" }}
          iconType="circle"
          iconSize={8}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Revenue"
          stroke="#6366F1"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, fill: "#6366F1", stroke: "#0F0F1A", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="mrr"
          name="MRR"
          stroke="#22D3EE"
          strokeWidth={2.5}
          dot={false}
          strokeDasharray="5 3"
          activeDot={{ r: 5, fill: "#22D3EE", stroke: "#0F0F1A", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
