import { BOYS_LFA, GIRLS_LFA, type ZScoreEntry } from "./who-zscore-data";

export type StuntingStatus = "Pertumbuhan Optimal" | "Perlu Perhatian Ekstra" | "Butuh Pendampingan Gizi" | "Prioritas Cek Tumbuh Kembang";

export interface CalculationResult {
    status: StuntingStatus;
    description: string;
    badgeClass: string;
}

const STATUS_INFO: Record<StuntingStatus, { description: string; badgeClass: string }> = {
    "Pertumbuhan Optimal": {
        description:
            "Tumbuh kembang si Kecil saat ini terpantau baik. Pertahankan asupan gizi seimbangnya ya, Ayah & Bunda. Jangan lupa untuk terus rutin berkunjung ke Posyandu setiap bulan agar pertumbuhannya selalu terpantau optimal.",
        badgeClass: "badge-normal",
    },
    "Perlu Perhatian Ekstra": {
        description:
            "Pertumbuhan si Kecil saat ini butuh sedikit perhatian ekstra agar bisa mengejar tinggi idealnya. Yuk, Ayah & Bunda, kita perbaiki asupan nutrisinya dan jadwalkan kunjungan ke Posyandu untuk berkonsultasi langsung dengan ahlinya.",
        badgeClass: "badge-risk",
    },
    "Butuh Pendampingan Gizi": {
        description:
            "Tinggi badan si Kecil saat ini tampak belum mencapai potensi maksimal untuk usianya. Jangan berkecil hati, mari Ayah & Bunda segera kunjungi Posyandu atau puskesmas terdekat agar tenaga kesehatan bisa mendampingi dan memberikan solusi nutrisi yang tepat.",
        badgeClass: "badge-stunting",
    },
    "Prioritas Cek Tumbuh Kembang": {
        description:
            "Pertumbuhan si Kecil saat ini sangat membutuhkan pendampingan khusus agar ia bisa tumbuh sehat. Ayah & Bunda, yuk segera bawa si Kecil ke Posyandu atau puskesmas terdekat. Pemeriksaan ini sangat penting agar si Kecil segera mendapat penanganan gizi yang menyeluruh.",
        badgeClass: "badge-severe",
    }
};

/**
 * Calculate the stunting status based on gender, age (months), and height (cm).
 * Uses WHO Length/Height-for-Age Z-Score reference data.
 */
export function calculateStuntingStatus(
    gender: "male" | "female",
    ageMonths: number,
    heightCm: number
): CalculationResult {
    const table = gender === "male" ? BOYS_LFA : GIRLS_LFA;

    // Find the exact month entry
    const entry = table.find((e) => e.month === Math.round(ageMonths));

    if (!entry) {
        // Fallback: use closest month
        const closest = table.reduce((prev, curr) =>
            Math.abs(curr.month - ageMonths) < Math.abs(prev.month - ageMonths) ? curr : prev
        );
        return classifyHeight(closest, heightCm);
    }

    return classifyHeight(entry, heightCm);
}

function classifyHeight(entry: ZScoreEntry, heightCm: number): CalculationResult {
    let status: StuntingStatus;

    if (heightCm < entry.SD_neg3) {
        status = "Prioritas Cek Tumbuh Kembang";
    } else if (heightCm < entry.SD_neg2) {
        status = "Butuh Pendampingan Gizi";
    } else if (heightCm < entry.SD_neg1) {
        status = "Perlu Perhatian Ekstra";
    } else {
        status = "Pertumbuhan Optimal";
    }

    return {
        status,
        ...STATUS_INFO[status],
    };
}

// Local storage types and helpers
export interface MeasurementRecord {
    date: string; // ISO date string (YYYY-MM-DD)
    ageMonths: number;
    heightCm: number;
    gender: "male" | "female";
    status: StuntingStatus;
}

const STORAGE_KEY = "sehati-measurements";

export function saveMeasurement(record: MeasurementRecord): void {
    const records = getMeasurements();
    const today = record.date;

    // Overwrite logic: only one entry per day
    const filtered = records.filter((r) => r.date !== today);
    filtered.push(record);

    // Sort by date descending
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
}

export function getMeasurements(): MeasurementRecord[] {
    if (typeof window === "undefined") return [];

    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];
        return JSON.parse(data) as MeasurementRecord[];
    } catch {
        return [];
    }
}
