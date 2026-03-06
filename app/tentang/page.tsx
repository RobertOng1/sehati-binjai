import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami — Sehati Binjai",
    description:
        "Sehati Binjai adalah platform kesehatan digital yang berfokus pada pencegahan stunting melalui edukasi gizi dan pemberdayaan masyarakat.",
};

export default function TentangPage() {
    return (
        <div className="pb-6">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="content-wrapper">
                    <div className="flex items-center gap-3 px-5 py-4 md:px-0">
                        <Link
                            href="/"
                            className="flex items-center justify-center p-2 rounded-full hover:bg-[#106140]/10 text-[#106140] transition-colors"
                        >
                            <span className="material-symbols-outlined">
                                arrow_back_ios_new
                            </span>
                        </Link>
                        <h1 className="text-lg font-bold text-gray-900">Tentang Kami</h1>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                {/* Hero Image */}
                <div className="relative h-56 md:h-80 w-full bg-gradient-to-b from-[#106140]/20 to-[#106140]/5 md:rounded-2xl md:overflow-hidden">
                    <Image
                        src="/team-logo-rm-bg.png"
                        alt="Tim Lead Others 2024"
                        fill
                        className="object-contain p-8 md:p-12"
                    />
                </div>

                {/* Content */}
                <div className="px-5 -mt-4 relative z-1 md:px-0 md:-mt-6">
                    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#106140]">
                            Change Initiative
                        </span>
                        <h2 className="mt-2 text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                            Tim Lead Others 2024
                            <br />
                            ZeroStunt
                        </h2>

                        {/* Divider */}
                        <div className="my-5 h-px bg-[#106140]/10" />

                        {/* Partners */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#106140]/10">
                                    <Image
                                        src="/tanoto-logo-white-bg.png"
                                        alt="Tanoto Foundation Logo"
                                        width={52}
                                        height={52}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        Tanoto Foundation
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Mitra Pengembangan Program
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#106140]/10">
                                    <Image
                                        src="/dinkes-logo-rm-bg.png"
                                        alt="Dinas Kesehatan Kota Binjai Logo"
                                        width={35}
                                        height={35}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        Dinas Kesehatan Kota Binjai
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Mitra Implementasi Program
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-5 h-px bg-[#106140]/10" />

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Sehati Binjai (Sehat Ibu dan Anak Terintegrasi melalui Aplikasi dan Microgreen) 
                            adalah sebuah inisiatif perubahan di bidang kesehatan (SDG 3) yang berfokus pada
                            pencegahan stunting melalui edukasi gizi dan pengenalan metode budidaya microgreen. 
                        </p>

                        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                            Aplikasi ini dikembangkan sebagai bagian dari program Lead Others
                            2024 oleh ZeroStunt — Tanoto Foundation, bekerja sama dengan Dinas
                            Kesehatan Kota Binjai untuk menyediakan akses informasi kesehatan
                            yang mudah dan terjangkau bagi seluruh masyarakat Kota Binjai.
                        </p>
                    </div>

                    {/* App Info */}
                    <div className="mt-5 rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/app-logo-192-px.png"
                                alt="Sehati Binjai Logo"
                                width={52}
                                height={52}
                                className="rounded-xl"
                            />
                            <div>
                                <p className="text-base font-bold text-gray-900">Sehati Binjai</p>
                                <p className="text-sm text-gray-500 mt-0.5">Versi 1.0.0</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                            <span className="material-symbols-outlined text-[16px]">
                                favorite
                            </span>
                            <span>Dibuat dengan cinta untuk masyarakat Kota Binjai</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
