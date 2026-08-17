# Design System Master File — Portfolio Tondiki

> **LOGIC:** Saat membangun section, cek dulu `design-system/portfolio/pages/[page].md`. Jika ada, aturannya MENG-OVERRIDE file ini. Jika tidak, ikuti aturan di bawah strictly.

---

**Project:** Portfolio Tondiki (freelance fullstack developer)
**Generated:** 2026-08-16 — via ui-ux-pro-max `--design-system` (variance 4, motion 6, density 4), lalu dikurasi.
**Kurasi (keputusan terdokumentasi):**
1. Hasil generasi pertama (Vibrant & Block-based + font gaming) DITOLAK — tidak sesuai konteks "professional trustworthy".
2. Hasil retry "professional minimal service business" DITERIMA pola & paletnya (Trust & Authority, navy + biru).
3. Font hasil retry (EB Garamond, nuansa kantor hukum) DIGANTI via domain search typography → **Plus Jakarta Sans** (geometric sans tunggal; profesional, approachable, identitas Indonesia, hemat performa satu keluarga).
4. (Redesign, feedback user) Hero & aksen interaktif dinaikkan tier-nya: **hero memakai band navy gelap (bg primary) full-bleed** dengan spotlight mouse-follow + aurora gradient + word-reveal + floating parallax cards + marquee — palet tetap sama, hanya inversi terang/gelap pada section pembuka. Section navy lain (Roadmap, Kontak) memakai pola serupa demi ritme gelap-terang berselang. Teks UI dipangkas: maksimal 1 kalimat per deskripsi, detail panjang → chips/ikon.
5. (Redesign #2, feedback user final) Arah visual FINAL: **portfolio personal photo-forward, bukan SaaS**. Hero navy gelap DITOLAK — diganti split-screen TERANG (ref 21st.dev #5260 + #19074): kiri teks personal ("Halo, saya Tondiki"), kanan FOTO BESAR + badge float + collage mini-mockup. Foto/ilustrasi adalah elemen utama di semua section showcase; teks sekunder. Placeholder foto = ilustrasi flat "foto menyusul" (bukan avatar inisial). Interaksi premium (spotlight/parallax/tilt) boleh dipakai sebagai bumbu, bukan identitas — identitasnya hangat, terang, personal.
6. (Polish terbaru) Hero mengikuti struktur source Minimalist Hero 21st.dev #4582 yang berhasil diambil setelah API key diperbarui: canvas gelap menyatu dengan navbar, grid 3 kolom, portrait masked/scale di tengah dengan circle aksen, overlay headline kanan, copy/link kiri, dan location/social row bawah. Warna/content/foto diadaptasi untuk Tondiki; image lokal menggantikan asset reference. Hero desktop dikunci satu viewport setelah navbar. Portfolio memakai tiga visual setara berasio 16:10; layanan memakai enam kartu simetris dalam grid 3 kolom tanpa featured treatment. Render animation aktif saat elemen masuk viewport (`whileInView` sekali; reduced-motion mematikan); interaction hanya untuk CTA, menu, carousel, service cards, dan elemen navigasi. (Copy hero T37) Tulisan besar hero berbahasa calon klien (bukan jargon teknis): "Halo, saya Tondiki / developer website & mobile" — sapaan + nama + profesi dalam istilah awam; subheadline membawa benefit + growth narrative. (T38) Ukuran headline di-repos: clamp `1.75rem→3rem` (2.75vw), leading 1.05, tracking -0.04em — bukan raksasa; grid 3 kolom dipindah ke `lg:grid-cols-3` (768-1023 pakai single column agar headline tidak sempit 235px); tanpa titik akhir baris agar tidak terasa penuh. (T39, feedback user) Font overlay diperbesar lagi ke `clamp(2.25rem,3.25vw,4rem)` — 46.8px di desktop, 36px mobile, tetap 3 baris tanpa clipping.
7. (Foto hero) Foto asli `tondiki-profile-transparent.png` (transparan, `sips -Z 700` untuk payload). Wrapper foto pakai `shrink-0` karena flex-shrink default mengecilkannya ke lebar kolom grid; ukuran: mobile `min(82vw,24rem)` (±308px), md `32rem` (512px), lg `36rem` (576px) — lebih besar dari circle aksen (500px). `unoptimized` dipakai karena optimizer Next merusak alpha RGBA (sharp → palette indexed 1-bit). Ujung bawah difade halus via mask `.hero-portrait-fade` (`linear-gradient(black 72%, transparent 100%)`) — subjek larut ke background, bukan vignette penuh; tanpa efek hitam-putih.
8. (Layanan T40) Promo utama memakai pola pricing conversion: Landing Page sebagai featured starter full-width dengan badge `hero-accent` amber, harga transparan, saving label, benefit list, CTA WhatsApp dan link demo; layanan lain tetap kartu simetris dengan CTA tunggal. Palette tidak diubah: navy `primary` untuk authority, `cta` trust blue untuk aksi, amber hanya untuk highlight promo agar hierarki tidak menjadi playful atau SaaS.
9. (Layanan T41) Arah final section Layanan: semua service card identik dan simetris; Launch Promo dipisah sebagai banner kampanye mandiri dengan countdown sampai 31 Agustus 2026. Idle motion hanya transform/opacity dan harus berhenti pada reduced-motion; card tilt/hover tetap subtle, bukan perbedaan hierarki antar layanan.
10. (Layanan T42) Launch Promo dipadatkan dan di-merge ke header Layanan; card tetap identik. Motion layer final: render stagger, pointer spotlight, tilt/lift/tap interaction, icon float, dan idle sheen; motion dibatasi transform/opacity dan semua dihentikan pada reduced-motion.
11. (Layanan T43) Feedback motion final: sheen/pointer spotlight dan perubahan warna pada service card dihapus. Idle animation sekarang menggerakkan seluruh card naik-turun sangat halus; interaction hanya pop transform (lift + scale + tap), tanpa perubahan warna/border/shadow.
12. (Layanan T44) Idle animation card dihapus total (feedback user): card layanan statis, transform `none`. Interaction tetap pop transform (hover lift+scale, tap scale); tidak ada animasi warna/border/shadow di card.
13. (Copy T45) Copywriting section Layanan & Portfolio dirombak berbasis riset pasar freelance (ID + global): daftar layanan mengikuti demand tertinggi — Landing Page, Company Profile, Booking, **Toko Online** (pengganti Katalog & Pesanan), Mobile MVP, Custom (card terakhir). Copy promo menegaskan deadline & "kembali normal" (urgency transparan); deskripsi card satu pesan kunci per card (pola feature-rich-showcase). Portfolio: copy generik & pluggable (tanpa enumerasi jumlah/niche) agar demo baru cukup ditambah di data; subtitle menegaskan "live website yang bisa dibuka". Semua copy bilingual di dictionary, tidak ada hardcode di komponen.
14. (Harga T46) Strategi harga final (provisional, perlu konfirmasi user): "di bawah pasar tapi tidak murahan" — di atas lantai mass-market (500rb–1jt) dan di bawah tarif agensi profesional. Landing 2,5jt→1,5jt; Company 3,5jt→2,5jt; Booking 6jt→4,5jt; Toko Online 7,5jt→5,5jt; Mobile MVP 12jt→9jt; Custom mulai 8jt→6,5jt. Diskon launch 19–40%. Copy juga dipangkas: services subtitle & launchPromoDescription tanpa pengulangan "kembali normal"; deskripsi card ≤ ~110 karakter, satu pesan kunci; portfolio subtitle & CTA band lebih ringkas tanpa kata redundan ("bukan sekadar desain" dihapus).
15. (Icon & Email T48) WhatsApp icon tidak lagi `MessageCircle` (chat bubble) tapi glyph resmi WhatsApp (`src/components/whatsapp-icon.tsx`, path simple-icons, `fill="currentColor"` agar mengikuti warna teks/CTA). Diterapkan di semua aksi WA nyata: hero CTA, contact (info row + CTA), services (2 CTA), demo-showcase (askLabel + ctaBand). `MessageCircle` tetap dipakai hanya untuk step "Konsultasi" di process (konsep diskusi, bukan link WA). Email dibuat fungsional: tombol mailto diganti form kontak (nama, email, pesan) yang menyusun `mailto:` terisi lalu membuka klien email — berfungsi tanpa backend (cocok static export). Catatan arsitektur: kirim email langsung dari server butuh provider (Resend/Web3Forms/Formspree) + API key, belum diimplementasi.

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#0F172A` | `--color-primary` (navy — authority) |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#334155` | `--color-secondary` (slate) |
| On Secondary | `#FFFFFF` | `--color-on-secondary` |
| Accent/CTA | `#0369A1` | `--color-accent` (trust blue — CTA & link) |
| On Accent | `#FFFFFF` | `--color-on-accent` |
| Background | `#F8FAFC` | `--color-background` |
| Foreground | `#020617` | `--color-foreground` |
| Card | `#FFFFFF` | `--color-card` |
| Card Foreground | `#020617` | `--color-card-foreground` |
| Muted | `#E8ECF1` | `--color-muted` |
| Muted Foreground | `#475569` | `--color-muted-foreground` |
| Border | `#E2E8F0` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#0F172A` | `--color-ring` |

**Color strategy:** Navy/grey corporate sebagai fondasi; trust blue HANYA untuk CTA/link/interaktif — jangan pakai biru untuk dekorasi berlebihan. AI purple/pink gradients DILARANG.

### Typography

- **Font tunggal:** Plus Jakarta Sans (variable, Google Fonts) — ExtraBold 800 hero/H1 (line-height 1.1–1.2), Bold 700 section header, SemiBold 600 card title & button, Regular 400 body (line-height 1.5–1.6).
- Muat via `next/font` (bukan CSS @import) dengan `display: swap`.
- Ukuran fluid: H1 clamp(2.25rem→3.75rem), H2 section clamp(1.75rem→2.5rem), body 1rem/1.125rem.

### Spacing Variables

*Density 4/10 — marketing page, lapang*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps, inline |
| `--space-md` | `16px` | Padding standar |
| `--space-lg` | `24px` | Padding kartu |
| `--space-xl` | `32px` | Gap besar |
| `--space-2xl` | `48px` | Margin antar elemen section |
| `--space-3xl` | `64px` | `py` section mobile |
| `--space-4xl` | `96px` | `py` section desktop |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(2,6,23,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(2,6,23,0.07)` | Cards |
| `--shadow-lg` | `0 10px 15px rgba(2,6,23,0.1)` | Dropdown, hover card |
| `--shadow-xl` | `0 20px 25px rgba(2,6,23,0.12)` | Featured card, hero visual |

Radius: kartu 12px, tombol 8px (atau full-round untuk pill). Konsisten satu sistem.

---

## Component Specs

### Buttons

- **Primary (CTA):** bg accent `#0369A1`, teks putih, py-3 px-5, radius 8px, SemiBold 600; hover: darken + `translateY(-1px)`; transisi 200ms; touch target min 44px.
- **Secondary/Outline:** transparan, border 1.5px accent, teks accent; hover: bg accent 10% opacity.
- **Ghost:** teks foreground, hover bg muted. Semua: `cursor-pointer`, focus ring 2px `--color-ring` offset 2px terlihat.

### Cards

bg card putih, border 1px `--color-border`, radius 12px, padding `--space-lg`, shadow-sm; hover (jika interaktif): shadow-lg + `translateY(-2px)` (transisi 200ms, tidak shift layout tetangga).

---

## Style Guidelines

**Style:** Accessible & Ethical (diadaptasi) — tinggi kontras, semantic, keyboard-friendly, focus state jelas, teks ≥16px.

**Page Pattern: Trust & Authority + Conversion**
- Strategi: credibility dulu (stats, bukti pengalaman, demo live), lalu CTA jelas.
- CTA placement: Nav (sticky) + Hero + setelah showcase + section kontak final.
- Section order aktual mengikuti keputusan user terbaru: Hero → Layanan → Portfolio → Tentang (timeline + tech stack + pendidikan) → Proses → Kontak.

---

## Motion (tier Standard, adaptasi ke `motion` v13 — bukan GSAP)

- **Stagger List** (utama): opacity 0→1, y 16→0, durasi 300–450ms, stagger 60ms antar item, easing keluar lembut (kurva ~cubic-bezier(0.34,1.56,0.64,1) untuk entrance kartu; TANPA overshoot pada elemen informasional — pakai ease-out biasa untuk teks/angka).
- **Scroll reveal:** `whileInView` + `viewport={{ once: true }}`, margin trigger ±80px.
- **Hover micro-interaction:** 150–250ms, transform/opacity saja.
- **Exit lebih cepat dari enter** (±60–70% durasi enter).
- **Interaktif mouse-follow (Hero):** useMotionValue + useSpring (stiffness sedang), cleanup listener, matikan di touch device & `prefers-reduced-motion`.
- Semua animasi hanya `transform` & `opacity`. Dilarang animasi width/height/top/left atau durasi micro-interaction > 600ms.

---

## Anti-Patterns (DILARANG)

- Desain playful/berlebihan, gradien AI purple/pink.
- Emoji sebagai ikon (pakai Lucide).
- Klikable tanpa `cursor:pointer`, hover tanpa transisi (harus 150–300ms).
- Hover/transform yang menggeser layout tetangga.
- Teks kontras < 4.5:1 (mode terang), focus state tak terlihat.
- Animasi tanpa hormat `prefers-reduced-motion`.
- Hardcode hex di komponen — WAJIB via CSS variable/token.

---

## Pre-Delivery Checklist (tiap section)

- [ ] Tanpa emoji sebagai ikon; ikon Lucide konsisten ukuran (16/20/24).
- [ ] `cursor-pointer` semua elemen klikable; transisi hover 150–300ms.
- [ ] Kontras teks ≥ 4.5:1; focus ring terlihat.
- [ ] `prefers-reduced-motion` dihormati; tidak ada layout shift/CLS.
- [ ] Responsive 375 / 768 / 1024 / 1440; tanpa horizontal scroll mobile; konten tidak tertutup navbar sticky.
- [ ] Semua warna/spacing via token, bukan nilai lepas.
