# SKILLS.md — Pemetaan Skill, Tool & MCP untuk Proyek Portfolio Tondiki

Dokumen ini memetakan semua "senjata" yang tersedia, kapan dipakai, dan aturan mainnya. Tujuannya: agent (siapa pun session-nya) selalu tahu tool mana yang tepat untuk kebutuhan tertentu tanpa menebak.

## 1. Peta Prioritas (ringkas)

| Kebutuhan | Tool utama | Cadangan |
|---|---|---|
| Keputusan desain apa pun (warna, font, layout, spacing, motion) | skill `ui-ux-pro-max` | `design-system`, `ui-styling` |
| Referensi komponen siap pakai / pattern UI populer | MCP 21st.dev (`search`) | — |
| Kode komponen 21st.dev (berkuota!) | MCP 21st.dev (`get_component`, max ±2–3/fase) | bangun sendiri dari design system |
| Animasi & interaksi | library `motion` (v13) | konsep GSAP dari ui-ux-pro-max (`--domain gsap`) diadaptasi |
| Komponen shadcn baru | CLI shadcn / referensi skill `ui-styling` | MCP 21st.dev |
| Ikon | `lucide-react` | — |
| Brand/messaging lanjutan (fase depan) | skill `brand` | — |
| Banner OG image / social preview (opsional) | skill `banner-design` | — |

## 2. Skill ui-ux-pro-max — design intelligence (WAJIB)

**Kapan:** setiap keputusan visual; sebelum & sesudah membangun section; review aksesibilitas.

```bash
# Design system sekali di awal (persist → design-system/portfolio/MASTER.md):
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "freelance developer portfolio landing page professional trustworthy" \
  --design-system --persist -p "Portfolio" --output-dir . --variance 4 --motion 6 --density 4

# Domain search per kebutuhan (satu intent, 2–5 istilah):
... search.py "hero social proof" --domain landing
... search.py "pricing card" --domain landing
... search.py "scroll reveal stagger" --domain gsap        # adaptasi konsep ke motion
... search.py "animation accessibility" --domain ux
... search.py "color contrast dark" --domain ux
... search.py "professional modern sans" --domain typography
... search.py "service business palette" --domain color

# Stack guidance (implementasi):
... search.py "server components performance" --stack nextjs
... search.py "button variants theming" --stack shadcn
```

Aturan: hasil kosong → retry SEKALI lebih sempit → kalau masih gagal, gunakan pedoman umum dan LABELI sebagai tidak terverifikasi. Detail lengkap: baca SKILL.md skill tersebut.

## 3. MCP 21st.dev — katalog komponen

| Tool | Biaya | Kapan dipakai |
|---|---|---|
| `search` / `search_picker` | gratis | cari referensi/pattern sebelum membangun komponen apa pun |
| `get_inspiration` | gratis | ranking referensi berbasis konteks proyek |
| `get_component` | BERKUOTA (paid) | hanya Hero Section + komponen kompleks (bento showcase); cek `get_usage` dulu; maks ±2–3/fase |
| `get_theme` | gratis | inspirasi palet (keputusan final tetap via ui-ux-pro-max) |
| `search_logo` | gratis | kalau butuh logo brand/tech di section stack |

Hasil WAJIB diadaptasi (token, konten dari `src/content/`, aksesibilitas) — dilarang tempel mentah.

## 4. Library `motion` (v13) — animasi

- Import: `motion/react`. Wrapper reusable di `src/components/motion/` (FadeIn, StaggerList, transitions.ts).
- GPU-friendly saja (transform/opacity); `whileInView` + `viewport={{ once: true }}` untuk scroll; hormat `prefers-reduced-motion`; exit < enter; micro-interaction ≤ 600ms.
- Mouse-follow: useMotionValue + useSpring, cleanup listener, nonaktif di touch device bila tak bermakna.

## 5. Skill pendukung lain yang sudah terpasang

| Skill | Pakai untuk | Prioritas proyek ini |
|---|---|---|
| `ui-styling` | referensi shadcn (komponen, theming, aksesibilitas) & pattern Tailwind | Tinggi — dipakai saat setup komponen & theming |
| `design-system` | arsitektur token (primitive→semantic→component) bila MASTER.md perlu dirinci ke token terstruktur | Sedang — opsional pengaya MASTER.md |
| `brand` | voice/messaging framework (naris "growth" portfolio) & konsistensi copy | Sedang — saat finalize copywriting |
| `banner-design` / `design` | og-image / preview sosial custom | Rendah — nice-to-have akhir fase |
| `slides` | presentasi (bukan bagian web) | Tidak dipakai |

## 6. Skill open source / buatan sendiri (opsional, izin user dulu)

Kandidat yang layak dipasang kalau kebutuhan muncul — JANGAN install tanpa konfirmasi user (melanggar aturan dependensi):

1. **Skill custom `wa-cta` (buat sendiri, 15 menit)** — generator link WhatsApp baku (nomor, template pesan per-CTA, UTM sederhana) supaya konsisten lintas section. Buat hanya jika terbukti duplikasi logic.
2. **Skill screenshot/thumbnail** (mis. Playwright script di `.opencode/skills/`) — untuk generate thumbnail 3 demo secara programatik dari URL live. Berguna di task Demo Showcase agar preview tidak bergantung iframe berat.
3. Skill open source populer untuk workflow coding-agent (mis. repo superpowers-style) — tidak dibutuhkan untuk scope landing page; skip.

## 7. Tool bawaan opencode

- `bash` (npm/lint/build, python skill scripts), `read/write/edit/glob/grep`, `task` (subagent eksplorasi), `webfetch` (baca docs/demo), `question` (konfirmasi keputusan ke user — WAJIB saat: ganti fase, keputusan desain besar, data yang hanya user tahu).
- Skill `customize-opencode` hanya untuk mengubah konfigurasi opencode itu sendiri — bukan untuk kode proyek.
