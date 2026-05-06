"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Layout, Activity, Users, Star, Settings, ChevronRight, Sparkles, Menu, X } from 'lucide-react';

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Layout },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/users", label: "Users", icon: Users },
  { href: "/revenue", label: "Revenue", icon: Star },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    if (stored) setCollapsed(stored === "true");
  }, []);

  const toggleCollapsed = () => {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem("sidebar-collapsed", String(next));
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div
        className={[
          "flex items-center gap-3 px-4 py-5 border-b border-[rgba(99,102,241,0.15)]",
          collapsed ? "justify-center" : "",
        ].join(" ")}
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <div>
            <span className="text-white font-bold text-lg leading-none">Pulse</span>
            <span className="text-[#6366F1] font-bold text-lg leading-none">AI</span>
            <p className="text-[10px] text-slate-500 mt-0.5">Analytics Platform</p>
          </div>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {!collapsed && (
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-3 mb-3">
            Main Menu
          </p>
        )}
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              onClick={onMobileClose}
              className={[
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                isActive
                  ? "bg-gradient-to-r from-[rgba(99,102,241,0.2)] to-[rgba(139,92,246,0.1)] text-white border border-[rgba(99,102,241,0.3)]"
                  : "text-slate-400 hover:text-white hover:bg-[rgba(99,102,241,0.08)]",
                collapsed ? "justify-center" : "",
              ].join(" ")}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#6366F1] rounded-r-full" />
              )}
              <Icon
                size={18}
                className={isActive ? "text-[#6366F1] flex-shrink-0" : "text-slate-500 group-hover:text-slate-300 flex-shrink-0"}
              />
              {!collapsed && <span>{label}</span>}
              {!collapsed && isActive && (
                <ChevronRight className="w-3.5 h-3.5 ml-auto text-[#6366F1]" />
              )}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-[#1E1E2E] border border-[rgba(99,102,241,0.2)] rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                  {label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-[rgba(99,102,241,0.15)]">
        {!collapsed && (
          <div className="bg-[rgba(30,30,46,0.7)] border border-[rgba(99,102,241,0.15)] rounded-xl p-3 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span className="text-xs text-slate-400">All systems operational</span>
            </div>
            <div className="text-xs text-slate-500">v2.4.1 · Jan 2024</div>
          </div>
        )}
        <button
          onClick={toggleCollapsed}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:text-white hover:bg-[rgba(99,102,241,0.08)] transition-all text-sm"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className={[
          "hidden lg:flex flex-col h-screen sticky top-0 bg-[#0F0F1A] border-r border-[rgba(99,102,241,0.12)] sidebar-transition flex-shrink-0",
          collapsed ? "w-16" : "w-60",
        ].join(" ")}
      >
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          <aside className="relative w-64 h-full bg-[#0F0F1A] border-r border-[rgba(99,102,241,0.15)] flex flex-col z-10">
            <button
              onClick={onMobileClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[rgba(99,102,241,0.1)]"
            >
              <X className="w-4 h-4" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
