"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getCategoryBySlug } from "@/lib/content-data";

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const category = getCategoryBySlug(slug);
    const [search, setSearch] = useState("");

    if (!category) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">
                    search_off
                </span>
                <h2 className="text-lg font-bold text-gray-800">Kategori Tidak Ditemukan</h2>
                <p className="text-sm text-gray-500 mt-2">
                    Kategori yang Anda cari tidak tersedia.
                </p>
                <Link
                    href="/"
                    className="mt-5 rounded-xl bg-[#106140] px-6 py-3 text-sm font-semibold text-white press-effect"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        );
    }

    const filteredArticles = category.articles.filter(
        (a) =>
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.summary.toLowerCase().includes(search.toLowerCase())
    );

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
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </Link>
                        <h1 className="text-lg font-bold text-gray-900">{category.name}</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="px-5 pb-4 md:px-0">
                        <div className="relative">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari artikel edukasi..."
                                className="w-full h-12 rounded-xl bg-[#106140]/5 border-none !px-4 text-sm placeholder:text-[#106140]/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#106140]/30"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Article List */}
            <div className="content-wrapper">
                <div className="flex flex-col gap-4 p-5 md:grid md:grid-cols-2 md:gap-5 md:px-0 md:py-6">
                    {filteredArticles.length === 0 ? (
                        <div className="flex flex-col items-center py-16 text-center md:col-span-2">
                            <span className="material-symbols-outlined text-5xl text-gray-300">
                                article
                            </span>
                            <p className="text-sm text-gray-500 mt-3">
                                Tidak ada artikel yang cocok.
                            </p>
                        </div>
                    ) : (
                        filteredArticles.map((article, index) => (
                            <a
                                key={article.id}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-5 bg-white rounded-2xl hover:bg-[#106140]/5 transition-colors text-left animate-fade-in-up border border-gray-100 shadow-sm"
                                style={{ animationDelay: `${index * 60}ms` }}
                            >
                                <div className="shrink-0">
                                    <div className="relative h-28 w-28 rounded-xl overflow-hidden bg-gray-100">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            sizes="112px"
                                            className="object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 justify-between min-h-[112px]">
                                    <div>
                                        <p className="text-sm font-bold leading-snug text-gray-900 line-clamp-2">
                                            {article.title}
                                        </p>
                                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-2">
                                            {article.summary}
                                        </p>
                                    </div>
                                    <div className="mt-3 flex items-center gap-1.5 text-[#106140] text-xs font-semibold">
                                        <span>Baca Selengkapnya</span>
                                        <span className="material-symbols-outlined text-[14px]">
                                            open_in_new
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
