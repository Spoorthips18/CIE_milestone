
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transactions", href: "/transactions" },
  { name: "Payments", href: "/payments" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-xl font-bold text-blue-600"
        >
          CashFlow
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
