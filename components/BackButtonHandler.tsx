"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BackButtonHandler() {
    const pathname = usePathname();
    const [showExitToast, setShowExitToast] = useState(false);

    useEffect(() => {
        // Push a dummy state so we can intercept the first back press.
        // Doing this whenever the pathname changes ensures that Next.js doesn't
        // trigger an actual route change when the user presses back (because the
        // URL remains the same when the dummy state is popped).
        window.history.pushState({ dummy: true }, "", window.location.href);
    }, [pathname]);

    useEffect(() => {
        let lastBackPressTime = 0;

        const handlePopState = () => {
            const currentTime = Date.now();
            if (currentTime - lastBackPressTime < 2000) {
                // If double tapped within 2 seconds, exit the app
                window.close();
            } else {
                // First tap: show toast and push the dummy state back into history
                lastBackPressTime = currentTime;
                setShowExitToast(true);
                setTimeout(() => setShowExitToast(false), 2000);

                // We must push the state again so the next back press is intercepted too.
                window.history.pushState({ dummy: true }, "", window.location.href);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    if (!showExitToast) return null;

    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-4 py-2 rounded-full text-sm font-medium z-[9999] animate-fade-in-up shadow-lg whitespace-nowrap">
            Tekan sekali lagi untuk keluar
        </div>
    );
}
