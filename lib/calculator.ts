import { BOYS_LFA, GIRLS_LFA, type ZScoreEntry } from "./who-zscore-data";

export type StuntingStatus = "Normal" | "Berisiko Stunting" | "Stunting" | "Stunting Parah";

export interface CalculationResult {
    status: StuntingStatus;
    description: string;
    badgeClass: string;
}

const STATUS_INFO: Record<StuntingStatus, { description: string; badgeClass: string }> = {
    Normal: {
        description:
            "Tinggi badan anak Anda sesuai dengan standar WHO untuk usianya. Tetap jaga pola makan bergizi dan pantau pertumbuhannya secara rutin.",
        badgeClass: "badge-normal",
    },
    "Berisiko Stunting": {
        description:
            "Tinggi badan anak Anda mendekati batas bawah standar WHO. Perhatikan asupan gizi dan konsultasikan ke tenaga kesehatan untuk pemantauan lebih lanjut.",
        badgeClass: "badge-risk",
    },
    Stunting: {
        description:
            "Tinggi badan anak Anda berada di bawah standar WHO. Segera konsultasikan ke dokter atau bidan untuk mendapatkan penanganan gizi yang tepat.",
        badgeClass: "badge-stunting",
    },
    "Stunting Parah": {
        description:
            "Tinggi badan anak Anda jauh di bawah standar WHO. Kondisi ini memerlukan penanganan medis segera. Hubungi puskesmas atau rumah sakit terdekat.",
        badgeClass: "badge-severe",
    },
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
        status = "Stunting Parah";
    } else if (heightCm < entry.SD_neg2) {
        status = "Stunting";
    } else if (heightCm < entry.SD_neg1) {
        status = "Berisiko Stunting";
    } else {
        status = "Normal";
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
