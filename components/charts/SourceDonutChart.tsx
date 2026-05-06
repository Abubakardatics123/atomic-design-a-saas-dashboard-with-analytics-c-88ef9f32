"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { trafficSourceData } from "@/lib/mock-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-[rgba(99,102,241,0.25)] rounded-xl p-3 shadow-2xl">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full" style={{ background: payload[0].payload.color }} />
          <span className="text-slate-400">{payload[0].name}:</span>
          <span className="text-white font-semibold">{payload[0].value}%</span>
        </div>
      </div>
    );
  }
  return null;
};

interface SourceDonutChartProps {
  data?: typeof trafficSourceData;
}

export default function SourceDonutChart({ data = trafficSourceData }: SourceDonutChartProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="w-full sm:w-48 flex-shrink-0" style={{ height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1 space-y-2 w-full">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <span className="text-xs text-slate-400 truncate">{item.name}</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-16 h-1.5 bg-[rgba(99,102,241,0.1)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: item.value + "%", background: item.color }}
                />
              </div>
              <span className="text-xs font-semibold text-white w-8 text-right">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
