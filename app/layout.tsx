import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseAI — SaaS Analytics Dashboard",
  description: "Modern analytics dashboard for SaaS businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0F0F1A] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
