/* =========================================================
   SATU-SATUNYA SUMBER DATA PORTOFOLIO
   Ubah isi file ini untuk memperbarui seluruh halaman.
   Ganti nilai "img" dengan path foto Anda (mis. "/images/himsi.jpg").
   ========================================================= */

export const DATA = {
  profile: {
    name: "Wahyu Kelvin Sihite",
    firstName: "Wahyu",
    lastName: "Kelvin Sihite, S.Kom.",
    initials: "WKS",
    headline: "Sarjana Sistem Informasi",
    roles: ["Business & System Analyst", "Quality Assurance", "Data & Digital"],
    location: "Sleman, Daerah Istimewa Yogyakarta",
    address: "Sleman, Daerah Istimewa Yogyakarta",
    email: "wahyukelvinsihite@gmail.com",
    phone: "+6281338650664",
    phoneIntl: "6281338650664",
    linkedin: "https://www.linkedin.com/in/wahyu-kelvin-sihite/",
    linkedinLabel: "linkedin.com/in/wahyu-kelvin-sihite",
    github: "https://github.com/wahyukelvinsihite",
    githubLabel: "github.com/wahyukelvinsihite",
    portfolioLink: "https://bit.ly/PortofolioWahyuKelvinSihite",
    photo: "/images/profile.jpg",
    photoCut: "/images/wahju.png",
    typed: ["Business & System Analyst", "Quality Assurance Enthusiast", "Data & Visualization", "Digital Marketing Creator"],
    // lede:
    //   "Saya menerjemahkan kebutuhan bisnis menjadi sistem yang benar-benar dipakai orang — mulai dari analisis proses, perancangan basis data dan alur, sampai pengujian dan dokumentasi. Enam bulan terakhir saya membangun sistem kearsipan digital untuk pemerintah kota, dan tiga tahun terakhir memegang komunikasi digital sebuah universitas.",
    about: [
      "Lulusan Sistem Informasi Universitas Atma Jaya Yogyakarta dengan IPK 3,69. Saya tumbuh di persimpangan tiga hal: proses bisnis, teknologi, dan komunikasi. Di kampus saya belajar memodelkan proses, menganalisis kebutuhan, dan mengelola proyek; di tempat kerja saya mempraktikkannya — merancang ERD dan use case untuk sistem kearsipan Pemerintah Kota Yogyakarta, lalu menguji dan memperbaikinya lewat tiga kali presentasi proyek formal.",
      "Sisi lain dari saya adalah komunikasi. Sejak Maret 2023 saya menjadi Student Staff Promosi sekaligus Duta UAJY: membuka lebih dari 20 booth ekspo di SMA seluruh Indonesia, memegang konten TikTok dan Instagram penerimaan mahasiswa hingga tumbuh 5.000+ pengikut organik, dan menyusun strategi rekrutmen berbasis data bersama tim promosi.",
      "Kombinasi itu yang saya bawa: cukup teknis untuk berdiskusi dengan developer dan QA, cukup terbiasa berbicara untuk menjembatani pengguna, pimpinan, dan tim. Saat ini saya mencari peran di mana analisis, data, dan proses menjadi inti pekerjaan."
    ],
    facts: [
      ["Pendidikan", "S1 Sistem Informasi — Universitas Atma Jaya Yogyakarta"],
      ["IPK", "3,69 / 4,00 (Fakultas Teknologi Industri)"],
      ["Lulus", "Juli 2026"],
      ["Domisili", "Sleman, DI Yogyakarta — bersedia relokasi"],
      ["Bahasa", "Indonesia (native), Inggris (professional working)"],
      ["Status", "Terbuka untuk peluang full-time"]
    ],
    interests: [
      "Business Analysis",
      "System Analysis & Design",
      "Quality Assurance / Software Testing",
      "Data Analytics & Visualization",
      "IT Project Management",
      "Business Process Improvement",
      "UI/UX Design",
      "Digital Marketing",
      "E-Government & Digital Archiving"
    ],
    stats: [
      ["3,69", "IPK dari 4,00"],
      ["4", "Sertifikasi profesional"],
      ["10+", "Proyek & riset"],
      ["4th", "Pengalaman kerja"],
      
    ]
  },

  /* ---------- 02 — Perjalanan pendidikan ---------- */
  journey: [
    {
      year: "Juni 2019 - Mei 2022",
      title: "SMA Katolik W.R. Soepratman 020 Samarinda",
      org: "Jurusan MIPA · Nilai kelulusan 86,94/100 · Kalimantan Timur",
      img: "/images/SMA.jpeg",
      caption: "Masa SMA - Samarinda",
      body:
        "Tiga tahun di kelas MIPA yang menumbuhkan dua kebiasaan yang masih saya pakai sampai sekarang: menulis karya ilmiah secara terstruktur, dan mengurus hal-hal teknis yang tidak banyak orang mau pegang.",
      points: [
        "Juara 1 Lomba Karya Tulis Ilmiah Biologi tingkat Provinsi Kalimantan Timur",
        "Juara Harapan 1 Lomba Karya Tulis Ilmiah Kimia tingkat Provinsi",
        "Best Innovation pada Lomba Karya Tulis Ilmiah Biologi tingkat Provinsi",
        "Tim Desain PPDB — materi promosi penerimaan siswa baru sekolah",
        "Mengelola akun media sosial sekolah, desain grafis, dan konten digital",
        "Troubleshooting perangkat keras, instalasi perangkat lunak, dan infrastruktur digital sekolah",
        "Ekstrakurikuler: Paduan Suara SMAK Armonia Choir dan Badminton Club"
      ],
      tags: ["Karya Tulis Ilmiah", "Desain Grafis", "IT Support", "Paduan Suara"]
    },
    {
      year: "September 2022 - Juli 2026",
      title: "S1 Sistem Informasi - Universitas Atma Jaya Yogyakarta",
      org: "Fakultas Teknologi Industri · IPK 3,69/4,00",
      img: "/images/wisuda.jpeg",
      caption: "Wisuda & masa kuliah — Yogyakarta",
      body:
        "Empat tahun yang saya isi dengan tiga jalur sekaligus: akademik, kerja di kantor promosi universitas, dan organisasi. Fokus studi saya jatuh ke analisis dan perancangan sistem, manajemen proyek, serta pemanfaatan data untuk keputusan bisnis.",
      points: [
        "Skripsi: Evaluasi Layanan Kualitas Sistem Informasi Kearsipan Nasional (SIKN) berbasis persepsi pengguna menggunakan PIECES Framework dan Importance-Performance Analysis — nilai A−",
        "Best Presenter, Seminar Nasional & Konferensi Teknologi Informasi KONSTELASI 2024",
        "Duta Universitas Atma Jaya Yogyakarta sejak Maret 2023",
        "Kuliah lapangan ke Omadata Surabaya Data Center bersama Prodi Sistem Informasi"
      ],
      courses: [
        "Business Analysis and Modeling",
        "Business Process Modeling",
        "Information System Analysis and Design Project",
        "Information System Project Management",
        "Customer Relationship Management",
        "Risk Management",
        "Strategic Management",
        "Change and Innovation Management",
        "Business Intelligence",
        "Social Media Analytics",
        "Supply Chain Management",
        "E-Business",
        "Information Systems Economy",
        "English for Business Communication",
        "Introduction to Business Organization"
      ],
      tags: ["IPK 3,69", "Skripsi A−", "Best Presenter", "Duta Kampus"]
    }
  ],

  /* ---------- 03 — Pengalaman kerja ---------- */
  experience: [
    {
      when: "Sep 2025 — Feb 2026",
      role: "Intern - Archive Management Team",
      org: "Dinas Perpustakaan dan Kearsipan Kota Yogyakarta",
      place: "Yogyakarta, Indonesia",
      img: "/images/intern.jpg",
      teaser:
        "Membangun SIMARSITA, sistem informasi kearsipan digital berbasis web untuk mendukung tata kelola pemerintahan yang transparan dan akuntabel.",
      points: [
        "Mengembangkan SIMARSITA (Sistem Informasi Manajemen Arsip Digital Kota Yogyakarta) dari nol bersama tim kearsipan",
        "Merancang arsitektur sistem, basis data (ERD), dan dokumentasi use case sebagai dasar pengembangan",
        "Mengimplementasikan fitur frontend dan backend, termasuk panel admin dan akses berbasis multi-role",
        "Membangun fitur ekspor laporan untuk arsip aktif, arsip inaktif, dan arsip vital",
        "Menerapkan mekanisme keamanan: otorisasi ketat, persetujuan akun manual, rate limiting, perlindungan brute-force, dan manajemen sesi yang aman",
        "Melakukan pengujian sistem, debugging, dan penyempurnaan iteratif melalui 3 kali presentasi proyek formal"
      ],
      tags: ["System Analysis", "ERD & Use Case", "Next.js", "MySQL", "Security", "Testing"]
    },
    {
      when: "Mar 2023 — Agu 2026",
      role: "Student Staff - Subdivisi Promosi",
      org: "Kantor Kerjasama dan Promosi, Universitas Atma Jaya Yogyakarta",
      place: "Yogyakarta, Indonesia",
      img: "/images/kkp.jpg",
      teaser:
        "Memegang promosi kampus di lapangan dan di kanal digital: 20+ booth ekspo, konten TikTok & Instagram, serta strategi penerimaan berbasis data.",
      points: [
        "Membuka dan mempresentasikan lebih dari 20 booth ekspo universitas di berbagai SMA di seluruh Indonesia, berkontribusi pada 200+ pendaftaran mahasiswa baru",
        "Mengembangkan konten kreatif TikTok dan Instagram hingga pertumbuhan organik lebih dari 5.000 pengikut pada akun resmi penerimaan mahasiswa dalam 12 bulan",
        "Menyusun strategi penerimaan mahasiswa berbasis data bersama tim promosi menggunakan Google Spreadsheet dan Microsoft Excel untuk menopang target 2.500+ mahasiswa baru per tahun",
        "Menangani desain grafis, pengeditan video (Adobe Premiere Pro), dan siaran langsung dengan OBS Studio untuk kampanye promosi digital dan acara daring"
      ],
      tags: ["Public Speaking", "Digital Marketing", "Data Analysis", "Video & Live", "Copywriting"]
    },
    {
      when: "2019 — 2022",
      role: "PPDB Design Team",
      org: "SMA Katolik W.R. Soepratman 020 Samarinda",
      place: "Samarinda, Kalimantan Timur",
      img: "/images/smak.png",
      teaser:
        "Awal mula saya bekerja dengan desain dan media digital: materi promosi penerimaan siswa baru dan pengelolaan akun media sosial sekolah.",
      points: [
        "Merancang materi promosi Penerimaan Peserta Didik Baru (PPDB) sekolah",
        "Mengelola akun media sosial sekolah dan produksi konten digital",
        "Menangani troubleshooting perangkat keras, instalasi perangkat lunak, dan infrastruktur digital sekolah"
      ],
      tags: ["CorelDRAW", "Photoshop", "Social Media", "IT Support"]
    }
  ],

  /* ---------- 04 — Organisasi & kepemimpinan ---------- */
  organizations: [
    {
      year: "Okt 2022 — Okt 2024",
      title: "Koordinator IT",
      icon: "users",
      status: "Selesai",
      org: "Himpunan Mahasiswa Sistem Informasi (HIMSI) UAJY",
      img: "/images/dokumentasi/iweek.jpg",
      caption: "Kepengurusan HIMSI 2022–2024",
      body:
        "Dua periode memegang divisi IT: menyiapkan kebutuhan teknis setiap acara himpunan, merumuskan strategi organisasi berbasis TI, dan ikut merancang identitas visual kampanye digital.",
      points: [
        "Merumuskan strategi organisasi berbasis TI untuk efisiensi program kerja dan inovasi himpunan",
        "Membuat konsep visual dan materi kampanye digital untuk acara organisasi",
        "Mengorganisir Innovation Week (IWEEK) berskala nasional: kompetisi Business Plan, turnamen Mobile Legends, dan lomba Front-End Web Development",
        "Menjadi bagian tim kreatif ORASI Podcast — perencanaan konten, produksi audio, dan distribusi ke berbagai platform podcast"
      ],
      chain: [
        "Podcast ORASI #2",
        "Art & Culture #4",
        "Moment of Purpose SI #7",
        "Innovation Week Fest #3",
        "Technology Art Summit 2023",
        "Pelatihan 4 Lembaga",
        "Innovation Week Fest #4"
      ],
      tags: ["Kepemimpinan", "Event Organizing", "Desain", "Koordinasi Tim"]
    },
    {
      year: "Mar 2023 — Agu 2026",
      title: "UAJY Ambassador",
      icon: "megaphone",
      status: "Selesai",
      org: "Universitas Atma Jaya Yogyakarta",
      img: "/images/kkp.jpg",
      caption: "Kegiatan Duta UAJY",
      body:
        "Mewakili universitas dalam kegiatan promosi, penerimaan tamu, dan acara kerja sama — peran yang mengasah public speaking, etiket profesional, dan kemampuan membawa diri di depan publik.",
      points: [
        "Mewakili universitas pada kegiatan promosi dan acara kemitraan",
        "Menjadi presenter untuk calon mahasiswa, sekolah mitra, dan tamu institusi"
      ],
      tags: ["Public Speaking", "Public Relation"]
    },
    {
      year: "Mar 2025 — Agu 2025",
      title: "Koordinator Publikasi dan Dokumentasi",
      icon: "map",
      status: "Selesai",
      org: "Kuliah Kerja Nyata 87 - Padukuhan Klepu I, Tanjungsari, Gunungkidul",
      img: "/images/dokumentasi/kkn.png",
      caption: "KKN 87 Unit H - Klepu I, Gunungkidul",
      body:
        "Memimpin divisi publikasi dan dokumentasi KKN 87 Unit H Kelompok 36 selama pengabdian di Padukuhan Klepu I.",
      points: [
        "Menjalankan 10 program kerja individu dan 5 program kerja kelompok",
        "Mengoordinasi dokumentasi, publikasi kegiatan, dan laporan visual selama masa KKN"
      ],
      tags: ["Dokumentasi", "Kerja Tim", "Pengabdian Masyarakat"]
    },
    {
      year: "2023",
      title: "Pelatihan Aplikasi Notion",
      icon: "book",
      status: "Selesai",
      org: "SD Kanisius Jomegatan, Yogyakarta",
      img: "/images/dokumentasi/notion.jpeg",
      caption: "Pengabdian mengajar - SD Kanisius Jomegatan",
      body:
        "Mengajarkan penggunaan Notion sebagai alat bantu pencatatan dan pengelolaan tugas kepada siswa dan guru, sekaligus pengenalan literasi digital dasar.",
      points: [
        "Menyusun materi praktik aplikasi Notion untuk pemula",
        "Mendampingi peserta langsung selama sesi praktik"
      ],
      tags: ["Notion", "Literasi Digital", "Mengajar"]
    },
    {
      year: "Nov 2022 - Jul 2024",
      title: "Anggota",
      icon: "globe",
      status: "Selesai",
      org: "Komunitas Mahasiswa Batak UAJY (KMBA)",
      img: "/images/dokumentasi/kmba.jpg",
      caption: "Kegiatan KMBA UAJY",
      body:
        "Aktif dalam pelestarian budaya dan kegiatan komunitas mahasiswa di kampus, termasuk keakraban KMBA 2022.",
      points: ["Terlibat dalam kegiatan budaya dan kebersamaan komunitas mahasiswa Batak di UAJY"],
      tags: ["Budaya", "Komunitas"]
    }
  ],

  /* ---------- 05 — Proyek ---------- */
  projects: [
    {
      kind: "Web Development Government",
      title: "SIMARSITA (Sistem Informasi Manajemen Arsip Digital Kota Yogyakarta)",
      desc:
        "Sistem kearsipan digital berbasis web untuk Dinas Perpustakaan dan Kearsipan Kota Yogyakarta: pengelolaan arsip aktif, inaktif, dan vital dengan akses multi-role, panel admin, ekspor laporan, serta mekanisme keamanan berlapis. Saya menangani perancangan arsitektur, ERD, use case, implementasi frontend–backend, hingga pengujian.",
      stack: ["Next.js", "MySQL", "ERD", "Use Case", "QA"],
      preview: "/images/simarsita.png",
      link: "",
      linkLabel: "Dokumentasi internal — tersedia saat wawancara",
      // year: "2025–2026"
    },
    {
      kind: "Web Development",
      title: "Point of Sales (POS) Sikobuni",
      desc:
        "Skripsi yang mengevaluasi Sistem Informasi Kearsipan Nasional dari persepsi pengguna. Menggabungkan PIECES Framework untuk memetakan dimensi masalah dan Importance-Performance Analysis untuk menentukan prioritas perbaikan layanan. Nilai akhir A−.",
      stack: ["PIECES", "IPA", "Kuesioner", "Analisis Data"],
      preview: "/images/sikobuni.png",
      link: "https://padsi-uajy-r662.vercel.app/",
      linkLabel: "Tambahkan tautan repositori kampus di sini",
      // year: "2024"
    },
    {
      kind: "Web Development",
      title: "Website Portofolio Pribadi",
      desc:
        "Situs portofolio statis yang Anda baca sekarang. Dibangun dengan Next.js (static export), dioptimalkan untuk SEO agar mudah ditemukan di mesin pencari, responsif, dan mendukung mode gelap.",
      stack: ["Next.js", "JavaScript", "CSS", "SEO"],
      preview: "/images/portooo.png",
      link: "",
      linkLabel: "Tambahkan tautan domain Anda",
      // year: "2026"
    },
    {
      kind: "UI/UX Design",
      title: "PergiNow.com",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Eksplorasi wireframe dan prototipe Figma untuk memperbaiki alur pencarian arsip: struktur informasi, hierarki visual, dan pengujian alur pengguna.",
      stack: ["Figma", "Wireframe", "Prototype"],
      preview: "/images/perginow.png",
      link: "",
      linkLabel: "Tambahkan tautan Figma",
      // year: "2025"
    },
    {
      kind: "UI/UX Design",
      title: "Tukangku",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Eksplorasi wireframe dan prototipe Figma untuk memperbaiki alur pencarian arsip: struktur informasi, hierarki visual, dan pengujian alur pengguna.",
      stack: ["Figma", "Wireframe", "Prototype"],
      preview: "/images/1.jpg",
      link: "",
      linkLabel: "Tambahkan tautan Figma",
      // year: "2025"
    },
    {
      kind: "Marketing",
      title: "Administration",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Kumpulan skenario pengujian otomatis untuk alur login, formulir, dan transaksi: perancangan test case, eksekusi regresi, serta pelaporan hasil uji.",
      stack: ["Word", "Excel"],
      preview: "/images/wk.png",
      link: "",
      linkLabel: "Tambahkan tautan GitHub",
      // year: "2025"
    },
    {
      kind: "Data & Visualisasi",
      title: "Dashboard Visualisasi Data",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Visualisasi data pendaftar berdasarkan asal sekolah, wilayah, dan kanal promosi menggunakan Tableau untuk mendukung keputusan strategi promosi.",
      stack: ["Tableau", "Excel", "MySQL"],
      preview: "/images/visualisasi.png",
      link: "",
      linkLabel: "Tambahkan tautan Tableau Public",
      // year: "2024"
    },
    {
      kind: "Quality Assurance",
      title: "Automation Testing Playground",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Kumpulan skenario pengujian otomatis untuk alur login, formulir, dan transaksi: perancangan test case, eksekusi regresi, serta pelaporan hasil uji.",
      stack: ["Katalon Studio", "Cypress", "Test Case"],
      preview: "/images/cy.png",
      link: "",
      linkLabel: "Tambahkan tautan GitHub",
      // year: "2025"
    },
    {
      kind: "Data Analysis",
      title: "Social Media Analytics",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Kumpulan skenario pengujian otomatis untuk alur login, formulir, dan transaksi: perancangan test case, eksekusi regresi, serta pelaporan hasil uji.",
      stack: ["Orange Data mining"],
      preview: "/images/orangee.png",
      link: "",
      linkLabel: "Tambahkan tautan GitHub",
      // year: "2025"
    },
    {
      kind: "Data Mining",
      title: "Project Manager / Business Analyst",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Kumpulan skenario pengujian otomatis untuk alur login, formulir, dan transaksi: perancangan test case, eksekusi regresi, serta pelaporan hasil uji.",
      stack: ["Orange Data mining"],
      preview: "/images/p6.png",
      link: "",
      linkLabel: "Tambahkan tautan GitHub",
      // year: "2025"
    },
    {
      kind: "Data Mining",
      title: "System Analyst",
      desc:
        "Lorem ipsum — ganti deskripsi ini. Kumpulan skenario pengujian otomatis untuk alur login, formulir, dan transaksi: perancangan test case, eksekusi regresi, serta pelaporan hasil uji.",
      stack: ["Orange Data mining"],
      preview: "/images/class.png",
      link: "",
      linkLabel: "Tambahkan tautan GitHub",
      // year: "2025"
    },
  ],

  /* ---------- 06 — Publikasi & artikel ---------- */
  papers: [
    {
      year: "Mei 2024",
      title: "Analisis User Experience pada Game Valorant dengan menggunakan Metode Game Design Factors Questionnaire",
      meta: "Best Presenter · Sistem Informasi UAJY",
      desc:
        "Tampil sebagai pembicara pada seminar nasional KONSTELASI 2024 dan memperoleh penghargaan Best Presenter atas penyampaian materi dan penguasaan topik.",
      preview: "/images/prosiding.png",
      link: "https://ojs.uajy.ac.id/index.php/prosidingkonstelasi/article/view/8967"
    },
    {
      year: "Juli 2026",
      title:
        "Evaluasi Kualitas Layanan Sistem Informasi Kearsipan Nasional (SIKN) Berbasis Persepsi Pengguna Menggunakan PIECES Framework dan IPA",
      meta: "Skripsi - Program Studi Sistem Informasi, Universitas Atma Jaya Yogyakarta · Nilai A−",
      desc:
        "Penelitian kuantitatif terhadap persepsi pengguna SIKN. PIECES Framework digunakan untuk memetakan performance, information, economics, control, efficiency, dan service; hasilnya dipetakan pada kuadran dimana Importance dan Performance menjadi prioritas utama perbaikan.",
      preview: "/images/skripsi.png",
      link: "https://drive.google.com/file/d/1tnoKICWvpKCzPLS94aRhMVO5xZlqBHf-/view?usp=sharing"
    },
    {
      year: "2021",
      title: "Peran Generasi Muda Dalam Reklamasi Lahan Eks-Pertambangan Batubara",
      meta: "Juara 1 Lomba Karya Tulis Ilmiah - Mulawarman University",
      desc:
        "Karya tulis ilmiah bidang biologi yang meraih Juara 1 di tingkat provinsi.",
      preview: "/images/kti 11.png",
      link: "https://id.scribd.com/document/701285792/PERAN-GENERASI-MUDA-DALAM-REKLAMASI-LAHAN-EKS-PERTAMBANGAN-BATUBARA"
    },
    {
      year: "2021",
      title: "Pemanfaatan Lingkungan Sebagai Sumber Belajar Dalam Meningkatkan Sumber Daya Manusia di Masa Pandemi Covid-19",
      meta: "Juara The Best Inovation Lomba Karya Tulis Ilmiah - Mulawarman University",
      desc:
        "Karya tulis ilmiah bidang biologi yang meraih Juara The Best Inovation di tingkat provinsi.",
      preview: "/images/kti22.png",
      link: "https://id.scribd.com/document/701286680/Pemanfaatan-lingkungan-sebagai-sumber-belajar-dalam-meningkatkan-sumber-daya-manusia-di-masa-pandemi-covid-19"
    },
    {
      year: "2021",
      title: "Mengoptimalkan Pembelajaran Literasi Sains Melalui Pemanfaatan Lingkungan",
      meta: "Juara harapan 1 Lomba Karya Tulis Ilmiah - Mulawarman University",
      desc:
        "Karya tulis ilmiah bidang kimia yang meraih Juara harapan 1 di tingkat provinsi.",
      preview: "/images/kti 11.png",
      link: "https://id.scribd.com/document/701286998/Mengoptimalkan-pembelajaran-literasi-sains-melalui-pemanfaatan-lingkungan"
    },
    {
      year: "2020",
      title: "Strategi Adaptasi Petani di Kelurahan Lempake Terhadap Dampak Perubahan Iklim",
      meta: "Lomba Karya Ilmiah Sumber Daya Air Tahun 2020",
      desc:
        "Karya tulis ilmiah bidang biologi.",
      preview: "/images/bandung.png",
      link: "https://drive.google.com/file/d/1MkbX0d8DiNA6x8vEpPoRyAVpFkWb0pIn/view?usp=sharing"
    }
  ],

  /* ---------- 07 — Keahlian ---------- */
  skillGroups: [
    {
      name: "Analisis Sistem & Bisnis",
      note: "Inti pekerjaan saya",
      bars: [
        ["Business Process Modeling (BPMN)", 88],
        ["Analisis Kebutuhan & Use Case", 88],
        ["Perancangan Basis Data (ERD)", 85],
        ["Dokumentasi Proyek", 90],
        ["Risk & Change Management", 75]
      ]
    },
    {
      name: "Data & Analitik",
      note: "Pengolahan sampai visualisasi",
      bars: [
        ["Microsoft Excel / Spreadsheet", 90],
        ["Tableau", 85],
        ["MySQL", 78],
        ["Orange Data Mining", 75],
        ["Social Media Analytics", 82]
      ]
    },
    {
      name: "Pengembangan & Pengujian",
      note: "Cukup teknis untuk ikut membangun",
      bars: [
        ["JavaScript", 78],
        ["Next.js / React", 75],
        ["HTML & CSS", 85],
        ["Katalon Studio", 80],
        ["Cypress", 72]
      ]
    },
    {
      name: "Desain & Komunikasi",
      note: "Kekuatan pembeda saya",
      bars: [
        ["Public Speaking & Presentasi", 92],
        ["Desain Grafis (Adobe & CorelDRAW)", 88],
        ["UI/UX Design (Figma)", 80],
        ["Copywriting & Digital Marketing", 85],
        ["Event Organizing", 90]
      ]
    }
  ],

  /* Ganti "img" dengan path logo (mis. "/logos/figma.svg") bila ingin memakai ikon asli */
  toolCategories: [
    {
      name: "Desain & Multimedia",
      tools: [
        { name: "", color: "#F24E1E", short: "Fi", img: "/images/figma.png" },
        { name: "", color: "#001E36", short: "Ps", img: "/images/photoshop.png" },
        { name: "", color: "#330000", short: "Ai", img: "/images/illustrator.png" },
        { name: "", color: "#2A0634", short: "Pr", img: "/images/premiere.png" },
        { name: "", color: "#00005B", short: "Ae", img: "/images/after.png" },
        { name: "", color: "#0C7C3E", short: "CD", img: "/images/corel.png" },
        { name: "", color: "#00C4CC", short: "Cv", img: "/images/canva.png" },
        { name: "", color: "#111111", short: "Cc", img: "/images/capcut.png" },
        { name: "", color: "#302E31", short: "OB", img: "/images/obs.png" }
      ]
    },
    {
      name: "Data & Pengembangan",
      tools: [
        { name: "", color: "#1F457E", short: "Tb", img: "/images/tableau.png" },
        { name: "", color: "#00618A", short: "Sq", img: "/images/mysql.png" },
        { name: "", color: "#F7941E", short: "Or", img: "/images/orange.png" },
        { name: "", color: "#C8A600", short: "JS", img: "/images/javascript.png" },
        { name: "", color: "#000000", short: "N", img: "/images/nextjs.png" },
        { name: "", color: "#0D9A5B", short: "Ka", img: "/images/katalon.png" },
        { name: "", color: "#17202C", short: "Cy", img: "/images/cypress.png" },
        { name: "", color: "#DD6900", short: "Dw", img: "/images/draw io.png" }
      ]
    },
    {
      name: "Manajemen Proyek & Kolaborasi",
      tools: [
        { name: "", color: "#B31B1B", short: "P6", img: "/images/primavera.png" },
        { name: "", color: "#31752F", short: "Pj", img: "/images/project.png" },
        { name: "", color: "#1D6F42", short: "Xl", img: "/images/excel.png" },
        { name: "", color: "#C43E1C", short: "Pp", img: "/images/powerpoint.png" },
        { name: "", color: "#185ABD", short: "Wd", img: "/images/word.png" },
        { name: "", color: "#0052CC", short: "Tr", img: "/images/trello.png" },
        { name: "", color: "#111111", short: "No", img: "/images/notion.png" }
      ]
    }
  ],

  /* ---------- 08 — Sertifikasi & penghargaan ---------- */
  certificates: [
    {
      date: "Januari 2024",
      title: "Information Security Management Systems — ISO/IEC 27001:2013",
      issuer: "CBQA Global",
      img: "/images/ISO 27001 2013.jpeg",
      desc:
        "Pelatihan sistem manajemen keamanan informasi yang menitikberatkan pada perlindungan aspek kerahasiaan, integritas, dan ketersediaan informasi, serta pengelolaan risiko yang berkaitan dengan keamanan data organisasi."
    },
    {
      date: "Mei 2024",
      title: "National Seminar & Conference on Information Technology",
      issuer: "KONSTELASI 2024 — Sistem Informasi UAJY",
      img: "/images/Konstelasi.jpeg",
      desc:
        "Keikutsertaan sebagai pembicara pada seminar nasional dan konferensi teknologi informasi, membawakan materi di hadapan peserta dan dewan juri."
    },
    {
      date: "Juni 2023",
      title: "Certified Secure Computer User V2 (C|SCU)",
      issuer: "EC-Council",
      img: "/images/EC - Council.png",
      desc:
        "Sertifikasi yang menguji pemahaman dasar prinsip keamanan siber: penjelajahan web yang aman, keamanan email, perlindungan data, kesadaran terhadap rekayasa sosial, ancaman malware, dan praktik komputasi aman. Penilaian mencakup kemampuan mengidentifikasi, mencegah, dan merespons ancaman siber umum dalam konteks pribadi maupun organisasi."
    },
    {
      date: "September 2024",
      title: "Primavera P6 Professional Project",
      issuer: "Oracle",
      img: "/images/oracle.png",
      desc:
        "Penggunaan Primavera P6 untuk perencanaan dan pengendalian proyek: penyusunan project schedule, Work Breakdown Structure (WBS), pendefinisian aktivitas dan hubungan antaraktivitas, serta pengelolaan waktu dan sumber daya proyek."
    },
    {
      date: "Desember 2024",
      title: "Tableau Fundamentals",
      issuer: "Tableau eLearning",
      img: "/images/Tableau Fundamental.png",
      desc:
        "Dasar pengolahan dan visualisasi data dengan Tableau: pembuatan visualisasi, penyusunan dashboard interaktif, dan penyajian informasi untuk mendukung analisis serta pengambilan keputusan."
    }
  ],

  achievements: [
    {
      date: "Mei 2024",
      title: "Best Presenter - KONSTELASI 2024 National Seminar",
      issuer: "Seminar Nasional & Konferensi Teknologi Informasi, UAJY",
      img: "/images/Konstelasi.jpeg",
      desc:
        "Recognized as Best Presenter at KONSTELASI 2024 National Seminar for delivering a scientific presentation titled “User Experience Analysis in Valorant Game Using the Game Design Factors Method.” The presentation explored the evaluation of user experience in video games using the Game Design Factors framework, focusing on elements such as interaction, comfort, and user satisfaction"
    },
    {
      date: "Maret 2023 — Agustus 2026",
      title: "Ambassador Universitas Atma Jaya Yogyakarta",
      issuer: "Kantor Kerjasama dan Promosi",
      img: "/images/surket.png",
      desc:
        "Terpilih sebagai Duta UAJY yang mewakili universitas pada kegiatan promosi, penerimaan tamu institusi, dan acara kemitraan dengan peran yang menuntut kemampuan komunikasi publik dan representasi institusi."
    },
    {
      date: "2021",
      title: "Juara 1 Lomba Karya Tulis Ilmiah Biologi",
      issuer: "Mulawarman University",
      img: "/images/kti.png",
      desc:
        "Awarded first place for presenting an innovative paper on the role of technology in sustainable agricultural development. The competition involved participants from various high schools and universities across East Kalimantan."
    },
    {
      date: "2021",
      title: "Best Innovation - Lomba Karya Tulis Ilmiah Biologi",
      issuer: "Mulawarman University",
      img: "/images/kti 1.png",
      desc:
        "Earned the Best Innovation title for proposing a creative and feasible technological solution in the education sector. Evaluated based on impact, novelty, and relevance to current challenges."
    },
    {
      date: "2021",
      title: "Juara Harapan 1 Lomba Karya Tulis Ilmiah Kimia",
      issuer: "Mulawarman University",
      img: "/images/kti 2.png",
      desc:
        "Received Honorable Mention for a scientific paper focusing on green chemistry applications in everyday life. Recognized for strong analytical thinking and originality among dozens of submissions."
    }
  ],

  /* ---------- 09 — Aktivitas kemahasiswaan ---------- */
  activities: [
    {
      name: "Penalaran & Keilmuan",
      items: [
        "Pembicara Seminar Nasional KONSTELASI 2024",
        "Peserta Kuliah Lapangan Prodi Sistem Informasi 2024 — Omadata Surabaya Data Center",
        "Peserta Seminar Nasional Dies Natalis ke-57 UAJY",
        "Peserta Seminar Make Money Skills for Millennial Choice",
        "Peserta Webinar UI/UX Nasional 2022",
        "Peserta Seminar Empowering Research Using Scopus",
        "Peserta Pelatihan Literasi Informasi: Penelusuran Sumber Informasi",
        "Peserta Seminar Technology Implementation in Customer Relationship Management",
        "Peserta Webinar Indonesia Darurat Kesetaraan Gender #1",
        "Peserta Webinar Indonesia Darurat Kesetaraan Gender #2"
      ]
    },
    {
      name: "Minat, Bakat & Budaya",
      items: [
        "Podcast ORASI #2 — tim kreatif dan produksi",
        "Cross Cultural Understanding III",
        "International Cross Cultural Day 2022 — bagian dari program Partnership Week",
        "Paduan Suara SMAK Armonia Choir (SMA)",
        "Badminton Club (SMA)"
      ]
    },
    {
      name: "Pengabdian Masyarakat",
      items: [
        "Kuliah Kerja Nyata 87 di Klepu I, Tanjungsari, Gunungkidul, DIY",
        "Pengabdian mengajar di SD Kanisius Jomegatan — praktik aplikasi Notion",
        "Volunteer #PILAH: Hidup Milenial Tanpa Sampah"
      ]
    },
    {
      name: "Organisasi & Kepemimpinan",
      items: [
        "Kepengurusan HIMSI UAJY periode 2022/2023 dan 2023/2024 — Koordinator IT",
        "Koordinator Bidang IT — IWEEK Festival #3",
        "Panitia Innovation Week Fest #4",
        "Panitia Technology Art Summit 2023",
        "Panitia 4th Art and Culture",
        "Panitia HUT SI ke-7 & HIMSI ke-6",
        "Panitia International Cross Cultural Day 2023",
        "Panitia Pelatihan 4 Lembaga 2024",
        "Peserta Pelatihan 4 Lembaga — Build an Integrity of Leadership and Unity",
        "Peserta Keakraban KMBA 2022",
        "Peserta Pemilu Raya FTI 2023"
      ]
    }
  ],

  /* ---------- Dokumentasi foto — geser otomatis kanan ke kiri ---------- */
  /* Isi "img" dengan path foto (mis. "/images/sma-1.jpg"). Kosong = tampil kotak "Slot foto". */
  documentation: {
    sma: [
      { img: "/images/dokumentasi/winner.jpg", caption: "" },
      { img: "/images/SMA.jpeg", caption: "" },
      { img: "/images/dokumentasi/batak.jpg", caption: "" },
      { img: "/images/dokumentasi/juara.jpg", caption: "" },
      { img: "/images/dokumentasi/koran.jpg", caption: "" },
      { img: "/images/dokumentasi/padus.jpg", caption: "" },
      { img: "/images/dokumentasi/lulus.jpg", caption: "" }
    ],
    kuliah: [
      { img: "/images/intern.jpg", caption: "" },
      { img: "/images/dokumentasi/notion.jpeg", caption: "" },
      { img: "/images/dokumentasi/kkn.png", caption: "" },
      { img: "/images/dokumentasi/himsi.jpg", caption: "" },
      { img: "/images/dokumentasi/IT.jpg", caption: "" },
      { img: "/images/dokumentasi/iweek.jpg", caption: "" },
      { img: "/images/dokumentasi/orasi.jpg", caption: "" },
      { img: "/images/dokumentasi/kmba.jpg", caption: "" },
      { img: "/images/dokumentasi/1.jpg", caption: "" },
      { img: "/images/dokumentasi/2.jpg", caption: "" },
      { img: "/images/dokumentasi/3.jpg", caption: "" },
      { img: "/images/dokumentasi/4.jpg", caption: "" },
      { img: "/images/dokumentasi/55.png", caption: "" },
      { img: "/images/dokumentasi/9.jpg", caption: "" },
      { img: "/images/dokumentasi/10.jpg", caption: "" },
      { img: "/images/dokumentasi/11.jpg", caption: "" },
      { img: "/images/dokumentasi/12.jpg", caption: "" },
      { img: "/images/dokumentasi/13.png", caption: "" },
      { img: "/images/dokumentasi/14.jpeg", caption: "" },
      { img: "/images/dokumentasi/77.png", caption: "" },
      { img: "/images/dokumentasi/88.png", caption: "" }
    ]
  },

    /* ---------- Desain grafis ---------- */
  graphicWorks: [
    {
      title: "Poster Promosi PMB 2024",
      category: "Poster",
      img: "/images/desain/17.png",
      tools: ["Photoshop", "Illustrator"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/20.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/18.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/19.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/1.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/2.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/3.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/4.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/5.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/6.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/7.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/8.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/9.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/10.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/11.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/12.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/13.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/14.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/15.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/16.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/21.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/22.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/23.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/24.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/25.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/26.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/27.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/28.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/29.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/30.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/31.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/32.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    {
      title: "Flyer Innovation Week Fest #4",
      category: "Flyer",
      img: "/images/desain/33.png",
      tools: ["CorelDRAW"],
      year: "2024"
    },
    // tambahkan poster/flyer/brosur lain di sini dengan pola yang sama
  ],

  /* ---------- Video & animasi ---------- */
  videoWorks: [
    {
      title: "Memorial",
      category: "Short Movie",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "MyxIldmKNBc", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Bumper Lomba debat indonesia",
      category: "Short Movie",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "DMb5N2dOkug", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Bumper MGBK",
      category: "Short Movie",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "1zEXy-i8KMo", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Slideshow",
      category: "Short Movie",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "3p3ZfEu1chk", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Opening Logo",
      category: "Logo Animation",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "XrIFF0XFYGM", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Dirgahayu Indonesia",
      category: "Reels",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "69gIlC1tJOw", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Promosi 1",
      category: "Reels",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "mD_83eQRdqM", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Promosi 2",
      category: "Reels",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "cBvm4kYxoGE", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Promosi 3",
      category: "Reels",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "A-rvVYk9hVc", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
    {
      title: "Outro Logo",
      category: "Reels",
      platform: "youtube", // "youtube" atau "instagram"
      embedId: "lUh4JlyJ1PM", // ambil dari youtube.com/watch?v=INI atau youtu.be/INI
      year: "2025"
    },
  ],

  nav: [
    ["profil", "Profil", "id"],
    ["perjalanan", "Perjalanan", "route"],
    ["pengalaman", "Pengalaman", "briefcase"],
    ["organisasi", "Organisasi", "layers"],
    ["proyek", "Proyek", "project"],
    ["publikasi", "Publikasi", "book"],
    ["keahlian", "Keahlian", "spark"],
    ["sertifikasi", "Sertifikasi", "award"],
    ["penghargaan", "Penghargaan", "trophy"],
    ["aktivitas", "Aktivitas", "map"],
    ["dokumentasi", "Dokumentasi", "camera"],
    ["kreatif", "Karya Kreatif", "palette"],
    ["kontak", "Kontak", "contact"]
  ]
};
