"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [isInstalled, setIsInstalled] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if already installed (standalone mode)
        if (
            window.matchMedia("(display-mode: standalone)").matches ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window.navigator as any).standalone
        ) {
            setIsInstalled(true);
            return;
        }

        // Check if previously dismissed
        const dismissed = localStorage.getItem("sehati-install-dismissed");
        if (dismissed) {
            setIsDismissed(true);
        }

        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };

        window.addEventListener("beforeinstallprompt", handler);

        // Listen for app installed
        window.addEventListener("appinstalled", () => {
            setIsInstalled(true);
            setDeferredPrompt(null);
        });

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            setIsInstalled(true);
        }
        setDeferredPrompt(null);
    };

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem("sehati-install-dismissed", "true");
    };

    // Don't show if installed, dismissed, or no prompt available
    if (isInstalled || isDismissed || !deferredPrompt) return null;

    return (
        <div className="animate-slide-up fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-[448px] md:bottom-6 md:left-auto md:right-6 md:max-w-[360px]">
            <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#106140]/10">
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#106140]/10">
                        <span className="material-symbols-outlined text-[#106140]">
                            install_mobile
                        </span>
                    </div>
                    <div className="flex-1">
                        <p className="!pt-0 !mt-0 text-sm font-semibold text-gray-900">
                            Tambah ke Layar Beranda
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                            Akses Sehati Binjai lebih cepat langsung dari layar beranda Anda.
                        </p>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="shrink-0 p-1 text-gray-400 hover:text-gray-600"
                        aria-label="Tutup"
                    >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                </div>
                <button
                    onClick={handleInstall}
                    className="mt-3 w-full rounded-xl bg-[#106140] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0a4a30] press-effect"
                >
                    Pasang Sekarang
                </button>
            </div>
        </div>
    );
}
