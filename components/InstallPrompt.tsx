"use client";

import { useState, useEffect, useRef } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [isInstalled, setIsInstalled] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    const [dragStyle, setDragStyle] = useState<React.CSSProperties | null>(null);
    const promptRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });

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

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.closest("button")) return;

        (e.target as Element).setPointerCapture(e.pointerId);
        dragRef.current.isDragging = true;

        if (promptRef.current) {
            const rect = promptRef.current.getBoundingClientRect();
            dragRef.current.startX = e.clientX - rect.left;
            dragRef.current.startY = e.clientY - rect.top;

            if (!dragStyle) {
                setDragStyle({
                    left: `${rect.left}px`,
                    top: `${rect.top}px`,
                    width: `${rect.width}px`,
                    margin: 0,
                    bottom: "auto",
                    right: "auto",
                });
            }
        }
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragRef.current.isDragging) return;

        let newX = e.clientX - dragRef.current.startX;
        let newY = e.clientY - dragRef.current.startY;

        if (promptRef.current) {
            const rect = promptRef.current.getBoundingClientRect();
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;
            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));
        }

        setDragStyle((prev) => ({
            ...prev,
            left: `${newX}px`,
            top: `${newY}px`,
        }));
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        dragRef.current.isDragging = false;
        try {
            (e.target as Element).releasePointerCapture(e.pointerId);
        } catch (err) {
            // Ignore if pointer is already released
        }
    };

    // Don't show if installed, dismissed, or no prompt available
    if (isInstalled || isDismissed || !deferredPrompt) return null;

    return (
        <div
            ref={promptRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`fixed z-40 touch-none cursor-grab active:cursor-grabbing ${dragStyle ? "" : "animate-slide-up bottom-20 left-4 right-4 mx-auto max-w-[448px] md:bottom-6 md:left-auto md:right-6 md:max-w-[360px]"
                }`}
            style={dragStyle || {}}
        >
            <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#106140]/10 h-full w-full">
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
