"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const tabs = [
    { href: "/", label: "Beranda", icon: "home" },
    { href: "/microgreen", label: "Microgreen", icon: "eco" },
    { href: "/kalkulator", label: "Kalkulator", icon: "calculate" },
    { href: "/tentang", label: "Tentang Kami", icon: "group" },
];

export default function SideNav() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-[var(--sidebar-width)] flex-col bg-white border-r border-gray-100 shadow-sm">
            {/* Logo */}
            <div className="flex items-center gap-3.5 px-6 py-7 border-b border-gray-50">
                <Image
                    src="/app-logo-192-px.png"
                    alt="Sehati Binjai"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <p className="text-[15px] font-bold text-gray-900 leading-tight">
                        Sehati Binjai
                    </p>
                </div>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col gap-1.5 p-4 flex-1">
                {tabs.map((tab) => {
                    const active = isActive(tab.href);
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 ${active
                                ? "bg-[#106140]/10 text-[#106140] font-semibold"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                }`}
                        >
                            <span
                                className="material-symbols-outlined text-[22px]"
                                style={
                                    active
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : undefined
                                }
                            >
                                {tab.icon}
                            </span>
                            <span className="text-[14px]">{tab.label}</span>
                            {active && (
                                <div className="absolute left-0 w-[3px] h-8 rounded-r-full bg-[#106140]" />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-gray-50">
                <p className="text-[10px] text-gray-400 leading-relaxed">
                    © 2026 Sehati Binjai
                    <br />
                    Lead Others — Tanoto Foundation
                </p>
            </div>
        </nav>
    );
}
