# PRD — Portfolio Website: Tondiki Andika Gurning

> Version 1.0 — 16 Agustus 2026. Dokumen ini adalah single source of truth untuk scope, konten, dan kualitas. Semua task di TASKS.md harus dapat ditelusuri ke bagian dokumen ini.

---

## 1. Ringkasan Produk

Website portfolio satu halaman (landing page) untuk **Tondiki Andika Gurning**, freelance fullstack developer (web & mobile), dengan tujuan bisnis utama: **menjual 3 demo landing page niche sebagai produk starter** kepada calon client UMKM/bisnis kecil-menengah, sekaligus membangun fondasi showcase untuk layanan yang lebih advance di masa depan (POS system, booking system, dsb).

**Proposisi nilai inti:** "Website profesional untuk bisnismu, mulai dari landing page siap pakai yang sudah terbukti — dibangun oleh developer berpengalaman yang mampu mengantar bisnismu menuju sistem yang lebih kompleks."

### Posisi produk (growth narrative — WAJIB terkomunikasi)
Portfolio ini BUKAN sekadar "jual landing page". Narasinya:
1. **Sekarang:** beli landing page starter (terjangkau, siap pakai, sudah jadi demonya).
2. **Berikutnya:** bisnis Anda tumbuh → butuh fitur lebih (booking online, katalog, pembayaran).
3. **Saya yang antar:** fullstack capability (frontend + backend + deploy + testing) sudah terbukti di industri 4+ tahun — landing page adalah pintu masuk, bukan batas kemampuan.

---

## 2. Tujuan & Success Metrics

| Tujuan | Metrik | Target awal |
|---|---|---|
| Meyakinkan calon client kualitas landing page | Klik ke salah satu dari 3 demo | CTR tombol/link demo ≥ 25% |
| Menghasilkan lead | Klik CTA WhatsApp / email | ≥ 5 lead/bulan |
| Menjalankan narasi growth | Scroll depth sampai section Roadmap | ≥ 40% |
| Kredibilitas teknis | Bounce rate, Lighthouse | Bounce < 60%, Performance & SEO ≥ 90 |

Tracking: mulai dengan analitik ringan (mis. Vercel Analytics) — final call di task implementasi, jangan bloating bundle.

---

## 3. Target Audiens

**Persona utama: Pemilik UMKM / bisnis kecil-menengah (25–45 th), Indonesia.**
- Butuh website untuk kredibilitas & menangkap pelanggan online, tapi tidak paham teknis.
- Terintimidasi harga jasa web custom; mencari solusi terjangkau dan cepat jadi.
- Term: gunakan bahasa Indonesia yang jelas, manfaat-oriented ("dapat pelanggan baru"), HINDARI jargon teknis di copy utama (jenis database, nama framework → taruh di section capabilities, bukan headline).

**Persona sekunder: pemilik bisnis yang SUDAH punya website sederhana** dan mulai butuh sistem (booking, POS) — dibayar lewat section Roadmap & Capabilities.

---

## 4. Struktur Halaman (Sections) — urutan wajib

### 4.1 Navbar (sticky)
Logo/nama "Tondiki Andika" • anchor links (Demo, Layanan, Tentang, Kontak) • CTA button "Konsultasi Gratis" (WhatsApp). Mobile: hamburger menu.

