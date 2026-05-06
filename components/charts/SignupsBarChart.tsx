"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { signupsData } from "@/lib/mock-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-[rgba(99,102,241,0.25)] rounded-xl p-3 shadow-2xl">
        <p className="text-xs font-semibold text-slate-400 mb-1">{label}</p>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
          <span className="text-slate-400">Signups:</span>
          <span className="text-white font-semibold">{payload[0].value}</span>
        </div>
      </div>
    );
  }
  return null;
};

interface SignupsBarChartProps {
  data?: typeof signupsData;
}

export default function SignupsBarChart({ data = signupsData }: SignupsBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }} barSize={14}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" vertical={false} />
        <XAxis
          dataKey="week"
          tick={{ fill: "#64748B", fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          interval={2}
        />
        <YAxis
          tick={{ fill: "#64748B", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={30}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,102,241,0.05)" }} />
        <Bar dataKey="signups" radius={[4, 4, 0, 0]}>
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={index === data.length - 1 ? "#6366F1" : "rgba(99,102,241,0.4)"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
