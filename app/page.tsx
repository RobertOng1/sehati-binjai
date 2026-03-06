import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/content-data";

const categoryIcons: Record<string, string> = {
  "ibu-hamil": "pregnant_woman",
  baduta: "child_care",
  mpasi: "restaurant",
  "info-tambahan": "info",
};

const categoryColors: Record<string, string> = {
  "ibu-hamil": "#e8f5ee",
  baduta: "#e0f2fe",
  mpasi: "#fef3c7",
  "info-tambahan": "#f3e8ff",
};

const categoryIconColors: Record<string, string> = {
  "ibu-hamil": "#106140",
  baduta: "#0284c7",
  mpasi: "#d97706",
  "info-tambahan": "#7c3aed",
};

const categoryDescriptions: Record<string, string> = {
  "ibu-hamil": "Tips nutrisi & kesehatan selama masa kehamilan.",
  baduta: "Panduan tumbuh kembang anak di bawah 2 tahun.",
  mpasi: "Resep dan jadwal pemberian makanan pendamping.",
  "info-tambahan": "Informasi umum lainnya seputar stunting.",
};

export default function HomePage() {
  return (
    <div className="pb-6">
      {/* Header — mobile only, desktop uses SideNav */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 md:hidden">
        <Image
          src="/app-logo-192-px.png"
          alt="Sehati Binjai"
          width={44}
          height={44}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold text-gray-900">Sehati Binjai</h1>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Desktop page title */}
        <div className="hidden md:flex items-center justify-between px-0 pt-6 pb-2">
          <h1 className="text-xl font-bold text-gray-900">Beranda</h1>
        </div>

        {/* Hero Banner */}
        <div className="mx-5 mt-4 md:mx-0 md:mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#106140] to-[#1a8a5a] p-7 md:p-12 relative">
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              Selamat Datang, <br />
              Bunda!
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed max-w-[280px] md:max-w-[420px]">
              Pantau perkembangan buah hati dan cegah stunting bersama kami
              melalui edukasi dan nutrisi mandiri.
            </p>
            <Link
              href="/kalkulator"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#106140] shadow-md transition-transform hover:scale-[1.02] press-effect"
            >
              <span className="material-symbols-outlined text-[18px]">
                calculate
              </span>
              Cek Status Gizi Anak
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -right-2 bottom-0 h-28 w-28 rounded-full bg-white/5" />
          <div className="absolute right-12 top-10 h-20 w-20 rounded-full bg-white/5" />
        </div>

        {/* Category Grid */}
        <div className="px-5 mt-10 md:px-0 md:mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Artikel Edukasi</h3>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="card-hover press-effect flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: categoryColors[cat.slug] }}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ color: categoryIconColors[cat.slug] }}
                  >
                    {categoryIcons[cat.slug]}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-800 block">
                    {cat.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 block leading-relaxed">
                    {categoryDescriptions[cat.slug]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Microgreen CTA */}
        <div className="px-5 mt-10 mb-6 md:px-0 md:mt-12">
          <h3 className="text-lg font-bold text-gray-900">
            Budidaya Microgreens
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Kebutuhan nutrisi dari rumah sendiri
          </p>
          <Link
            href="/microgreen"
            className="mt-4 block overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 card-hover press-effect"
          >
            {/* Mobile: vertical stack, Desktop: horizontal layout */}
            <div className="md:flex">
              <div className="relative h-48 md:h-auto md:w-[45%] w-full bg-gradient-to-b from-[#106140]/10 to-[#106140]/5">
                <Image
                  src="/microgreen/tools-and-ingridients.jpeg"
                  alt="Panduan Menanam Microgreens"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-8 md:flex md:flex-col md:justify-center md:flex-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#106140]">
                  <span className="material-symbols-outlined text-[14px]">menu_book</span>
                  Edukasi
                </span>
                <p className="mt-2 text-base md:text-lg font-bold text-gray-900">
                  Panduan Menanam Microgreens untuk Pemula
                </p>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed hidden md:block">
                  Microgreens adalah sayuran hijau muda yang memiliki kadar nutrisi
                  hingga 40 kali lipat lebih tinggi dari sayuran dewasa. Pelajari
                  langkah mudah menanamnya di dalam rumah.
                </p>
                <div className="mt-3 md:mt-4 flex items-center gap-1 text-[#106140] text-sm font-semibold">
                  <span>Lihat Panduan Lengkap</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
