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

export default function HomePage() {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <Image
          src="/app-logo-192-px.png"
          alt="Sehati Binjai"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold text-gray-900">Sehati Binjai</h1>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-soft" />
            <span className="text-xs font-medium text-green-600">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#106140] to-[#1a8a5a] p-6 relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-extrabold text-white leading-tight">
            Selamat Datang, <br />
            Bunda!
          </h2>
          <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-[220px]">
            Pantau perkembangan buah hati dan cegah stunting bersama kami.
          </p>
          <Link
            href="/kalkulator"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#106140] shadow-md transition-transform hover:scale-[1.02] press-effect"
          >
            <span className="material-symbols-outlined text-[18px]">
              calculate
            </span>
            Cek Status Gizi Anak
          </Link>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -right-2 bottom-0 h-24 w-24 rounded-full bg-white/5" />
        <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-white/5" />
      </div>

      {/* Category Grid */}
      <div className="px-4 mt-6">
        <h3 className="text-base font-bold text-gray-900">Layanan Utama</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="card-hover press-effect flex flex-col items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-gray-50"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: categoryColors[cat.slug] }}
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ color: categoryIconColors[cat.slug] }}
                >
                  {categoryIcons[cat.slug]}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-800">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Microgreen CTA */}
      <div className="px-4 mt-6">
        <h3 className="text-base font-bold text-gray-900">
          Budidaya Microgreens
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Kebutuhan nutrisi dari rumah sendiri
        </p>
        <Link
          href="/microgreen"
          className="mt-3 block overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-50 card-hover press-effect"
        >
          <div className="relative h-44 w-full bg-gradient-to-b from-[#106140]/10 to-[#106140]/5">
            <Image
              src="/microgreen/tools-and-ingridients.jpeg"
              alt="Panduan Menanam Microgreens"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#106140]">
              Edukasi
            </span>
            <p className="mt-1 text-sm font-bold text-gray-900">
              Panduan Menanam Microgreens
            </p>
            <div className="mt-2 flex items-center gap-1 text-[#106140] text-xs font-semibold">
              <span>Lihat Panduan</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
