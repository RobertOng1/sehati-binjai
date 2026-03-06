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
    Normal: "#16a34a",
    "Berisiko Stunting": "#d97706",
    Stunting: "#ea580c",
    "Stunting Parah": "#dc2626",
};

const statusBgColors: Record<StuntingStatus, string> = {
    Normal: "#dcfce7",
    "Berisiko Stunting": "#fef3c7",
    Stunting: "#ffedd5",
    "Stunting Parah": "#fee2e2",
};

const statusDotColors: Record<StuntingStatus, string> = {
    Normal: "#22c55e",
    "Berisiko Stunting": "#f59e0b",
    Stunting: "#f97316",
    "Stunting Parah": "#ef4444",
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
                            Kalkulator Stunting
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
                                        Masukkan data terbaru untuk memantau status gizi buah hati Anda.
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
                                    <div className="relative mt-2.5">
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
                                            className={`w-full h-12 rounded-xl border ${ageError
                                                ? "border-red-400 bg-red-50"
                                                : "border-gray-200 bg-gray-50"
                                                } px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#106140]/30 focus:border-[#106140]`}
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">Bulan</span>
                                    </div>
                                    {ageError && (
                                        <p className="mt-1.5 text-xs text-red-500">{ageError}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 tracking-wider">
                                        TINGGI BADAN (cm)
                                    </label>
                                    <div className="relative mt-2.5">
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
                                            placeholder="Contoh: 75.5"
                                            className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#106140]/30 focus:border-[#106140]"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">cm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleCalculate}
                                disabled={!age || !height}
                                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-[#106140] py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0a4a30] disabled:opacity-40 disabled:cursor-not-allowed press-effect"
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    calculate
                                </span>
                                Hitung Status Gizi
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
                                        {result.status === "Normal"
                                            ? "Sehat"
                                            : result.status === "Berisiko Stunting"
                                                ? "Perhatian"
                                                : result.status === "Stunting"
                                                    ? "Waspada"
                                                    : "Bahaya"}
                                    </span>
                                </div>
                                <div
                                    className="mt-4 rounded-xl p-4"
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
                                        Bagi anak berusia di bawah 2 tahun, posisikan anak berbaring terlentang sebelum mengambil pengukuran.
                                        <br />Bagi anak berusia di atas 2 tahun, pastikan anak diukur tanpa alas kaki dan berdiri tegak
                                        menempel pada alat ukur untuk hasil yang lebih akurat.
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
                                        Riwayat Pengukuran
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
                                        Belum ada riwayat
                                    </p>
                                    <p className="text-xs text-gray-300 mt-1.5 max-w-[200px] leading-relaxed">
                                        Mulai hitung status gizi anak Anda untuk melihat riwayat pertumbuhan di sini.
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
