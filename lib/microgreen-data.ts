export interface MicrogreenStep {
    number: number;
    title: string;
    description: string;
    images: string[]; // paths relative to /microgreen/
}

export interface MicrogreenTool {
    name: string;
    image?: string;
}

export const tools: MicrogreenTool[] = [
    { name: "Wadah Bening & Wadah Hitam", image: "/microgreen/wadah-bening-wadah-hitam.jpeg" },
    { name: "Coco Peat", image: "/microgreen/coco-peat.jpeg" },
    { name: "Benih", image: "/microgreen/benih.jpeg" },
    { name: "Spray", image: "/microgreen/spray.jpeg" },
    { name: "Air" },
    { name: "Paku Kecil" },
];

export const steps: MicrogreenStep[] = [
    {
        number: 1,
        title: "Buat Lubang Drainase",
        description: "Buat lubang kecil di wadah bening menggunakan paku kecil untuk mencegah air menggenang.",
        images: [
            "/microgreen/step-01-1.jpeg",
            "/microgreen/step-01-2.jpeg",
        ],
    },
    {
        number: 2,
        title: "Siapkan Media Tanam",
        description: "Letakkan coco peat di wadah bening sebagai media tanam.",
        images: ["/microgreen/step-02-1.jpeg", "/microgreen/step-02-2.jpeg"],
    },
    {
        number: 3,
        title: "Basahi Coco Peat",
        description: "Basahi coco peat dengan air menggunakan spray hingga lembap merata.",
        images: ["/microgreen/step-03-1.jpeg", "/microgreen/step-03-2.jpeg"],
    },
    {
        number: 4,
        title: "Taburkan Benih",
        description: "Taburkan benih secara merata di atas permukaan coco peat yang sudah dibasahi.",
        images: ["/microgreen/step-04.jpeg", "/microgreen/step-04-2.jpeg"],
    },
    {
        number: 5,
        title: "Susun Wadah",
        description: "Letakkan wadah hitam di atas wadah bening. Tambahkan pemberat (batu/air) di atas wadah hitam. Tujuan pemberat adalah supaya akar benih tumbuh ke bawah dan lebih kuat.",
        images: ["/microgreen/step-05.jpeg"],
    },
    {
        number: 6,
        title: "Simpan di Tempat Gelap",
        description:
            "Letakkan wadah di tempat gelap.",
        images: ["/microgreen/step-05.jpeg"],
    },
    {
        number: 7,
        title: "Spray Setiap Hari",
        description: "Jangan lupa di-spray setiap hari.",
        images: [],
    },
    {
        number: 8,
        title: "Hari Ke-2",
        description:
            "Kondisi benih hari ke-2. Basahi coco peat dengan spray, lalu letakkan kembali wadah hitam dan pemberat. Simpan di tempat yang gelap.",
        images: ["/microgreen/day-2.jpeg", "/microgreen/step-05.jpeg"],
    },
    {
        number: 9,
        title: "Hari Ke-3",
        description:
            "Pada hari ke-3, kecambah sudah mulai tumbuh. Pemberat sudah tidak dibutuhkan. Basahi coco peat dengan spray, lalu letakkan wadah hitam dalam kondisi dibalik. Simpan di tempat yang gelap.",
        images: ["/microgreen/day-3-2.jpeg", "/microgreen/day-3.jpeg", "/microgreen/day-3-3.jpeg"],
    },
    {
        number: 10,
        title: "Hari Ke-4",
        description:
            "Pada hari ke-4, sudah mulai muncul akar dan batang 3-4 cm. Pindahkan wadah ke tempat yang terang (disinari cahaya matahari tidak langsung).",
        images: ["/microgreen/day-4.jpeg", "/microgreen/day-4-2.jpeg"],
    },
    {
        number: 11,
        title: "Terus Spray Setiap Hari",
        description: "Jangan lupa di-spray setiap hari selama proses pertumbuhan.",
        images: [],
    },
    {
        number: 12,
        title: "Hari Ke-5",
        description:
            "Kondisi benih hari ke-5",
        images: ["/microgreen/day-5.jpeg", "/microgreen/day-5-2.jpeg"],
    },
    {
        number: 13,
        title: "Hari Ke-6",
        description:
            "Kondisi benih hari ke-6",
        images: ["/microgreen/day-6.jpeg", "/microgreen/day-6-2.jpeg"],
    },
    {
        number: 14,
        title: "Hari Ke-7",
        description:
            "Kondisi benih hari ke-7",
        images: ["/microgreen/day-7.jpeg"],
    },
    {
        number: 15,
        title: "Panen Microgreen",
        description:
            "Panen setelah 7–14 hari. Panen dengan cara menggunting batang di atas akar, jangan dicabut.",
        images: ["/microgreen/day-7-harvest.jpeg", "/microgreen/day-7-after-harvest.jpeg", "/microgreen/day-7-after-harvest-2.jpeg"],
    },
    {
        number: 16,
        title: "Bersihkan, Jemur, dan Gunakan Kembali",
        description:
            "Bersihkan coco peat dari akar-akar. Jemur di bawah sinar matahari selama 2 hari. Coco peat bisa digunakan kembali untuk penanaman berikutnya.",
        images: ["/microgreen/drying.jpeg"],
    },
];
