import Link from "next/link";
import Image from "next/image";
import { tools, steps } from "@/lib/microgreen-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panduan Microgreen — Sehati Binjai",
    description:
        "Panduan lengkap menanam microgreen di rumah menggunakan coco peat. Langkah demi langkah untuk memenuhi kebutuhan nutrisi keluarga.",
};

export default function MicrogreenPage() {
    return (
        <div className="pb-6">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="content-wrapper">
                    <div className="flex items-center justify-between px-5 py-4 md:px-0">
                        <div className="flex items-center gap-3">
                            <Link
                                href="/"
                                className="flex items-center justify-center p-2 rounded-full hover:bg-[#106140]/10 text-[#106140] transition-colors"
                            >
                                <span className="material-symbols-outlined">
                                    arrow_back_ios_new
                                </span>
                            </Link>
                            <h1 className="text-lg font-bold text-gray-900">
                                Panduan Microgreen
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                {/* Title Section */}
                <div className="px-6 mt-5 md:px-0 md:mt-0">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        Cara Menanam Microgreen
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed md:max-w-xl">
                        Tahukah kamu? Microgreen memiliki konsentrasi nutrisi hingga 40 kali lipat lebih tinggi dibandingkan sayuran dewasa, menjadikannya solusi pangan padat gizi yang efektif untuk mencegah stunting pada anak.
                    </p>
                </div>

                {/* Tools & Ingredients */}
                <div className="px-6 mt-6 md:px-0 md:mt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-5">
                        Alat dan Bahan
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white border border-gray-100 shadow-sm animate-fade-in-up"
                                style={{ animationDelay: `${index * 60}ms` }}
                            >
                                {tool.image ? (
                                    <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                                        <Image
                                            src={tool.image}
                                            alt={tool.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#106140]/10">
                                        <span className="material-symbols-outlined text-[#106140] text-[24px]">
                                            {tool.name === "Air" ? "water_drop" : "hardware"}
                                        </span>
                                    </div>
                                )}
                                <span className="text-[14px] font-medium text-gray-600 text-center leading-tight">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA SECTION: Purchase Tools & Seeds */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link 
                            href="https://shopee.co.id/Dunia-Jamur-Microgreen-Kit-Tanam-Sayuran-Mini-Souvenir-Edukasi-Anak-Gardening-Broccoli-Mustard-i.1010892380.40316545413?extraParams=%7B%22display_model_id%22%3A179086855931%2C%22model_selection_logic%22%3A2%7D&sp_atk=6909d145-94ad-453b-8f2a-1390389655f1&xptdk=6909d145-94ad-453b-8f2a-1390389655f1"
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-[#EE4D2D] hover:bg-[#d73211] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                            Dapatkan Alat Menanam Microgreen
                        </Link>
                        
                        <Link 
                            href="https://shopee.co.id/(-100-Gram-)-Benih-Biji-Lobak-Daun-Lalap-Radish-Microgreens-i.30340242.5339607150?extraParams=%7B%22display_model_id%22%3A21085624397%2C%22model_selection_logic%22%3A2%7D&sp_atk=912fefb5-a7b7-467b-9124-ccacade0dffb&xptdk=912fefb5-a7b7-467b-9124-ccacade0dffb"
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-white border-2 border-[#EE4D2D] text-[#EE4D2D] hover:bg-orange-50 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">potted_plant</span>
                            Pesan Benih Microgreen
                        </Link>
                    </div>
                </div>

                {/* Steps */}
                <div className="px-6 mt-12 md:px-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">
                        Langkah-Langkah
                    </h3>
                    <div className="relative">
                        <div className="flex flex-col gap-6">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative animate-fade-in-up"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#106140] text-white text-sm font-bold shadow-md z-10 mt-1">
                                            {step.number}
                                        </div>

                                        <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                            <h4 className="text-sm font-bold text-gray-900">
                                                {step.title}
                                            </h4>
                                            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                                {step.description}
                                            </p>

                                            {step.images.length > 0 && (
                                                <div
                                                    className={`mt-4 grid gap-2.5 ${step.images.length === 1
                                                        ? "grid-cols-1"
                                                        : step.images.length === 2
                                                            ? "grid-cols-2"
                                                            : "grid-cols-3"
                                                        }`}
                                                >
                                                    {step.images.map((img, imgIndex) => (
                                                        <div
                                                            key={imgIndex}
                                                            className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`${step.title} - foto ${imgIndex + 1}`}
                                                                fill
                                                                sizes="(max-width: 768px) 30vw, 200px"
                                                                className="object-cover"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {step.images.length === 0 && (
                                                <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-blue-50 p-3.5">
                                                    <span className="material-symbols-outlined text-blue-500 text-[20px]">
                                                        water_drop
                                                    </span>
                                                    <span className="text-xs font-medium text-blue-700">
                                                        Pengingat harian
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mx-6 mt-12 mb-8 md:mx-0 rounded-2xl bg-gradient-to-br from-[#106140] to-[#1a8a5a] p-6 md:p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
                            <span className="material-symbols-outlined text-white text-[22px]">
                                lightbulb
                            </span>
                        </div>
                        <div>
                            <p className="text-base font-bold text-white">Tips Ahli</p>
                            <p className="mt-2 text-sm text-white/80 leading-relaxed">
                                Letakkan di tempat yang terkena cahaya matahari tidak langsung
                                untuk warna daun yang lebih hijau pekat. Pastikan media tanam selalu
                                lembap namun tidak tergenang air.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}