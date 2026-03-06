"use client";

import Link from "next/link";

export default function OfflinePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
            <div className="relative mb-8">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#106140]/10">
                    <span className="material-symbols-outlined text-6xl text-[#106140]/50">
                        cloud_off
                    </span>
                </div>
                <div className="absolute -right-1 -bottom-1 flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                    <span className="material-symbols-outlined text-amber-600 text-[20px]">
                        warning
                    </span>
                </div>
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900">
                Tidak Ada Koneksi
            </h1>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
                Gagal memuat halaman. Silakan periksa koneksi internet Anda dan coba
                lagi.
            </p>

            <div className="mt-8 flex flex-col gap-3 w-full max-w-sm">
                <button
                    onClick={() => typeof window !== "undefined" && window.location.reload()}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#106140] py-3.5 text-sm font-semibold text-white shadow-md press-effect"
                >
                    <span className="material-symbols-outlined text-[18px]">refresh</span>
                    Coba Lagi
                </button>
                <Link
                    href="/"
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 press-effect"
                >
                    <span className="material-symbols-outlined text-[18px]">home</span>
                    Kembali ke Beranda
                </Link>
            </div>

            <p className="mt-10 text-xs text-gray-300">
                Fitur Kalkulator Stunting dan Panduan Microgreen tetap tersedia offline.
            </p>
        </div>
    );
}
