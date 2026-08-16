# TASKS.md — Daftar Task per Fase (Portfolio Tondiki)

> Cara kerja: kerjakan task BERURUTAN, satu per satu. Setiap task selesai → verifikasi (lint+build bila mengubah kode) → centang checkbox + tulis catatan singkat. BERHENTI dan minta konfirmasi user saat: (a) fase selesai, (b) keputusan besar di luar PRD, (c) butuh data yang hanya user tahu.

## FASE 1 — FONDASI: Design System, Konten, Kerangka

- [ ] **T1. Generate & persist design system** — jalankan ui-ux-pro-max `--design-system --persist -p "Portfolio"` (query + dials di AGENTS.md §2). Review hasil: pastikan cocok untuk "professional trustworthy freelance portfolio, audiens UMKM Indonesia". Simpan sebagai `design-system/portfolio/MASTER.md`. Jika hasil kurang pas → retry sekali query lebih sempit → kalau tetap tidak, konfirmasi arah visual ke user SEBELUM lanjut.
  - DoD: MASTER.md ada & berisi pattern, palet, typography, spacing, motion, anti-pattern.

- [ ] **T2. Terapkan token design system ke globals.css + fonts** — konversi output MASTER.md ke CSS variables Tailwind v4 di `src/app/globals.css`; pasang font via `next/font` (baca docs Next di `node_modules/next/dist/docs/` untuk API font versi ini); set metadata dasar + bahasa `id`. Baca `src/app/layout.tsx` & `src/app/page.tsx` yang ada sebelum mengubah.
  - DoD: build sukses, token terpakai (bukan hex lepas) di komponen dasar.

- [ ] **T3. Struktur konten terpusat (`src/content/`)** — buat `site.ts` (nav, CTA, social, WhatsApp config), `profile.ts` (data PRD §5 + `PHOTO_SRC`), `demos.ts` (3 demo + URL + copy per-niche), `services.ts` (paket starter `[HARGA_STARTER]` + roadmap items), `experience.ts` (kurasi CV). Semua copy bahasa Indonesia manfaat-oriented. Dilarang mengarang fakta di luar PRD §5.
  - DoD: file ada, TypeScript valid, tidak ada angka/fakta fiktif.

- [ ] **T4. Utilitas: WhatsApp link (`src/lib/wa.ts`)** — fungsi baku bikin `wa.me` URL dari konfigurasi di `site.ts` (nomor + template pesan per konteks CTA: umum, per-demo, konsultasi). Ekspor helper yang dipakai semua section.
  - DoD: unit logika benar (format nomor, encoding pesan), build lolos.

- [ ] **T5. Placeholder foto & avatar** — generate `public/images/profile-placeholder.svg` (avatar inisial "TA" elegan sesuai palet MASTER); pastikan `PHOTO_SRC` di `profile.ts` dipakai satu-satunya sumber. Tambah TODO singkat (satu baris) di profile.ts cara mengganti foto + catat pengingat di Fase 2 T19.
  - DoD: placeholder tampil rapi di rasio 1:1, mudah diganti via satu baris.

- [ ] **T6. Komponen motion reusable (`src/components/motion/`)** — `FadeIn`, `StaggerList`/`StaggerItem`, `transitions.ts` (durasi/easing terpusat, exit < enter). Semua hormat `useReducedMotion()`. Riset dulu: `"scroll reveal stagger" --domain gsap` + `"animation accessibility" --domain ux` lalu adaptasi ke `motion`.
  - DoD: demo internal sederhana (bisa dihapus), build lolos, reduced-motion bekerja.

- [ ] **T7. Navbar + mobile menu** — sticky navbar dari `site.ts` (server component + sub-komponen client untuk menu & scroll state), CTA WhatsApp. Riset `"navigation landing sticky" --domain landing`. Smooth-scroll anchor + state aktif; mobile menu (sheet/accordion shadcn) dengan touch target ≥44px.
  - DoD: 375px OK, focus state terlihat, build lolos.

- [ ] **T8. Footer** — minimal: copyright, link kontak/email, link portfolio lama, "dibangun dengan Next.js". Data dari `site.ts`.
  - DoD: konsisten token, responsive.

- [ ] **T9. Verifikasi akhir Fase 1** — `npm run lint` + `npm run build` bersih; review visual mental 375/768/1024; update dokumen bila ada keputusan lintas-section baru (catat ke MASTER.md). **→ KONFIRMASI USER sebelum masuk Fase 2** (tampilkan ringkasan arah visual).

## FASE 2 — BUILD SECTIONS, POLISH & LAUNCH

