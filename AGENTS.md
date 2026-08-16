# AGENTS.md — Aturan Kerja Agent (Proyek Portfolio Tondiki)

Instruksi ini berlaku untuk SEMUA task sepanjang proyek. Baca ulang dokumen ini jika konteks baru/session baru. Sumber scope: `PRD.md`. Daftar kerja: `TASKS.md`. Pemetaan tools: `SKILLS.md`.

## 0. Alur Kerja Wajib per Task

1. Baca `TASKS.md`, ambil task pertama yang belum selesai (berurutan).
2. Baca bagian `PRD.md` yang relevan + `design-system/portfolio/MASTER.md` (setelah dibuat).
3. Riset (skill/MCP) → implement → verifikasi (`npm run lint` + `npm run build`) → update checkbox di `TASKS.md`.
4. Satu task = satu unit kerja yang bisa diverifikasi. Jangan kerjakan task berikutnya sebelum verifikasi lolos.
5. JANGAN commit kecuali diminta eksplisit oleh user.
6. Hentikan diri (minta konfirmasi user) saat: berganti fase, ada keputusan desain besar yang PRD tidak jawab, atau butuh info yang hanya user tahu (harga, foto, testimonial).

## 1. Stack & Konvensi Teknis

- **Next.js 16 App Router + TypeScript + Tailwind v4 + shadcn/ui + motion (v13) + lucide-react.** Jangan tambahkan dependency baru tanpa alasan kuat (dan sebutkan alasannya ke user).
- **Next.js versi ini BUKAN versi yang kamu kenal** — blok `nextjs-agent-rules` di bawah file ini WAJIB dihormati: sebelum menulis/mengubah kode yang menyentuh API Next.js (routing, metadata, image, fonts, config), baca guide relevan di `node_modules/next/dist/docs/` dulu.
- **Server Component by default.** `"use client"` HANYA untuk komponen dengan animasi/interaksi (motion, hover, mouse-follow, menu). Jangan menandai page-level component as client kalau bisa dibuat composition: page server → section server → sub-komponen client.
- **Struktur file:**
  - `src/components/sections/` — section halaman (hero.tsx, demo-showcase.tsx, dst)
  - `src/components/ui/` — hasil shadcn (jangan edit manual kecuali perlu)
  - `src/components/motion/` — wrapper animasi reusable (mis. fade-in.tsx)
  - `src/content/` — SEMUA teks & data (profile.ts, demos.ts, services.ts, experience.ts, site.ts). Komponen tidak berisi copy hardcode (kecuali micro-copy struktural seperti "Lihat Demo").
  - `src/lib/` — util (wa.ts untuk link WhatsApp, utils.ts)
  - `public/images/` — aset gambar
- **Tailwind v4**: styling via utility + token CSS di `src/app/globals.css` (tidak ada file config JS). Gunakan design tokens (CSS variables) dari design system — jangan hardcode hex di komponen.
- **Ikon**: lucide-react saja (sudah terpasang). Ukuran ikon konsisten via token (16/20/24). Icon dekoratif `aria-hidden="true"`.
- **Komentar kode**: TIDAK BOLEH (kecuali TODO wajib untuk user, mis. placeholder foto).
- **Emoji**: tidak dipakai di UI maupun file proyek.

## 2. Skill ui-ux-pro-max (WAJIB untuk semua keputusan desain)

Semua keputusan visual (style, warna, typography, spacing, motion) harus didasarkan hasil search skill ini — jangan dari ingatan/nafsu pribadi.

```bash
# Sekali di awal fase build (task khusus di TASKS.md) — generate & persist design system:
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "freelance developer portfolio landing page professional trustworthy" --design-system --persist -p "Portfolio" --output-dir .
# Dengan dials: --variance 4 --motion 6 --density 4 (halaman marketing: spacing lapang, motion standar)

# Per section/komponen (query satu intent, 2-5 kata kunci):
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "hero social proof" --domain landing
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "scroll reveal stagger" --domain gsap   # konsep motion, adaptasi ke `motion`
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "..." --stack nextjs
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "..." --stack shadcn
```

Aturan pemakaian:
- `--design-system` → persist ke `design-system/portfolio/MASTER.md`; Master adalah source of truth visual. Kalau butuh deviasi per-section, buat file di `design-system/portfolio/pages/`.
- Query maksimal 2–5 istilah, satu intent dominan. Hasil kosong/off-topic → retry SEKALI dengan query lebih sempit; kalau masih gagal, nyatakan tidak ada match dan pakai pedoman umum (beri label).
- Sebelum delivery tiap section, cek Quick Reference §1–§3 skill: kontras, mobile-first (test mental 375px), motion (reduced-motion, exit lebih cepat dari enter).
- Scope catatan: banyak aturan skill ini untuk App UI (native mobile) — untuk web, terapkan yang relevan (kontras, touch target, spacing rhythm, ikon); abaikan safe-area/haptics.

