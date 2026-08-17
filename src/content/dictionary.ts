export type Lang = "id" | "en";

export const dictionary = {
  id: {
    site: {
      role: "Freelance Fullstack Developer",
      tagline: "Web & Mobile",
      location: "Jakarta Selatan, Indonesia",
      serviceArea: "Remote",
      responseTime: "Balasan cepat di jam kerja (09.00–21.00 WIB)",
    },
    nav: {
      items: [
        {href: "#layanan", label: "Layanan"},
        {href: "#demo", label: "Portfolio"},
        {href: "#tentang", label: "Tentang"},
        {href: "#kontak", label: "Kontak"},
      ] as const,
      cta: "Konsultasi Gratis",
      mainNavAria: "Navigasi utama",
      mobileNavAria: "Navigasi utama mobile",
      openMenu: "Buka menu navigasi",
      closeMenu: "Tutup menu navigasi",
      languageLabel: "Ganti ke bahasa Inggris",
    },
    wa: {
      general:
        "Halo Tondiki, saya tertarik dengan jasa pembuatan website. Boleh info lebih lanjut?",
      consultation:
        "Halo Tondiki, saya ingin konsultasi soal website untuk bisnis saya.",
      demo: (demoTitle: string) =>
        `Halo Tondiki, saya tertarik dengan demo website "${demoTitle}". Boleh info lebih lanjut?`,
      service: (serviceTitle: string) =>
        `Halo Tondiki, saya tertarik dengan paket "${serviceTitle}". Boleh info lebih lanjut?`,
    },
    trustStats: [
      {value: "4+", label: "tahun pengalaman"},
      {value: "5.000+", label: "pengguna dilayani"},
      {value: "3", label: "demo siap pakai"},
    ] as const,
    hero: {
      photoAlt: "Foto Tondiki Andika Gurning, freelance fullstack developer",
      overlayPart1: "Halo, saya Tondiki",
      overlayPart2: "developer aplikasi website & mobile",
      subheadline:
        "Butuh tampil profesional di internet? Saya bantu dari landing page siap pakai yang terjangkau sampai sistem yang lebih besar saat bisnismu tumbuh.",
      ctaPrimary: "Lihat Demo",
    },
    services: {
      eyebrow: "Layanan",
      title: "Mulai dari yang dibutuhkan sekarang.",
      subtitle:
        "Pilih yang paling dekat dengan usahamu — semua bisa dikembangkan nanti. Kalau ragu, diskusikan dulu, gratis.",
      promoLabel: "Launch Promo",
      launchPromoTitle: "Harga perkenalan, sebelum kembali normal.",
      launchPromoDescription:
        "Harga di bawah sudah termasuk diskon launch. Setelah 31 Agustus 2026 kembali normal.",
      launchPromoDeadline: "Berakhir 31 Agustus 2026",
      launchPromoCta: "Tanya harga promo",
      cardPromoLabel: "Harga promo",
      countdownLabel: "Promo berakhir dalam",
      countdownDays: "Hari",
      countdownHours: "Jam",
      countdownMinutes: "Menit",
      countdownSeconds: "Detik",
      countdownExpired: "Promo telah berakhir",
      ctaLabel: "Tanya harga",
      cards: [
        {
          icon: "landing",
          title: "Landing Page",
          description:
            "Satu halaman yang mengubah pengunjung iklan dan media sosial jadi chat WhatsApp. Cara tercepat tampil profesional.",
          normalPrice: "Rp 2.500.000",
          promoPrice: "Rp 1.500.000",
        },
        {
          icon: "company",
          title: "Website Company Profile",
          description:
            "Pusat informasi layanan, tim, dan lokasi yang membangun kepercayaan — modal awal kemitraan baru.",
          normalPrice: "Rp 3.500.000",
          promoPrice: "Rp 2.500.000",
        },
        {
          icon: "booking",
          title: "Booking & Reservasi",
          description:
            "Pelanggan memilih jadwal dan memesan sendiri — tanpa bolak-balik chat, tanpa jadwal ganda.",
          normalPrice: "Rp 6.000.000",
          promoPrice: "Rp 4.500.000",
        },
        {
          icon: "ecommerce",
          title: "Toko Online",
          description:
            "Produk lengkap dengan keranjang, alur pemesanan, dan pembayaran digital — pelanggan bisa beli kapan saja.",
          normalPrice: "Rp 7.500.000",
          promoPrice: "Rp 5.500.000",
        },
        {
          icon: "mobile",
          title: "Aplikasi Mobile MVP",
          description:
            "Versi awal aplikasi untuk menguji ide di Play Store & App Store sebelum investasi lebih besar.",
          normalPrice: "Rp 12.000.000",
          promoPrice: "Rp 9.000.000",
        },
        {
          icon: "custom",
          title: "Website Custom",
          description:
            "Butuh alur, fitur, atau sistem yang belum ada di daftar ini? Kita rancang dari nol sesuai cara kerja bisnismu.",
          normalPrice: "Mulai Rp 8.000.000",
          promoPrice: "Mulai Rp 6.500.000",
        },
      ] as const,
    },
    demos: {
      eyebrow: "Portfolio",
      title: "Demo aplikasi yang bisa kamu buka langsung.",
      subtitle: "Buka, rasakan, lalu kita buatkan yang sejenis untuk usahamu.",
      visitLabel: "Kunjungi Demo",
      askLabel: "Tanya demo ini",
      previousLabel: "Gambar sebelumnya",
      nextLabel: "Gambar berikutnya",
      playLabel: "Putar otomatis",
      pauseLabel: "Jeda otomatis",
      galleryLabel: (title: string) => `Slide portfolio ${title}`,
      galleryImageLabel: (index: number, total: number) =>
        `Lihat gambar ${index} dari ${total}`,
      items: [
        {
          id: "aesthetic-clinic",
          title: "Aesthetic Clinic",
          serviceType: "Landing page",
          niche: "Klinik kecantikan & aesthetics",
          url: "https://aesthetic-clinic-concept.vercel.app/",
          description:
            "Elegan dan terpercaya — bikin pasien baru yakin sejak klik pertama.",
          image: "/images/demos/clinic.jpg",
          imageAlt: "Tampilan website demo Aesthetic Clinic",
          gallery: [
            {
              src: "/images/demos/clinic.jpg",
              alt: "Hero website Aesthetic Clinic",
            },
            {
              src: "/images/demos/clinic-treatments.jpg",
              alt: "Section treatment Aesthetic Clinic",
            },
            {
              src: "/images/demos/clinic-doctors.jpg",
              alt: "Section dokter Aesthetic Clinic",
            },
            {
              src: "/images/demos/clinic-location.jpg",
              alt: "Section lokasi Aesthetic Clinic",
            },
          ] as const,
        },
        {
          id: "spa-reflexology",
          title: "Spa & Reflexology",
          serviceType: "Landing page",
          niche: "Spa, reflexology, & wellness",
          url: "https://spa-reflexology-demo.vercel.app/",
          description:
            "Nuansa tenang yang mengundang pelanggan relaksasi dan memesan.",
          image: "/images/demos/spa.jpg",
          imageAlt: "Tampilan website demo Spa & Reflexology",
          gallery: [
            {
              src: "/images/demos/spa.jpg",
              alt: "Hero website Spa & Reflexology",
            },
            {
              src: "/images/demos/spa-treatments.jpg",
              alt: "Section treatment Spa & Reflexology",
            },
            {
              src: "/images/demos/spa-gallery.jpg",
              alt: "Gallery Spa & Reflexology",
            },
            {
              src: "/images/demos/spa-location.jpg",
              alt: "Section lokasi Spa & Reflexology",
            },
          ] as const,
        },
        {
          id: "wedding-organizer",
          title: "Wedding Organizer",
          serviceType: "Landing page",
          niche: "Wedding organizer & event",
          url: "https://wedding-organizer-demo.vercel.app/",
          description:
            "Romantis dan memukau — showcase karya yang meyakinkan calon klien.",
          image: "/images/demos/wedding.jpg",
          imageAlt: "Tampilan website demo Wedding Organizer",
          gallery: [
            {
              src: "/images/demos/wedding.jpg",
              alt: "Hero website Wedding Organizer",
            },
            {
              src: "/images/demos/wedding-packages.jpg",
              alt: "Section paket Wedding Organizer",
            },
            {
              src: "/images/demos/wedding-gallery.jpg",
              alt: "Gallery Wedding Organizer",
            },
            {
              src: "/images/demos/wedding-contact.jpg",
              alt: "Section kontak Wedding Organizer",
            },
          ] as const,
        },
      ] as const,
      ctaBand: {
        title: "Suka salah satunya?",
        description:
          "Kirim yang paling mendekati usahamu — warna, isi, dan fiturnya kita sesuaikan bersama.",
        ctaLabel: "Diskusikan via WhatsApp",
      } as const,
    },
    about: {
      eyebrow: "Tentang",
      title: "Saya yang akan mengerjakan website-mu.",
      summary:
        "Saya membangun web dan mobile selama 4+ tahun. Kamu dapat komunikasi yang jelas, proses yang rapi, dan website yang siap dipakai.",
      philosophy: "Teknologi saya urus. Kamu tetap memegang arah bisnisnya.",
      techTitle: "Teknologi yang saya gunakan",
      careerTitle: "Perjalanan Karier",
      educationTitle: "Pendidikan",
      highlights: [
        {
          id: "halal",
          title: "Platform Sertifikasi Halal Digital",
          org: "Kementerian Agama (via PT Teknologi Sosial Nusantara)",
          description:
            "Fitur kritis & bugfix untuk platform resmi sertifikasi halal nasional.",
        },
        {
          id: "adira",
          title: "Platform Pembiayaan",
          org: "PT Adira Dinamika Multi Finance Tbk",
          description: "Frontend web/mobile yang dilayani 5.000+ pengguna.",
        },
        {
          id: "social",
          title: "Aplikasi Social Media Mobile",
          org: "PT Teknologi Sosial Nusantara",
          description:
            "End-to-end: database, feed dinamis, sampai in-app calling.",
        },
        {
          id: "testing",
          title: "Infrastruktur Testing",
          org: "Hyperscal",
          description: "Coverage 80%, waktu QA turun 60%.",
        },
      ] as const,
      timeline: [
        {
          id: "hyperscal",
          role: "Front-end Test Engineer",
          org: "Hyperscal",
          period: "Nov 2025 — Sekarang",
          points: [
            "Infrastruktur testing dari nol — 80% coverage",
            "Otomasi Jest, Playwright, Maestro — QA turun 60%",
          ] as const,
        },
        {
          id: "tsn",
          role: "Fullstack Developer",
          org: "PT Teknologi Sosial Nusantara",
          period: "Jun 2022 — Nov 2025",
          points: [
            "Platform sertifikasi Halal digital Kementerian Agama",
            "Aplikasi social media mobile & arsitektur database-nya",
          ] as const,
        },
        {
          id: "adira",
          role: "Front-end Developer",
          org: "PT Adira Dinamika Multi Finance Tbk",
          period: "Mar 2025 — Jun 2025",
          points: [
            "Platform Pembiayaan web/mobile — 5.000+ pengguna",
            "Call Management System native + mentoring junior",
          ] as const,
        },
        {
          id: "metranet",
          role: "Front-end Developer (Freelance)",
          org: "PT METRA-NET",
          period: "Feb 2022 — Mei 2022",
          points: ["Pengembangan frontend untuk kebutuhan klien"] as const,
        },
      ] as const,
      education: [
        {
          id: "hacktiv8",
          name: "Fullstack JavaScript Course",
          org: "Hacktiv8",
          period: "2021 — 2022",
          note: "Lulus dengan distinction — team leader final project.",
        },
        {
          id: "sma",
          name: "SMA Negeri 5 Depok",
          org: "Ilmu Pengetahuan Sosial",
          period: "2018 — 2021",
          note: null,
        },
      ] as const,
      skillGroups: [
        {
          id: "frontend",
          title: "Frontend",
          items: [
            "React",
            "React Native",
            "Vue",
            "Next.js",
            "Nuxt",
            "Flutter",
            "Tailwind CSS",
            "Bootstrap",
            "MUI",
            "Ant Design",
            "Vuetify",
          ] as const,
        },
        {
          id: "backend",
          title: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "Spring Boot",
            "Gin",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "WebSockets",
          ] as const,
        },
        {
          id: "deploy",
          title: "Deployment & Tools",
          items: [
            "Docker",
            "Firebase",
            "Vercel",
            "Heroku",
            "Supabase",
            "Railway",
            "CI/CD",
            "Git",
          ] as const,
        },
        {
          id: "testing",
          title: "Testing",
          items: [
            "Jest",
            "Testing Library",
            "Cypress",
            "Playwright",
            "Maestro",
          ] as const,
        },
        {
          id: "bahasa",
          title: "Bahasa",
          items: [
            "JavaScript",
            "TypeScript",
            "Java",
            "Kotlin",
            "Go",
            "Dart",
            "HTML5",
            "CSS3",
          ] as const,
        },
      ] as const,
    },
    process: {
      eyebrow: "Proses",
      title: "Tidak perlu ribet.",
      subtitle:
        "Dari ngobrol sampai tayang, kamu selalu tahu langkah berikutnya.",
      steps: [
        {
          id: "consult",
          title: "Konsultasi",
          description:
            "Ceritakan usaha, tujuan, dan fitur yang kamu bayangkan.",
        },
        {
          id: "custom",
          title: "Kustomisasi",
          description:
            "Pilih contoh yang cocok, lalu kita sesuaikan warna dan isinya.",
        },
        {
          id: "build",
          title: "Build & Revisi",
          description: "Saya bangun, kamu cek, lalu kita rapikan bersama.",
        },
        {
          id: "launch",
          title: "Launching",
          description: "Tayang di domainmu dan siap menerima pelanggan.",
        },
      ] as const,
    },
    contact: {
      eyebrow: "Kontak",
      title: "Punya ide? Ceritakan saja.",
      subtitle: "Kita mulai dari kebutuhan nyata, bukan paket yang dipaksakan.",
      ctaWa: "Chat via WhatsApp",
      ctaEmail: "Kirim Email",
      infoLabels: {
        whatsapp: "WhatsApp",
        email: "Email",
        location: "Lokasi",
        area: "Area layanan",
        response: "Waktu respon",
      } as const,
    },
    footer: {
      portfolioLink: "Portfolio",
    },
  },
  en: {
    site: {
      role: "Freelance Fullstack Developer",
      tagline: "Web & Mobile",
      location: "East Jakarta, Indonesia",
      serviceArea: "Remote — serving all of Indonesia",
      responseTime: "Fast replies during business hours (09:00–18:00 WIB)",
    },
    nav: {
      items: [
        {href: "#layanan", label: "Services"},
        {href: "#demo", label: "Portfolio"},
        {href: "#tentang", label: "About"},
        {href: "#kontak", label: "Contact"},
      ] as const,
      cta: "Free Consultation",
      mainNavAria: "Main navigation",
      mobileNavAria: "Mobile main navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      languageLabel: "Switch to Indonesian",
    },
    wa: {
      general:
        "Hi Tondiki, I'm interested in your website development services. Could you share more info?",
      consultation:
        "Hi Tondiki, I'd like to consult about a website for my business.",
      demo: (demoTitle: string) =>
        `Hi Tondiki, I'm interested in the website demo "${demoTitle}". Could you share more info?`,
      service: (serviceTitle: string) =>
        `Hi Tondiki, I'm interested in the "${serviceTitle}" package. Could you share more info?`,
    },
    trustStats: [
      {value: "4+", label: "years of experience"},
      {value: "5,000+", label: "users served"},
      {value: "3", label: "ready-to-use demos"},
    ] as const,
    hero: {
      photoAlt:
        "Photo of Tondiki Andika Gurning, freelance fullstack developer",
      overlayPart1: "Hi, I'm Tondiki",
      overlayPart2: "website & mobile application developer",
      subheadline:
        "Need to look professional online? I can help from an affordable ready-to-use landing page to bigger systems as your business grows.",
      ctaPrimary: "See Landing Page Demos",
    },
    services: {
      eyebrow: "Services",
      title: "Start with what your business needs today.",
      subtitle:
        "Pick the closest fit — everything can grow later. Not sure? Let's talk first, free.",
      promoLabel: "Launch Promo",
      launchPromoTitle: "Introductory pricing, before it returns to normal.",
      launchPromoDescription:
        "Prices below already include the launch discount. After August 31, 2026, they return to normal.",
      launchPromoDeadline: "Ends August 31, 2026",
      launchPromoCta: "Discuss promo pricing",
      cardPromoLabel: "Promo price",
      countdownLabel: "Promo ends in",
      countdownDays: "Days",
      countdownHours: "Hours",
      countdownMinutes: "Minutes",
      countdownSeconds: "Seconds",
      countdownExpired: "The promo has ended",
      ctaLabel: "Ask for pricing",
      cards: [
        {
          icon: "landing",
          title: "Landing Page",
          description:
            "A focused page that turns ad and social media visitors into WhatsApp chats. The fastest way to look professional.",
          normalPrice: "IDR 2,500,000",
          promoPrice: "IDR 1,500,000",
        },
        {
          icon: "company",
          title: "Company Profile Website",
          description:
            "A clear home for your services, team, and location that builds trust — a foundation for new partnerships.",
          normalPrice: "IDR 3,500,000",
          promoPrice: "IDR 2,500,000",
        },
        {
          icon: "booking",
          title: "Booking & Reservations",
          description:
            "Customers pick a schedule and book on their own — no endless back-and-forth, no double bookings.",
          normalPrice: "IDR 6,000,000",
          promoPrice: "IDR 4,500,000",
        },
        {
          icon: "ecommerce",
          title: "Online Store",
          description:
            "Show products with a cart, ordering flow, and digital payments — customers can buy anytime, anywhere.",
          normalPrice: "IDR 7,500,000",
          promoPrice: "IDR 5,500,000",
        },
        {
          icon: "mobile",
          title: "Mobile App MVP",
          description:
            "A focused first version to test your idea on the Play Store and App Store before a bigger investment.",
          normalPrice: "IDR 12,000,000",
          promoPrice: "IDR 9,000,000",
        },
        {
          icon: "custom",
          title: "Custom Website",
          description:
            "Need a flow, feature, or system not on this list? Let's design it from scratch around how your business works.",
          normalPrice: "From IDR 8,000,000",
          promoPrice: "From IDR 6,500,000",
        },
      ] as const,
    },
    demos: {
      eyebrow: "Portfolio",
      title: "Real results you can open right now.",
      subtitle:
        "Every example is a live website you can open and feel. We can build something similar for your business.",
      visitLabel: "Visit Demo",
      askLabel: "Ask about this demo",
      previousLabel: "Previous image",
      nextLabel: "Next image",
      playLabel: "Play automatically",
      pauseLabel: "Pause automatically",
      galleryLabel: (title: string) => `${title} portfolio slideshow`,
      galleryImageLabel: (index: number, total: number) =>
        `View image ${index} of ${total}`,
      items: [
        {
          id: "aesthetic-clinic",
          title: "Aesthetic Clinic",
          serviceType: "Landing page",
          niche: "Beauty & aesthetics clinic",
          url: "https://aesthetic-clinic-concept.vercel.app/",
          description:
            "Elegant and trustworthy — new patients feel confident from the first click.",
          image: "/images/demos/clinic.jpg",
          imageAlt: "Aesthetic Clinic demo website preview",
          gallery: [
            {
              src: "/images/demos/clinic.jpg",
              alt: "Aesthetic Clinic website hero",
            },
            {
              src: "/images/demos/clinic-treatments.jpg",
              alt: "Aesthetic Clinic treatments section",
            },
            {
              src: "/images/demos/clinic-doctors.jpg",
              alt: "Aesthetic Clinic doctors section",
            },
            {
              src: "/images/demos/clinic-location.jpg",
              alt: "Aesthetic Clinic locations section",
            },
          ] as const,
        },
        {
          id: "spa-reflexology",
          title: "Spa & Reflexology",
          serviceType: "Landing page",
          niche: "Spa, reflexology & wellness",
          url: "https://spa-reflexology-demo.vercel.app/",
          description:
            "A calm atmosphere that invites customers to relax and book.",
          image: "/images/demos/spa.jpg",
          imageAlt: "Spa & Reflexology demo website preview",
          gallery: [
            {
              src: "/images/demos/spa.jpg",
              alt: "Spa & Reflexology website hero",
            },
            {
              src: "/images/demos/spa-treatments.jpg",
              alt: "Spa & Reflexology treatments section",
            },
            {
              src: "/images/demos/spa-gallery.jpg",
              alt: "Spa & Reflexology gallery",
            },
            {
              src: "/images/demos/spa-location.jpg",
              alt: "Spa & Reflexology locations section",
            },
          ] as const,
        },
        {
          id: "wedding-organizer",
          title: "Wedding Organizer",
          serviceType: "Landing page",
          niche: "Wedding organizer & events",
          url: "https://wedding-organizer-demo.vercel.app/",
          description:
            "Romantic and stunning — a showcase that convinces prospective clients.",
          image: "/images/demos/wedding.jpg",
          imageAlt: "Wedding Organizer demo website preview",
          gallery: [
            {
              src: "/images/demos/wedding.jpg",
              alt: "Wedding Organizer website hero",
            },
            {
              src: "/images/demos/wedding-packages.jpg",
              alt: "Wedding Organizer packages section",
            },
            {
              src: "/images/demos/wedding-gallery.jpg",
              alt: "Wedding Organizer gallery",
            },
            {
              src: "/images/demos/wedding-contact.jpg",
              alt: "Wedding Organizer contact section",
            },
          ] as const,
        },
      ] as const,
      ctaBand: {
        title: "Like one of them?",
        description:
          "Send the one closest to your business — we'll shape its colors, content, and features together.",
        ctaLabel: "Discuss on WhatsApp",
      } as const,
    },
    about: {
      eyebrow: "About",
      title: "I will be the person building your website.",
      summary:
        "I have spent 4+ years building web and mobile products. You get clear communication, a calm process, and a website ready to use.",
      philosophy:
        "I handle the technology. You keep control of the business direction.",
      techTitle: "Technologies I use",
      careerTitle: "Career Journey",
      educationTitle: "Education",
      highlights: [
        {
          id: "halal",
          title: "Digital Halal Certification Platform",
          org: "Ministry of Religious Affairs (via PT Teknologi Sosial Nusantara)",
          description:
            "Critical features & bug fixes for the official national halal certification platform.",
        },
        {
          id: "adira",
          title: "Financing Platform",
          org: "PT Adira Dinamika Multi Finance Tbk",
          description: "Web/mobile frontend serving 5,000+ users.",
        },
        {
          id: "social",
          title: "Mobile Social Media App",
          org: "PT Teknologi Sosial Nusantara",
          description:
            "End-to-end: database, dynamic feed, up to in-app calling.",
        },
        {
          id: "testing",
          title: "Testing Infrastructure",
          org: "Hyperscal",
          description: "80% coverage, QA time down 60%.",
        },
      ] as const,
      timeline: [
        {
          id: "hyperscal",
          role: "Front-end Test Engineer",
          org: "Hyperscal",
          period: "Nov 2025 — Present",
          points: [
            "Testing infrastructure from scratch — 80% coverage",
            "Jest, Playwright, Maestro automation — QA time down 60%",
          ] as const,
        },
        {
          id: "tsn",
          role: "Fullstack Developer",
          org: "PT Teknologi Sosial Nusantara",
          period: "Jun 2022 — Nov 2025",
          points: [
            "Digital halal certification platform for the Ministry of Religious Affairs",
            "Mobile social media app & its database architecture",
          ] as const,
        },
        {
          id: "adira",
          role: "Front-end Developer",
          org: "PT Adira Dinamika Multi Finance Tbk",
          period: "Mar 2025 — Jun 2025",
          points: [
            "Car Credit & Umrah web/mobile modules — 5,000+ users",
            "Native Call Management System + junior mentoring",
          ] as const,
        },
        {
          id: "metranet",
          role: "Front-end Developer (Freelance)",
          org: "PT METRA-NET",
          period: "Feb 2022 — May 2022",
          points: ["Frontend development for client needs"] as const,
        },
      ] as const,
      education: [
        {
          id: "hacktiv8",
          name: "Fullstack JavaScript Course",
          org: "Hacktiv8",
          period: "2021 — 2022",
          note: "Graduated with distinction — team leader of the final project.",
        },
        {
          id: "sma",
          name: "SMAN 5 Depok",
          org: "Social Sciences",
          period: "2018 — 2021",
          note: null,
        },
      ] as const,
      skillGroups: [
        {
          id: "frontend",
          title: "Frontend",
          items: [
            "React",
            "React Native",
            "Vue",
            "Next.js",
            "Nuxt",
            "Flutter",
            "Tailwind CSS",
            "Bootstrap",
            "MUI",
            "Ant Design",
            "Vuetify",
          ] as const,
        },
        {
          id: "backend",
          title: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "Spring Boot",
            "Gin",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "WebSockets",
          ] as const,
        },
        {
          id: "deploy",
          title: "Deployment & Tools",
          items: [
            "Docker",
            "Firebase",
            "Vercel",
            "Heroku",
            "Supabase",
            "Railway",
            "CI/CD",
            "Git",
          ] as const,
        },
        {
          id: "testing",
          title: "Testing",
          items: [
            "Jest",
            "Testing Library",
            "Cypress",
            "Playwright",
            "Maestro",
          ] as const,
        },
        {
          id: "bahasa",
          title: "Languages",
          items: [
            "JavaScript",
            "TypeScript",
            "Java",
            "Kotlin",
            "Go",
            "Dart",
            "HTML5",
            "CSS3",
          ] as const,
        },
      ] as const,
    },
    process: {
      eyebrow: "Process",
      title: "No unnecessary complexity.",
      subtitle:
        "From the first conversation to launch, you always know what comes next.",
      steps: [
        {
          id: "consult",
          title: "Consultation",
          description:
            "Share your business, goals, and the features you have in mind.",
        },
        {
          id: "custom",
          title: "Customization",
          description:
            "Choose a direction, then we shape the colors and content together.",
        },
        {
          id: "build",
          title: "Build & Revise",
          description: "I build it, you review it, and we refine it together.",
        },
        {
          id: "launch",
          title: "Launch",
          description: "Go live on your domain, ready to welcome customers.",
        },
      ] as const,
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea? Tell me about it.",
      subtitle:
        "We start from what your business actually needs, not a forced package.",
      ctaWa: "Chat on WhatsApp",
      ctaEmail: "Send Email",
      infoLabels: {
        whatsapp: "WhatsApp",
        email: "Email",
        location: "Location",
        area: "Service area",
        response: "Response time",
      } as const,
    },
    footer: {
      portfolioLink: "Portfolio",
    },
  },
} as const;

type WidenLiteral<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly WidenLiteral<U>[]
        : T extends (...args: infer A) => unknown
          ? (...args: A) => string
          : T extends object
            ? {readonly [K in keyof T]: WidenLiteral<T[K]>}
            : T;

export type Dictionary = WidenLiteral<(typeof dictionary)["id"]>;