- [ ] **T10. Riset & ambil referensi Hero (pakai kuota 21st.dev)** — `get_usage` dulu, lalu `get_component` untuk kandidat terbaik dari PRD §4.2 (#10628 / #9037 / #5590 / #5127 — pilih 1–2 yang paling sesuai MASTER.md). Bandingkan, putuskan direction final (konfirmasi user jika dua kandidat sama kuat).
  - DoD: keputusan direction hero terdokumentasi singkat di sini.

- [ ] **T11. Hero Section** — adaptasi referensi ke design system kita: headline/sub dari konten, CTA ganda (demo + WhatsApp), elemen interaktif (mouse-follow glow/dot grid — nonaktif di touch & reduced-motion), trust indicators (4+ th, 5k+ pengguna, 3 demo), foto placeholder via `PHOTO_SRC`. Semua stagger pakai wrapper T6.
  - DoD: tidak ada layout shift, animasi GPU-friendly, 375px OK, kontras ≥4.5:1, build lolos.

- [ ] **T12. Demo Showcase (section konversi utama)** — 3 kartu dari `demos.ts`: thumbnail preview (opsi: screenshot demo via script Playwright — buat sendiri, lihat SKILLS.md §6.2 — atau styled mockup; JANGAN iframe live berat tanpa uji performa), tombol "Lihat Live Demo" tab baru (`noopener`), copy per-niche, CTA band penutup → WhatsApp per-demo (pakai wa.ts). Riset `"showcase grid hover" --domain landing`.
  - DoD: mobile stacking rapi, semua link berfungsi, build lolos.

- [ ] **T13. Layanan & Paket Starter** — kartu paket utama (harga `[HARGA_STARTER]`), list deliverables, layanan lanjutan (booking/katalog/POS — "segera"). Riset `"pricing card trust" --domain landing`.
  - DoD: placeholder harga terlihat jelas sebagai placeholder, CTA WhatsApp.
  - Catatan: tanyakan harga asli ke user saat fase hampir selesai (lihat T19).

- [ ] **T14. Roadmap Pertumbuhan** — visual timeline 3 tahap (Landing Page → Website+Fitur → Sistem Bisnis) — narasi "tumbuh bersama" (PRD §4.5). Riset `"timeline roadmap horizontal" --domain landing`.
  - DoD: mobile tidak menabrak (vertikal di <768px), animasi whileInView once.

- [ ] **T15. Capabilities / Tech Stack** — dua grup: "untuk bisnismu" (awam) + chip teknis dari `experience.ts`/`profile.ts`. Ikon lucide konsisten; `aria-hidden` untuk dekoratif.
  - DoD: chip wrap rapi semua breakpoint, tidak ada jebakan kontras.

- [ ] **T16. Tentang Saya + timeline pengalaman** — foto placeholder, narasi dari CV (PRD §5), timeline kurasi 4 posisi + pendidikan singkat. Riset `"about profile timeline" --domain landing`.
  - DoD: hanya fakta PRD §5, hierarki heading benar (h2/h3).

- [ ] **T17. Proses Kerja** — 4 langkah (Konsultasi → Kustomisasi → Build & Revisi → Launch), icon + kartu. Copy menenangkan untuk UMKM awam.
  - DoD: build lolos, konsisten spacing rhythm MASTER.

- [ ] **T18. Kontak/CTA Final + SEO & polish akhir** — section kontak (WA primer, email, area layanan), SEO metadata lengkap + Open Graph (og-image sederhana bisa dari placeholder/screenshot), cek hierarki heading tunggal h1, sitemap/robots jika docs Next menyarankan untuk versi ini, Lighthouse mental-check (font, ukuran gambar, tanpa CLS). Opsional (konfirmasi user): Vercel Analytics + dark mode.
  - DoD: `npm run lint` + `npm run build` bersih; semua section terhubung anchor dari navbar.

- [ ] **T19. Serah terima ke user (data yang hanya user tahu)** — minta/ingatkan: (1) harga starter final → ganti `[HARGA_STARTER]`; (2) foto asli → ganti `PHOTO_SRC` + file di `public/images/`; (3) konfirmasi copy; (4) keputusan deploy (domain custom?). Jalankan build final setelah input masuk.
  - DoD: tidak ada placeholder tersisa selain yang sengaja ditunda, build final bersih.

---

## Log Catatan

- (16/08/2026) FASE SETUP selesai: PRD.md, AGENTS.md, SKILLS.md, TASKS.md dibuat. Konten profil diekstrak dari CV PDF. Riset awal 21st.dev: kandidat hero #10628 #9037 #5590 #5127, bento #9205 #9594 (metadata saja, kuota belum dipakai).
