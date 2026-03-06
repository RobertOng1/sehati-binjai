export interface Article {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
}

export interface Category {
    slug: string;
    name: string;
    icon: string; // Material Symbols icon name
    articles: Article[];
}

export const categories: Category[] = [
    {
        slug: "ibu-hamil",
        name: "Ibu Hamil",
        icon: "pregnant_woman",
        articles: [
            {
                id: "ih-1",
                title: "Anemia Ibu Hamil Berakibat Stunting pada Anak Hingga Kematian Ibu",
                summary:
                    "Pemenuhan zat besi sangat krusial karena anemia pada ibu hamil akibat kekurangan asupan nutrisi merupakan cikal bakal anak mengalami stunting sejak dalam kandungan.",
                url: "https://keslan.kemkes.go.id/view_artikel/2335/anemia-ibu-hamil-berakibat-stunting-pada-anak-hingga-kematian-ibu",
                image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop",
            },
            {
                id: "ih-2",
                title: "Cegah Stunting Sejak dalam Masa Kehamilan",
                summary:
                    "Ibu hamil wajib memastikan kebutuhan kalori makro serta mikro seperti kalsium, asam folat, dan zat besi terpenuhi secara adekuat setiap trimesternya agar pertumbuhan janin tidak terhambat.",
                url: "https://keslan.kemkes.go.id/view_artikel/1092/cegah-stunting-sejak-dalam-masa-kehamilan",
                image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&h=300&fit=crop",
            },
            {
                id: "ih-3",
                title: "Hati-Hati, Anemia saat Hamil Tingkatkan Risiko Stunting pada Anak",
                summary:
                    "Anemia defisiensi besi selama kehamilan memicu penurunan jumlah sel darah merah sehat pada ibu, yang secara langsung meningkatkan risiko gangguan pertumbuhan kerdil pada janin.",
                url: "https://www.halodoc.com/artikel/hati-hati-anemia-saat-hamil-tingkatkan-risiko-stunting-pada-anak",
                image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&h=300&fit=crop",
            },
            {
                id: "ih-4",
                title: "Kaitan Stunting Terhadap Kondisi Ibu Yang Mengalami Anemia Saat Hamil",
                summary:
                    "Pencegahan stunting paling mendasar dimulai dari menjaga kecukupan gizi alami ibu di masa kehamilan demi melindungi 1000 Hari Pertama Kehidupan (HPK) anak.",
                url: "https://www.alodokter.com/komunitas/topic/apakah-anak-yg-lahir-dengan-keadaan-ibu-yg-anemia-bisa",
                image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        slug: "baduta",
        name: "Baduta",
        icon: "child_care",
        articles: [
            {
                id: "bd-1",
                title: "1000 HPK Kunci Cegah Stunting",
                summary:
                    "Masa di bawah dua tahun (baduta) adalah periode emas intervensi gizi, di mana pemberian ASI eksklusif dan pemantauan kurva pertumbuhan sangat menentukan keberhasilan pencegahan gagal tumbuh.",
                url: "https://ayosehat.kemkes.go.id/1000-hpk-kunci-cegah-stunting",
                image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
            },
            {
                id: "bd-2",
                title: "Memahami Stunting pada Anak",
                summary:
                    "Kekurangan gizi kronis dan infeksi berulang pada usia baduta tidak hanya membuat anak bertubuh pendek, tetapi juga berpotensi menurunkan tingkat kecerdasannya secara permanen jika tidak dicegah.",
                url: "https://www.alodokter.com/memahami-stunting-pada-anak",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
            },
            {
                id: "bd-3",
                title: "Pemberian Makanan Tambahan pada Balita",
                summary:
                    "Penanggulangan masalah wasting dan stunting pada anak memerlukan intervensi langsung berupa pemberian makanan tambahan padat nutrisi untuk mengejar ketertinggalan laju pertumbuhan.",
                url: "https://ayosehat.kemkes.go.id/pemberian-makanan-tambahan-pada-balita",
                image: "https://images.unsplash.com/photo-1555078604-b2379f0e964a?w=400&h=300&fit=crop",
            },
            {
                id: "bd-4",
                title: "Ibu, Ini 5 Cara Ampuh Mencegah Stunting pada Anak",
                summary:
                    "Membawa anak ke posyandu secara konsisten untuk memantau berat dan tinggi badannya adalah langkah deteksi dini paling ampuh agar gangguan kesehatan dapat segera ditangani.",
                url: "https://www.halodoc.com/artikel/ibu-ini-5-cara-ampuh-mencegah-stunting-pada-anak",
                image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        slug: "mpasi",
        name: "MPASI",
        icon: "restaurant",
        articles: [
            {
                id: "mp-1",
                title: "10 Ikan yang Bagus untuk MPASI Beserta Nutrisinya",
                summary:
                    "Menggunakan ikan lokal yang terjangkau seperti lele, patin, dan ikan mas merupakan strategi MPASI cerdas karena kaya akan protein hewani serta omega-3 pembasmi stunting.",
                url: "https://www.alodokter.com/10-ikan-yang-bagus-untuk-mpasi-beserta-nutrisinya",
                image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
            },
            {
                id: "mp-2",
                title: "Informasi Penting tentang Pemberian MPASI pada Bayi",
                summary:
                    "Pengenalan makanan pendamping tepat pada usia 6 bulan harus diiringi dengan penyesuaian porsi, tekstur, dan frekuensi yang benar untuk memenuhi lonjakan target kalori harian bayi.",
                url: "https://www.alodokter.com/informasi-penting-tentang-pemberian-mpasi-pada-bayi",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
            },
            {
                id: "mp-3",
                title: "Cegah Stunting sejak Kehamilan hingga Lahir dengan ASI Eksklusif dan Pemberian MPASI Adekuat",
                summary:
                    "MPASI yang adekuat nutrisinya, diseimbangkan dengan kelanjutan pemberian ASI, adalah syarat mutlak agar anak tidak mengalami kegagalan pertumbuhan linier (stunting).",
                url: "https://lms.kemkes.go.id/courses/e1d79717-fb6a-4be9-a421-5f88d1161993",
                image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=400&h=300&fit=crop",
            },
            {
                id: "mp-4",
                title: "Contoh Menu PMT Posyandu Balita: Resep Lezat dan Bergizi",
                summary:
                    "Penyediaan menu Makanan Tambahan (PMT) yang mengandung karbohidrat, protein hewani, dan tekstur yang disesuaikan usia anak adalah kunci praktis pemenuhan gizi yang sering diterapkan di Posyandu.",
                url: "https://www.halodoc.com/artikel/contoh-menu-pmt-posyandu-balita-resep-lezat-dan-bergizi",
                image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        slug: "info-tambahan",
        name: "Info Tambahan",
        icon: "info",
        articles: [
            {
                id: "it-1",
                title: "Dorong Ketahanan Pangan Berbasis Keluarga, Panen Sayur Organik dan Bimtek Urban Farming",
                summary:
                    "Inovasi pemanfaatan pekarangan untuk menanam microgreen dan sayuran organik memberikan keluarga akses pangan gizi mandiri yang terbukti suportif dalam mencegah stunting.",
                url: "https://hortikultura.pertanian.go.id/dorong-ketahanan-pangan-berbasis-keluarga-bidang-v-oase-kim-panen-sayur-organik-dan-bimtek-urban-farming/",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            },
            {
                id: "it-2",
                title: "Berbahaya untuk Tumbuh Kembang Anak, Ini 4 Penyebab Stunting",
                summary:
                    "Lingkungan dengan akses air bersih yang minim dan sanitasi yang buruk berkontribusi meningkatkan risiko stunting pada anak hingga 50 persen akibat rentannya infeksi penyerta.",
                url: "https://www.halodoc.com/artikel/berbahaya-untuk-tumbuh-kembang-anak-ini-4-penyebab-stunting",
                image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop",
            },
            {
                id: "it-3",
                title: "Stunting - Gejala, Penyebab, Pencegahan & Pengobatan",
                summary:
                    "Penanganan stunting wajib dilakukan melalui pendekatan ganda yang komprehensif, yaitu menuntaskan masalah asupan gizi sekaligus memperbaiki perilaku hidup bersih dan sehat di lingkungan keluarga.",
                url: "https://www.halodoc.com/kesehatan/stunting",
                image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&h=300&fit=crop",
            },
            {
                id: "it-4",
                title: "Mengenal 3 Tips Pencegahan Stunting",
                summary:
                    "Edukasi mengenai pola makan gizi seimbang, pola asuh yang penuh perhatian, serta pemeliharaan kebersihan air dan sanitasi adalah tiga pilar utama untuk menciptakan generasi bebas stunting.",
                url: "https://ayosehat.kemkes.go.id/mengenal-3-tips-pencegahan-stunting",
                image: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?w=400&h=300&fit=crop",
            },
        ],
    },
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}
