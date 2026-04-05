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
                title: "Cegah Stunting Sejak dalam Masa Kehamilan",
                summary:
                    "Ibu hamil wajib memastikan kebutuhan kalori makro serta mikro seperti kalsium, asam folat, dan zat besi terpenuhi secara adekuat setiap trimesternya agar pertumbuhan janin tidak terhambat.",
                url: "https://keslan.kemkes.go.id/view_artikel/1092/cegah-stunting-sejak-dalam-masa-kehamilan",
                image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&h=300&fit=crop",
            },
            {
                id: "ih-2",
                title: "Hati-Hati, Anemia saat Hamil Tingkatkan Risiko Stunting pada Anak",
                summary:
                    "Anemia defisiensi besi selama kehamilan memicu penurunan jumlah sel darah merah sehat pada ibu, yang secara langsung meningkatkan risiko gangguan pertumbuhan kerdil pada janin.",
                url: "https://www.halodoc.com/artikel/hati-hati-anemia-saat-hamil-tingkatkan-risiko-stunting-pada-anak",
                image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&h=300&fit=crop",
            },
            {
                id: "ih-3",
                title: "Kaitan Stunting Terhadap Kondisi Ibu yang Mengalami Anemia Saat Hamil",
                summary:
                    "Pencegahan stunting paling mendasar dimulai dari menjaga kecukupan gizi alami ibu di masa kehamilan demi melindungi 1000 Hari Pertama Kehidupan (HPK) anak.",
                url: "https://www.alodokter.com/komunitas/topic/apakah-anak-yg-lahir-dengan-keadaan-ibu-yg-anemia-bisa",
                image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
            },
            {
                id: "ih-4",
                title: "Nutrisi Kehamilan yang Tepat untuk Tumbuh Kembang Janin",
                summary: "Panduan lengkap mengenai nutrisi penting yang dibutuhkan selama masa kehamilan untuk memastikan janin tumbuh sehat dan optimal.",
                url: "https://www.alodokter.com/jangan-cemas-kita-bahas-nutrisi-ibu-hamil-di-sini",
                image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400&h=300&fit=crop",
            },
            {
                id: "ih-5",
                title: "Alasan Mengapa Diet Saat Hamil Sangat Tidak Disarankan",
                summary: "Diet menurunkan berat badan saat hamil dapat membahayakan pasokan nutrisi penting bagi ibu dan mengganggu perkembangan janin.",
                url: "https://www.alodokter.com/diet-ibu-hamil-nyatanya-tidak-disarankan",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
            },
            {
                id: "ih-6",
                title: "Pencegahan Stunting Dimulai Sejak Masa Kehamilan",
                summary: "Langkah-langkah krusial yang bisa dilakukan ibu hamil untuk mencegah risiko stunting pada anak bahkan sebelum mereka lahir.",
                url: "https://www.alodokter.com/cara-mencegah-stunting-pada-anak-sejak-masa-kehamilan",
                image: "https://images.unsplash.com/photo-1615766553246-9147b6d50e90?w=400&h=300&fit=crop",
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
            {
                id: "bd-5",
                title: "Mengenal Stunting: Ciri-ciri dan Dampaknya",
                summary: "Ketahui apa itu stunting, tanda-tandanya pada anak, serta dampak jangka panjang terhadap kesehatan dan kecerdasannya.",
                url: "https://www.alodokter.com/stunting",
                image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=300&fit=crop",
            },
            {
                id: "bd-6",
                title: "Lebih Jauh Memahami Kondisi Stunting pada Anak",
                summary: "Pemahaman mengenai kondisi stunting, termasuk cara identifikasi dini dan penanganan yang tepat agar pertumbuhan anak kembali ke jalur normal.",
                url: "https://www.alodokter.com/memahami-stunting-pada-anak?",
                image: "https://images.unsplash.com/photo-1607129298528-bbc851079920?w=400&h=300&fit=crop",
            },
            {
                id: "bd-7",
                title: "Faktor Penyebab dan Risiko Bayi Lahir Stunting",
                summary: "Berbagai faktor penyebab dan risiko yang membuat bayi terlahir dengan kondisi stunting dan intervensi yang dibutuhkan.",
                url: "https://www.alodokter.com/bayi-lahir-stunting-faktor-penyebab-dan-risiko",
                image: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?w=400&h=300&fit=crop",
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
            {
                id: "mp-5",
                title: "Panduan Menu MPASI Bayi 6-12 Bulan untuk Pertumbuhan Optimal",
                summary: "Rekomendasi menu dan tahapan pemberian MPASI bergizi sejak usia 6 bulan hingga setahun agar kebutuhan nutrisi anak tercukupi.",
                url: "https://keluargaberimun.id/seputar-imunisasi/apa-saja-menu-mpasi-bayi-6-bulan-hingga-12-bulan-supaya-si-kecil-tumbuh-optimal",
                image: "https://images.unsplash.com/photo-1514995669114-6081e934b693?w=400&h=300&fit=crop",
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
            {
                id: "it-5",
                title: "Mengenal Microgreen dan Manfaat Kesehatannya yang Melimpah",
                summary: "Tanaman mungil yang kaya akan nutrisi dan sangat bermanfaat untuk mendongkrak asupan gizi harian dalam pencegahan stunting.",
                url: "https://www.halodoc.com/artikel/mengenal-microgreen-tanaman-mungil-dengan-manfaat-besar",
                image: "https://images.unsplash.com/photo-1622463214111-b192a53371d2?w=400&h=300&fit=crop",
            },
            {
                id: "it-6",
                title: "Microgreen: Nutrisi Padat yang Sangat Praktis Ditanam di Rumah",
                summary: "Panduan ringkas tentang betapa mudahnya membudidayakan microgreen sendiri sebagai sumber pangan bernutrisi padat keluarga.",
                url: "https://www.halodoc.com/artikel/microgreen-nutrisi-padat-mudah-ditanam",
                image: "https://images.unsplash.com/photo-1648128774225-b7cf04eb94c6?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        slug: "ayah",
        name: "Ayah",
        icon: "man",
        articles: [
            {
                id: "ay-1",
                title: "Waspada, Pajanan Asap Rokok Dapat Menyebabkan Anak Stunting",
                summary: "Kebiasaan merokok di dekat anak tidak hanya merusak sistem pernapasan tetapi juga menghambat pertumbuhan yang berdampak pada stunting.",
                url: "https://kemkes.go.id/eng/%20pajanan-rokok-sebabkan-anak-jadi-stunting",
                image: "https://images.unsplash.com/photo-1760463502208-09e09b42bcfe?w=400&h=300&fit=crop",
            },
            {
                id: "ay-2",
                title: "Peran Ayah dalam Mensukseskan Pemberian ASI Eksklusif",
                summary: "Dukungan ayah di rumah sangat berpengaruh terhadap kenyamanan dan kelancaran ibu dalam memberikan ASI eksklusif bagi sang buah hati.",
                url: "https://ayosehat.kemkes.go.id/bagaimana-peran-ayah-selama-pemberian-asi-eksklusif-untuk-istri-di-rumah",
                image: "https://images.unsplash.com/photo-1657912230175-8f502bc7addb?w=400&h=300&fit=crop",
            },
            {
                id: "ay-3",
                title: "Pentingnya Peran Sentral Ayah dalam Pencegahan Stunting",
                summary: "Pencegahan stunting adalah tugas bersama; peran ayah dalam menjaga nutrisi keluarga dan sanitasi sama vitalnya dengan peran ibu.",
                url: "https://stunting.go.id/bukan-hanya-ibu-peran-ayah-sangat-penting-dalam-pencegahan-stunting/",
                image: "https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?w=400&h=300&fit=crop",
            },
            {
                id: "ay-4",
                title: "Ayah, Anda Berperan Sentral dalam Langkah Menanggulangi Stunting",
                summary: "Keterlibatan aktif figur ayah dapat memberikan dorongan moril dan komitmen penuh keluarga untuk bersama menanggulangi permasalahan stunting.",
                url: "https://disdikpora.bulelengkab.go.id/informasi/detail/artikel/ayah-anda-berperan-sentral-dalam-menanggulangi-stunting-58",
                image: "https://images.unsplash.com/photo-1638927700243-8a431de19599?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        slug: "resep-microgreen",
        name: "Resep Microgreen",
        icon: "eco",
        articles: [
            {
                id: "rm-1",
                title: "Kumpulan Resep Microgreen Mudah untuk Keluarga",
                summary: "Beragam kreasi resep praktis untuk menyajikan microgreen dengan lezat disukai oleh keluarga, termasuk untuk MPASI dan lauk sehat.",
                url: "https://cookpad.com/id/cari/microgreen",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
            },
            {
                id: "rm-2",
                title: "Berbagai Cara Mengolah Microgreen agar Tetap Nutrisius",
                summary: "Tips sederhana memadukan microgreen dalam menu masakan sehari-hari dengan cara yang tepat agar kandungan nutrisinya tak hilang.",
                url: "https://www.hipwee.com/tips/cara-olah-microgreen/",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
            },
        ],
    },
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}
