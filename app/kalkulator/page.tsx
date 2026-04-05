"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    calculateStuntingStatus,
    saveMeasurement,
    getMeasurements,
    type MeasurementRecord,
    type StuntingStatus,
    type CalculationResult,
} from "@/lib/calculator";

const statusColors: Record<StuntingStatus, string> = {
    "Pertumbuhan Optimal": "#16a34a",
    "Perlu Perhatian Ekstra": "#d97706",
    "Butuh Pendampingan Gizi": "#ea580c",
    "Prioritas Cek Tumbuh Kembang": "#dc2626",
};

const statusBgColors: Record<StuntingStatus, string> = {
    "Pertumbuhan Optimal": "#dcfce7",
    "Perlu Perhatian Ekstra": "#fef3c7",
    "Butuh Pendampingan Gizi": "#ffedd5",
    "Prioritas Cek Tumbuh Kembang": "#fee2e2",
};

const statusDotColors: Record<StuntingStatus, string> = {
    "Pertumbuhan Optimal": "#22c55e",
    "Perlu Perhatian Ekstra": "#f59e0b",
    "Butuh Pendampingan Gizi": "#f97316",
    "Prioritas Cek Tumbuh Kembang": "#ef4444",
};

export default function KalkulatorPage() {
    const [gender, setGender] = useState<"male" | "female">("male");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [records, setRecords] = useState<MeasurementRecord[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [ageError, setAgeError] = useState("");

    useEffect(() => {
        setRecords(getMeasurements());
    }, []);

    const handleCalculate = () => {
        const ageNum = parseInt(age);
        const heightNum = parseFloat(height);

        if (isNaN(ageNum) || ageNum < 0 || ageNum > 60) {
            setAgeError("Usia harus antara 0–60 bulan");
            return;
        }
        setAgeError("");

        if (isNaN(heightNum) || heightNum <= 0) return;

        const calcResult = calculateStuntingStatus(gender, ageNum, heightNum);
        setResult(calcResult);

        const today = new Date().toISOString().split("T")[0];
        const record: MeasurementRecord = {
            date: today,
            ageMonths: ageNum,
            heightCm: heightNum,
            gender,
            status: calcResult.status,
        };
        saveMeasurement(record);
        setRecords(getMeasurements());
    };

    const displayedRecords = showAll ? records : records.slice(0, 3);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

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
                        <h1 className="text-lg font-bold text-gray-900">
                            Cek Tumbuh Kembang Anak
                        </h1>
                    </div>
                </div>
            </div>

            <div className="content-wrapper !mt-0 !pt-0">
                {/* Desktop: two-column layout using flex */}
                <div className="md:flex md:gap-8 md:items-start !mt-0 !pt-0">
                    {/* Left column: Form + Result + Tips */}
                    <div className="md:flex-1 md:min-w-0 !mt-0 !pt-0">
                        {/* Calculator Form */}
                        <div className="mx-5 mt-0 md:mx-0 md:mt-0 rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#106140]/10">
                                    <span className="material-symbols-outlined text-[#106140] text-[20px]">
                                        child_care
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-base font-bold text-gray-900">
                                        Data Pertumbuhan Anak
                                    </h2>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Masukkan umur dan tinggi badan terbaru si Kecil untuk memantau pertumbuhannya.
                                    </p>
                                </div>
                            </div>

                            {/* Gender Toggle */}
                            <div className="mt-6">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Jenis Kelamin
                                </label>
                                <div className="mt-2.5 flex flex-col sm:flex-row gap-1 sm:gap-0 rounded-xl bg-gray-100 p-1.5">
                                    <button
                                        onClick={() => setGender("male")}
                                        className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-all ${gender === "male"
                                            ? "bg-[#106140] text-white shadow-sm"
                                            : "text-gray-500"
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-[18px]">male</span>
                                        Laki-laki
                                    </button>
                                    <button
                                        onClick={() => setGender("female")}
                                        className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-all ${gender === "female"
                                            ? "bg-[#106140] text-white shadow-sm"
                                            : "text-gray-500"
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-[18px]">female</span>
                                        Perempuan
                                    </button>
                                </div>
                            </div>

                            {/* Age and Height Inputs */}
                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Usia (Bulan)
                                    </label>
                                    <p className="text-xs text-gray-400 mt-0.5">Misal: Jika berusia 1 tahun, ketik 12</p>
                                    <div className="flex items-center mt-2.5 rounded-xl border overflow-hidden pr-3 h-12 bg-gray-50 focus-within:ring-2 focus-within:ring-[#106140]/30 focus-within:border-[#106140] border-gray-200 has-[input.error]:border-red-400 has-[input.error]:bg-red-50">
                                        <input
                                            type="number"
                                            min="0"
                                            max="60"
                                            value={age}
                                            onChange={(e) => {
                                                setAge(e.target.value);
                                                setAgeError("");
                                            }}
                                            // Prevent ArrowUp and ArrowDown keys
                                            onKeyDown={(e) => {
                                                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                                    e.preventDefault();
                                                }
                                            }}
                                            placeholder="0 – 60"
                                            className={`flex-1 h-full bg-transparent px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none ${ageError ? "error" : ""}`}
                                        />
                                        <span className="text-xs text-gray-400 shrink-0">Bulan</span>
                                    </div>
                                    {ageError && (
                                        <p className="mt-1.5 text-xs text-red-500">{ageError}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 tracking-wider">
                                        TINGGI BADAN (cm)
                                    </label>
                                    <p className="text-xs text-gray-400 mt-0.5">Dalam satuan sentimeter</p>
                                    <div className="flex items-center mt-2.5 rounded-xl border h-12 bg-gray-50 border-gray-200 focus-within:ring-2 focus-within:ring-[#106140]/30 focus-within:border-[#106140]">
                                        <input
                                            type="number"
                                            step="0.1"
                                            min="0"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            // Prevent ArrowUp and ArrowDown keys
                                            onKeyDown={(e) => {
                                                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                                    e.preventDefault();
                                                }
                                            }}
                                            placeholder="Contoh: 75,5"
                                            className="flex-1 min-w-0 h-full bg-transparent pl-4 pr-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                                        />
                                        <span className="text-xs text-gray-400 shrink-0 pr-3">cm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleCalculate}
                                disabled={!age || !height}
                                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-[#106140] px-6 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0a4a30] disabled:opacity-40 disabled:cursor-not-allowed press-effect"
                            >
                                <span className="material-symbols-outlined text-[18px] leading-none">
                                    calculate
                                </span>
                                <span>Lihat Hasilnya</span>
                            </button>
                        </div>

                        {/* Result Card */}
                        {result && (
                            <div className="mx-5 mt-5 md:mx-0 rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100 animate-fade-in-up">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                            Hasil Analisis
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 mt-1">
                                            Status: {result.status}
                                        </h3>
                                    </div>
                                    <span
                                        className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold"
                                        style={{
                                            backgroundColor: statusBgColors[result.status],
                                            color: statusColors[result.status],
                                        }}
                                    >
                                        {result.status === "Pertumbuhan Optimal"
                                            ? "Sehat"
                                            : result.status === "Perlu Perhatian Ekstra"
                                                ? "Perhatian"
                                                : result.status === "Butuh Pendampingan Gizi"
                                                    ? "Waspada"
                                                    : "Penting"}
                                    </span>
                                </div>
                                <div
                                    className="mt-5 rounded-xl p-5"
                                    style={{
                                        backgroundColor: statusBgColors[result.status] + "80",
                                    }}
                                >
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Tips Pengukuran */}
                        <div className="mx-5 mt-5 md:mx-0 rounded-2xl bg-amber-50 border border-amber-100 p-5 md:p-6">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                                    <span className="material-symbols-outlined text-amber-600 text-[20px]">
                                        lightbulb
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-amber-900">Tips Pengukuran</p>
                                    <p className="mt-1.5 text-sm text-amber-800/80 leading-relaxed">
                                        Untuk anak yang umurnya di bawah 2 tahun, ukur panjang badannya dengan cara ditidurkan lurus (berbaring telentang) ya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column: History */}
                    <div className="md:w-[380px] md:shrink-0">
                        <div className="px-5 mt-8 md:px-0 md:mt-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-gray-400 text-[20px]">history</span>
                                    <h3 className="text-base font-bold text-gray-900">
                                        Catatan Tumbuh Kembang
                                    </h3>
                                </div>
                                {records.length > 3 && (
                                    <button
                                        onClick={() => setShowAll(!showAll)}
                                        className="text-sm font-semibold text-[#106140] hover:underline"
                                    >
                                        {showAll ? "Sembunyikan" : "Lihat Semua"}
                                    </button>
                                )}
                            </div>

                            {records.length === 0 ? (
                                <div className="mt-4 flex flex-col items-center py-12 text-center rounded-2xl bg-white border border-gray-100">
                                    <span className="material-symbols-outlined text-5xl text-gray-200">
                                        monitoring
                                    </span>
                                    <p className="mt-3 text-sm font-medium text-gray-400">
                                        Belum ada catatan
                                    </p>
                                    <p className="text-xs text-gray-300 mt-1.5 max-w-[200px] leading-relaxed">
                                        Yuk, masukkan usia dan tinggi badan si Kecil sekarang untuk mulai memantau pertumbuhannya!
                                    </p>
                                </div>
                            ) : (
                                <div className="mt-4 flex flex-col gap-3">
                                    {displayedRecords.map((record, index) => (
                                        <div
                                            key={`${record.date}-${index}`}
                                            className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-gray-100 animate-fade-in-up"
                                            style={{ animationDelay: `${index * 60}ms` }}
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100">
                                                <span className="material-symbols-outlined text-gray-400 text-[20px]">
                                                    {record.gender === "male" ? "boy" : "girl"}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-gray-900">
                                                    {record.ageMonths} Bulan • {record.heightCm} cm
                                                </p>
                                                <div className="flex items-center gap-1.5 mt-1">
                                                    <span
                                                        className="h-2 w-2 rounded-full"
                                                        style={{
                                                            backgroundColor: statusDotColors[record.status],
                                                        }}
                                                    />
                                                    <span className="text-xs text-gray-500">
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-400 shrink-0">
                                                {formatDate(record.date)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
