"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { href: "/", label: "Beranda", icon: "home" },
    { href: "/microgreen", label: "Microgreen", icon: "eco" },
    { href: "/kalkulator", label: "Kalkulator", icon: "calculate" },
    { href: "/tentang", label: "Tentang Kami", icon: "group" },
];

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-gray-100 md:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
            <div className="flex items-stretch">
                {tabs.map((tab) => {
                    const active = isActive(tab.href);
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`relative flex flex-1 flex-col items-center justify-center gap-1 py-2.5 transition-colors duration-200 ${active
                                ? "text-[#106140]"
                                : "text-gray-400 hover:text-[#106140]/70"
                                }`}
                            style={{ minHeight: 68 }}
                        >
                            <span
                                className="material-symbols-outlined text-[24px]"
                                style={
                                    active
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : undefined
                                }
                            >
                                {tab.icon}
                            </span>
                            <span
                                className={`text-[11px] leading-tight ${active ? "font-semibold" : "font-medium"
                                    }`}
                            >
                                {tab.label}
                            </span>
                            {active && (
                                <div className="absolute top-0 w-12 h-[2.5px] rounded-b-full bg-[#106140]" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
