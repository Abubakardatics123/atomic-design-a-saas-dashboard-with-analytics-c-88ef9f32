"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { activeUsersData } from "@/lib/mock-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-[rgba(99,102,241,0.25)] rounded-xl p-3 shadow-2xl">
        <p className="text-xs font-semibold text-slate-400 mb-1">{label}</p>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span className="text-slate-400">Active Users:</span>
          <span className="text-white font-semibold">{payload[0].value.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

interface ActiveUsersAreaChartProps {
  data?: typeof activeUsersData;
}

export default function ActiveUsersAreaChart({ data = activeUsersData }: ActiveUsersAreaChartProps) {
  const fmtY = (v: number) => (v / 1000).toFixed(0) + "k";

  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: "#64748B", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#64748B", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={fmtY}
          width={35}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="users"
          stroke="#8B5CF6"
          strokeWidth={2.5}
          fill="url(#usersGrad)"
          dot={false}
          activeDot={{ r: 5, fill: "#8B5CF6", stroke: "#0F0F1A", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