### 4.2 Hero — PRIORITAS TERTINGGI
- Animated, interaktif, namun profesional dan cepat (bukan gimmicky).
- Headline berorientasi manfaat (draft): "Website Profesional untuk Bisnismu — Siap Pakai, Terjangkau."
- Sub-headline: identitas sebagai fullstack developer 4+ tahun pengalaman.
- CTA primer: "Lihat Demo Landing Page" (scroll ke #demo). CTA sekunder: "Konsultasi via WhatsApp".
- Elemen interaktif yang disukai (pilih via riset 21st.dev + ui-ux-pro-max): mouse-follow glow / dot grid, staggered text reveal, animated avatar (foto placeholder).
- Trust indicators kecil di bawah CTA (4+ tahun, 5.000+ pengguna dilayani, 3 demo siap pakai).
- Referensi kandidat dari 21st.dev (metadata sudah diriset, ambil kode saat implementasi): Hero Block #10628 (portfolio hero + avatar), Portfolio Hero #9037 (blur-in text + foto overlay), Animated Hero #5590 (dot grid mouse-follow), Modern Hero #5127 (SVG grid + glow + trust stats).

### 4.3 Demo Showcase (#demo) — SECTION KONVERSI UTAMA
3 kartu demo, masing-masing:
1. **Aesthetic Clinic** — https://aesthetic-clinic-concept.vercel.app/
2. **Spa & Reflexology** — https://spa-reflexology-demo.vercel.app/
3. **Wedding Organizer** — https://wedding-organizer-demo.vercel.app/

- Preview visual menarik: prioritas screenshot/generate thumbnail (bukan iframe live berat — keputusan final saat implementasi, pertimbangkan performa).
- Tombol per-demo: "Lihat Live Demo" (buka tab baru).
- Copy per-niche: untuk siapa demonya (klinik kecantikan, spa, WO) + 2–3 fitur andalan.
- Diakhiri CTA band: "Suka salah satunya? Ini bisa jadi website bisnismu." → WhatsApp.

### 4.4 Layanan & Paket Starter
- Kartu layanan utama: **Landing Page** (dari demo pilihan; harga awal bersifat provisional dan perlu dikonfirmasi user sebelum publish).
- Daftar apa yang didapat (kustomisasi warna/konten/brand, domain & deploy assist, responsive, dsb).
- Layanan lanjutan (framed sebagai roadmap): booking system, katalog + pembayaran, POS — status "segera / on request".

### 4.5 Roadmap Pertumbuhan ("Tumbuh Bersama")
Roadmap ditunda dari halaman aktif untuk sekarang. Narasi pertumbuhan tetap disampaikan secara ringkas melalui layanan custom, tanpa section roadmap terpisah.

### 4.6 Capabilities / Tech Stack
Section capabilities terpisah ditunda. Tech stack tetap tampil ringkas di dalam section Tentang, berdampingan dengan timeline pengalaman.

### 4.7 Tentang Saya (#tentang)
- Foto placeholder (lihat §7) + narasi profesional dari CV: fullstack 4+ tahun, bridge UI/UX (Figma) ↔ development, clean architecture, minimal design.
- Highlight pengalaman (dari CV, ringkas & disederhanakan untuk awam):
  - Platform sertifikasi Halal digital resmi Kementerian Agama.
  - Modul Car Credit & Umrah web/mobile di perusahaan multifinance — 5.000+ pengguna.
  - Aplikasi sosial media mobile end-to-end.
  - Membangun infrastruktur testing dari nol (80% coverage, QA time −60%) — posisi saat ini: Front-end Test Engineer.
- Timeline pendek pengalaman kerja (bukan CV lengkap — kurasi yang relevan untuk client).

### 4.8 Proses Kerja (singkat)
4 langkah: Konsultasi → Pilih & kustomisasi → Build & revisi → Launch. Menjawab kecemasan UMKM: transparan, tidak ribet.

### 4.9 Kontak / CTA Final (#kontak)
WhatsApp (primer) • Email • link portfolio existing (tondikiandika.vercel.app). Jam respon, area layanan (Jakarta/remote seluruh Indonesia).

### 4.10 Footer
Copyright, dibuat dengan Next.js, link sosial (opsional, placeholder).

---

## 5. Konten Wajib — Sumber Kebenaran (dari CV, JANGAN diarang-arang)

- **Nama:** Tondiki Andika Gurning
- **Role:** Freelance Fullstack Developer (Web & Mobile)
- **Kontak:** +62 838-9778-1157 (WhatsApp) • tondikiag30@gmail.com • tondikiandika.vercel.app
- **Lokasi:** East Jakarta, Indonesia (melayani remote seluruh Indonesia)
- **Ringkasan:** Fullstack developer 4+ tahun, web & native/cross-platform mobile. Bridge UI/UX design (Figma) dengan development — React, Next.js, Nuxt, Kotlin di frontend; Node.js, Spring Boot, Gin di backend. Proficient unit/E2E testing, Docker, CI/CD. Passionate clean architecture & minimal design.
- **Skills (untuk section 4.6):**
  - Frontend: React, React Native, Vue, Next, Nuxt, Flutter, Tailwind CSS, Bootstrap, MUI, AntD, Vuetify
  - Backend: Node.js, Express.js, Spring Boot, Gin, PostgreSQL, MongoDB, Redis, WebSockets
  - Deploy & Tools: Docker, Firebase, Vercel, Heroku, Supabase, Railway, CI/CD, Git
  - Testing: Jest, Testing Library, Cypress, Playwright, Maestro
  - Bahasa: JavaScript, TypeScript, Java, Kotlin, Go, Dart, HTML5, CSS3
- **Pengalaman (kurasi):**
  - Front-end Test Engineer — Hyperscal (Nov 2025–sekarang): testing infra dari nol, 80% coverage, QA time −60% (Jest, Playwright, Maestro).
  - Fullstack Developer — PT Teknologi Sosial Nusantara (Jun 2022–Nov 2025): platform sertifikasi Halal digital Kemenag; aplikasi sosial media mobile; arsitektur DB (user profiling, follower, feed); migrasi legacy codebase.
  - Front-end Developer — PT Adira Dinamika Multi Finance Tbk (Mar–Jun 2025): modul Car Credit & Umrah web/mobile 5k+ pengguna; refactor modul Motorcycle Credit; native Call Management System; mentoring junior.
  - Front-end Developer (Freelance) — PT METRA-NET (Feb–Mei 2022).
- **Pendidikan:** Fullstack JavaScript Course — Hacktiv8 (2021–2022, graduate with distinction, team leader final project) • SMAN 5 Depok (2018–2021).

Angka trust yang boleh dipakai: **4+ tahun pengalaman**, **5.000+ pengguna dilayani** (via modul Adira), **80% test coverage**, **3 demo siap pakai**.

---

## 6. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| F-01 | Semua CTA WhatsApp membuka `wa.me` dengan pesan template yang sudah terisi | Wajib |
| F-02 | Link demo membuka tab baru dengan preview yang aman (`rel="noopener noreferrer"`) | Wajib |
| F-03 | Smooth scroll ke anchor section + navbar state aktif | Wajib |
| F-04 | Mobile menu fungsional (accordion/sheet) | Wajib |
| F-05 | Semua konten teks terpusat di file data (`src/content/`) — mudah diedit tanpa sentuh komponen | Wajib |
| F-06 | Sistem placeholder foto (lihat §7) | Wajib |
| F-07 | Animasi hormat `prefers-reduced-motion` | Wajib |
| F-08 | SEO: metadata, Open Graph, description bahasa Indonesia | Wajib |
| F-09 | Analytics ringan | Nice-to-have |
| F-10 | Dark mode | Nice-to-have (default: satu tema yang dipoles maximal; keputusan final dari design system) |

## 7. Sistem Placeholder Foto (WAJIB mudah diganti)

- SATU konstanta sumber: `PHOTO_SRC` di `src/content/profile.ts` (default: `/images/profile-placeholder.svg` yang kita generate sendiri — avatar inisial elegan, bukan foto asli acak).
- Semua komponen (Hero, About) membaca dari konstanta ini — TIDAK ADA hardcode path di komponen.
- Cara mengganti didokumentasikan sebagai komentar TODO singkat + dicatat di TASKS.md task penutup: user cukup menaruh file di `public/images/` dan mengubah satu baris.

## 8. Kebutuhan Non-Fungsional

- **Performa:** Lighthouse Performance ≥ 90 mobile; animasi via GPU-friendly properties (transform/opacity); tanpa layout shift; font dengan `next/font`.
- **Responsif:** breakpoint utama 375px / 768px / 1024px / 1440px; touch target ≥ 44px.
- **Aksesibilitas:** kontras teks ≥ 4.5:1; hierarchy heading benar (satu h1); state focus terlihat; icon dekoratif `aria-hidden`.
- **Kualitas kode:** TypeScript strict, ESLint lolos, `next build` sukses tanpa error; komponen server by default, `"use client"` hanya bila perlu (animasi/interaksi).
- **Bahasa UI:** Bahasa Indonesia (pasar primer). Istilah teknis diperbolehkan di section capabilities.

## 9. Out of Scope (Fase Ini)

- CMS / halaman blog.
- Multi-bahasa berbasis URL — tidak dipakai; toggle ID/EN state-based sudah aktif untuk portfolio satu halaman.
- Testimonial asli (belum ada data) — slot placeholder visual boleh, teks fiktif TIDAK BOLEH.
- Integrasi pembayaran online.
- Custom favicon/logo mark kompleks — gunakan wordmark sederhana dulu.

## 10. Stack (sudah terpasang, JANGAN diganti)

Next.js 16 (App Router) • TypeScript • Tailwind CSS v4 • shadcn/ui • `motion` (v13) untuk animasi • lucide-react untuk ikon. Lihat AGENTS.md untuk konvensi pemakaian.
