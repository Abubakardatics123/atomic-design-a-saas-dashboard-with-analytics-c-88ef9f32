"use client";

import { useState } from "react";
import { Bell, Search, Menu, X, Check } from 'lucide-react';
import { notificationsData } from "@/lib/mock-data";

interface TopbarProps {
  onMobileMenuToggle?: () => void;
  title?: string;
}

export default function Topbar({ onMobileMenuToggle, title }: TopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const typeColors: Record<string, string> = {
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
    info: "bg-[#6366F1]",
  };

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-4 md:px-6 h-16 bg-[rgba(15,15,26,0.85)] backdrop-blur-xl border-b border-[rgba(99,102,241,0.12)]">
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[rgba(99,102,241,0.1)] transition-all"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        {title && (
          <h1 className="text-lg font-semibold text-white hidden sm:block">{title}</h1>
        )}
      </div>

      <div className="flex-1 max-w-sm mx-4 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search metrics, users..."
            className="w-full bg-[rgba(30,30,46,0.6)] border border-[rgba(99,102,241,0.15)] rounded-xl pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[rgba(99,102,241,0.4)] focus:bg-[rgba(30,30,46,0.9)] transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[rgba(99,102,241,0.1)] transition-all"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#6366F1] rounded-full ring-2 ring-[#0F0F1A]" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-[#1E1E2E] border border-[rgba(99,102,241,0.2)] rounded-2xl shadow-2xl overflow-hidden z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(99,102,241,0.12)]">
                <div>
                  <h3 className="text-sm font-semibold text-white">Notifications</h3>
                  {unreadCount > 0 && (
                    <p className="text-xs text-slate-500">{unreadCount} unread</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-xs text-[#6366F1] hover:text-[#8B5CF6] transition-colors flex items-center gap-1"
                    >
                      <Check className="w-3 h-3" />
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 rounded-lg text-slate-500 hover:text-white hover:bg-[rgba(99,102,241,0.1)]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={[
                      "flex gap-3 px-4 py-3 border-b border-[rgba(99,102,241,0.08)] hover:bg-[rgba(99,102,241,0.05)] transition-colors",
                      !n.read ? "bg-[rgba(99,102,241,0.04)]" : "",
                    ].join(" ")}
                  >
                    <div className={["w-2 h-2 rounded-full mt-1.5 flex-shrink-0", typeColors[n.type] || "bg-slate-500"].join(" ")} />
                    <div className="flex-1 min-w-0">
                      <p className={["text-xs font-medium", n.read ? "text-slate-400" : "text-white"].join(" ")}>
                        {n.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">{n.message}</p>
                      <p className="text-[10px] text-slate-600 mt-1">{n.time}</p>
                    </div>
                    {!n.read && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-[rgba(99,102,241,0.15)]">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white leading-none">Jane Doe</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