## 3. MCP 21st.dev (referensi komponen berkualitas)

- **`search` / `search_picker` = GRATIS** — pakai bebas untuk cari referensi. **`get_component` = BERKUOTA (paid step)** — hemat!
- **Aturan kuota:** sebelum `get_component` pertama kali dalam sehari, jalankan `get_usage`. Prioritaskan hanya untuk **Hero Section** (kebutuhan eksplisit user) dan komponen kompleks yang jelas menghemat waktu (bento grid showcase). Maks ±2–3 retrieval per fase, kecuali user menyetujui lebih.
- Komponen hasil 21st.dev adalah REFERENSI/bahan baku — WAJIB diadaptasi: ganti styling ke token design system kita, sesuaikan konten ke `src/content/`, pastikan aksesibilitas & responsive. Jangan tempel mentah.
- Kandidat Hero yang sudah diriset (lihat PRD §4.2): #10628, #9037, #5590, #5127.
- `get_theme` gratis — boleh dipakai untuk inspirasi palet, tapi keputusan final lewat ui-ux-pro-max agar konsisten.

## 4. Animasi dengan `motion` (v13)

- Import dari `"motion/react"`. Bungkus pattern reusable di `src/components/motion/` (FadeIn, StaggerList, dsb) — jangan duplikasi varian motion di banyak file.
- **Gerak hormat:** semua animasi entrance/scroll harus dimatikan saat `prefers-reduced-motion: reduce` (cek `useReducedMotion()` atau CSS media query).
- Durasi/easing konsisten: definisikan varian transisi terpusat (satu file `src/components/motion/transitions.ts`); exit lebih cepat dari enter; hindari durasi > 600ms untuk micro-interaction.
- Animasi hanya properties GPU-friendly: `transform` & `opacity`. Jangan animasikan width/height/top/left.
- Scroll-triggered: gunakan `whileInView` + `viewport={{ once: true }}` agar tidak re-trigger.
- Interaktif (mouse-follow glow/dot grid di Hero): throttle via motion values (useMotionValue + useSpring), pasang cleanup listener, nonaktifkan di touch device kalau tidak bermakna, dan jangan blok main thread.

## 5. Standar Kualitas (Definition of Done per task)

- [ ] `npm run lint` bersih (0 error).
- [ ] `npm run build` sukses.
- [ ] Visual dicek logika 375px / 768px / 1024px (pakai penalaran Tailwind breakpoints).
- [ ] Kontras teks ≥ 4.5:1; touch target ≥ 44px; focus state terlihat.
- [ ] Animasi hormat reduced-motion; tidak ada layout shift.
- [ ] Copy bahasa Indonesia, manfaat-oriented, tanpa jargon di section non-teknis.
- [ ] Data/konten dari `src/content/`, bukan hardcode di komponen.
- [ ] Tidak ada emoji, tidak ada komentar kode, tidak ada TODO tanpa tindak lanjut di TASKS.md.

## 6. Konten: Kebenaran & Placeholder

- **Jangan mengarang fakta tentang Tondiki.** Sumber: PRD §5 (ringkasan CV). Kalau butuh data baru (harga, testimonial, foto) → tandai placeholder `[...]` + catat di TASKS.md, jangan isi fiktif.
- Harga paket: `[HARGA_STARTER]` placeholder sampai user memberi angka.
- Foto: SELALU via `PHOTO_SRC` dari `src/content/profile.ts` (PRD §7).
- Teks testimonial fiktif DILARANG (PRD §9).

## 7. Linting & Verifikasi

- `npm run lint` dan `npm run build` WAJIB dijalankan di akhir setiap task yang mengubah kode. Type check tercakup dalam build.
- Kalau ada script verifikasi lain (test), jalankan juga dan laporkan hasil apa adanya.

## 8. Konsistensi Antar-Session

- Selalu mulai session dengan membaca: `TASKS.md` (posisi) → `PRD.md` (bagian relevan) → `design-system/portfolio/MASTER.md` (jika sudah ada) → dokumen ini.
- Update `TASKS.md` (checkbox + catatan singkat) segera setelah task selesai — jangan batch di akhir.
- Kalau menemukan keputusan baru yang berdampak lintas-section (warna, spacing, pattern), catat di MASTER.md / PRD.md, bukan hanya di ingatan.

---

<!-- Blok di bawah ini dikelola otomatis oleh `next dev`. JANGAN dihapus/diubah — commit bersama pekerjaanmu agar tree bersih. -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
