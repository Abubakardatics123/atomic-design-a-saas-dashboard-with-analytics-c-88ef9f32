"use client";

import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import GlassCard from "@/components/ui/GlassCard";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import ActiveUsersAreaChart from "@/components/charts/ActiveUsersAreaChart";
import SignupsBarChart from "@/components/charts/SignupsBarChart";
import SourceDonutChart from "@/components/charts/SourceDonutChart";
import { kpiData, transactionsData, usersData, revenueKpis } from "@/lib/mock-data";
import { DollarSign, Users, TrendingDown, Activity, ArrowUp, ArrowDown, Star, Settings, Eye } from 'lucide-react';

const statusColors: Record<string, string> = {
  paid: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  failed: "bg-red-500/10 text-red-400 border-red-500/20",
  refunded: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const planColors: Record<string, string> = {
  Enterprise: "bg-[rgba(99,102,241,0.15)] text-[#6366F1]",
  Pro: "bg-[rgba(139,92,246,0.15)] text-[#8B5CF6]",
  Starter: "bg-[rgba(34,211,238,0.15)] text-[#22D3EE]",
};

const userStatusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-400",
  churned: "bg-red-500/10 text-red-400",
  trial: "bg-amber-500/10 text-amber-400",
};

export default function Home() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-white">Overview</h2>
            <p className="text-sm text-slate-500 mt-0.5">Welcome back, Jane. Here&apos;s what&apos;s happening today.</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-[rgba(30,30,46,0.8)] border border-[rgba(99,102,241,0.2)] rounded-xl px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-[rgba(99,102,241,0.4)]">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
              <option>This month</option>
            </select>
            <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-medium px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">
              Export
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            label={kpiData.revenue.label}
            value={kpiData.revenue.value}
            change={kpiData.revenue.change}
            prefix="$"
            icon={<DollarSign className="w-5 h-5 text-white" />}
            iconBg="from-[#6366F1] to-[#8B5CF6]"
            description="Total revenue YTD"
          />
          <StatCard
            label={kpiData.mrr.label}
            value={kpiData.mrr.value}
            change={kpiData.mrr.change}
            prefix="$"
            icon={<Activity className="w-5 h-5 text-white" />}
            iconBg="from-[#8B5CF6] to-[#22D3EE]"
            description="Monthly recurring revenue"
          />
          <StatCard
            label={kpiData.activeUsers.label}
            value={kpiData.activeUsers.value}
            change={kpiData.activeUsers.change}
            icon={<Users className="w-5 h-5 text-white" />}
            iconBg="from-[#22D3EE] to-[#6366F1]"
            description="Active this month"
          />
          <StatCard
            label={kpiData.churnRate.label}
            value={kpiData.churnRate.value}
            change={kpiData.churnRate.change}
            suffix="%"
            icon={<TrendingDown className="w-5 h-5 text-white" />}
            iconBg="from-[#EF4444] to-[#F97316]"
            description="Monthly churn rate"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <GlassCard
            title="Revenue & MRR Trend"
            subtitle="Monthly performance over the year"
            className="xl:col-span-2"
            action={
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <ArrowUp className="w-3 h-3" /> 12.5% YoY
              </span>
            }
          >
            <div className="mt-4">
              <RevenueLineChart />
            </div>
          </GlassCard>

          <GlassCard
            title="Traffic Sources"
            subtitle="Revenue breakdown by channel"
          >
            <div className="mt-4">
              <SourceDonutChart />
            </div>
          </GlassCard>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <GlassCard
            title="Active Users"
            subtitle="Monthly active user growth"
            action={
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <ArrowUp className="w-3 h-3" /> 5.7%
              </span>
            }
          >
            <div className="mt-4">
              <ActiveUsersAreaChart />
            </div>
          </GlassCard>

          <GlassCard
            title="Weekly Signups"
            subtitle="New user registrations per week"
            action={
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <ArrowUp className="w-3 h-3" /> 295 this week
              </span>
            }
          >
            <div className="mt-4">
              <SignupsBarChart />
            </div>
          </GlassCard>
        </div>

        {/* Revenue KPIs mini row */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { label: "MRR", value: "$18,750", change: 8.2, positive: true },
            { label: "ARR", value: "$225,000", change: 8.2, positive: true },
            { label: "LTV", value: "$2,840", change: 3.1, positive: true },
            { label: "ARPU", value: "$190", change: 2.4, positive: true },
          ].map((item) => (
            <div key={item.label} className="glass-card p-4">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{item.label}</p>
              <p className="text-xl font-bold text-white mt-1">{item.value}</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-400">
                  <ArrowUp className="w-3 h-3" />{item.change}%
                </span>
                <span className="text-[10px] text-slate-600">vs last mo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Transactions + Users */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Recent Transactions */}
          <GlassCard
            title="Recent Transactions"
            subtitle="Latest billing activity"
            className="xl:col-span-2"
            action={
              <Link href="/revenue" className="text-xs text-[#6366F1] hover:text-[#8B5CF6] transition-colors font-medium">
                View all →
              </Link>
            }
            noPadding
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[rgba(99,102,241,0.1)]">
                    <th className="text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">ID</th>
                    <th className="text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">User</th>
                    <th className="text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Plan</th>
                    <th className="text-right text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Amount</th>
                    <th className="text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsData.slice(0, 6).map((txn) => (
                    <tr key={txn.id} className="border-b border-[rgba(99,102,241,0.06)] hover:bg-[rgba(99,102,241,0.03)] transition-colors">
                      <td className="px-5 py-3">
                        <span className="text-xs font-mono text-slate-500">{txn.id}</span>
                      </td>
                      <td className="px-5 py-3 hidden sm:table-cell">
                        <span className="text-xs text-white font-medium">{txn.user}</span>
                      </td>
                      <td className="px-5 py-3 hidden md:table-cell">
                        <span className={["text-[10px] font-semibold px-2 py-0.5 rounded-full", planColors[txn.plan] || "bg-slate-500/10 text-slate-400"].join(" ")}>
                          {txn.plan}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="text-sm font-bold text-white">${txn.amount}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span className={["text-[10px] font-semibold px-2 py-0.5 rounded-full border capitalize", statusColors[txn.status] || ""].join(" ")}>
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Top Users */}
          <GlassCard
            title="Top Users"
            subtitle="By revenue contribution"
            action={
              <Link href="/users" className="text-xs text-[#6366F1] hover:text-[#8B5CF6] transition-colors font-medium">
                View all →
              </Link>
            }
          >
            <div className="mt-3 space-y-3">
              {usersData.filter(u => u.status === "active").slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{user.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-bold text-white">$124,500asdad</p>
                    <span className={["text-[10px] font-semibold px-1.5 py-0.5 rounded-full", planColors[user.plan] || ""].join(" ")}>
                      {user.plan}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Quick Nav Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: "/analytics", icon: Activity, label: "Analytics", desc: "Deep-dive charts & trends", color: "from-[#6366F1] to-[#8B5CF6]" },
            { href: "/users", icon: Users, label: "Users", desc: "Manage user accounts", color: "from-[#8B5CF6] to-[#22D3EE]" },
            { href: "/revenue", icon: Star, label: "Revenue", desc: "MRR, ARR & churn data", color: "from-[#22D3EE] to-[#6366F1]" },
          ].map(({ href, icon: Icon, label, desc, color }) => (
            <Link
              key={href}
              href={href}
              className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className={["w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0", color].join(" ")}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#6366F1] transition-colors">{label}</p>
                <p className="text-xs text-slate-500">{desc}</p>
              </div>
              <ArrowUp className="w-4 h-4 text-slate-600 group-hover:text-[#6366F1] ml-auto rotate-45 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}