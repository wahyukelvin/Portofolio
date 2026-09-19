# Portofolio — Wahyu Kelvin Sihite

Website portofolio statis dengan **Next.js 14 (App Router, `output: 'export'`)**.
Hasil build berupa HTML/CSS/JS murni, sehingga bisa di-host di mana saja dan mudah diindeks Google.

---

## 1. Menjalankan di komputer

Butuh Node.js 18.17 atau lebih baru.

```bash
npm install
npm run dev      # buka http://localhost:3000
npm run build    # hasil siap unggah ada di folder /out
```

---

## 2. Struktur folder

```
app/
  layout.js      → metadata SEO, Open Graph, font Google
  page.js        → halaman utama + structured data (schema.org Person)
  globals.css    → seluruh gaya visual (token warna, tipografi, animasi)
  sitemap.js     → sitemap.xml otomatis
  robots.js      → robots.txt otomatis
components/
  Portfolio.jsx  → seluruh tampilan & interaksi (modal, tab, progress bar, tema gelap)
lib/
  data.js        → SEMUA ISI PORTOFOLIO ADA DI SINI
  site.js        → alamat domain website
public/
  images/        → foto profil dan foto kegiatan
  files/         → berkas CV dan portofolio PDF
  logos/         → logo aplikasi untuk bagian "Perangkat yang saya pakai"
```

**Untuk mengubah isi website, hampir selalu cukup menyunting `lib/data.js`.**

---

## 3. Yang perlu Anda lengkapi

| Lokasi | Isi sekarang | Yang perlu dilakukan |
|---|---|---|
| `lib/data.js` → `profile.github` | `github.com/wahyukelvinsihite` | ganti dengan URL GitHub asli Anda |
| `lib/data.js` → `projects[].link` | kosong | isi tautan repositori/demo; kartu otomatis jadi bisa diklik |
| `lib/data.js` → `papers[].link` | kosong | isi tautan jurnal/artikel |
| `lib/data.js` → tiga proyek bertanda “Lorem ipsum” | contoh | ganti dengan proyek Anda yang sebenarnya, atau hapus |
| `lib/data.js` → `skillGroups[].bars` | persentase perkiraan | sesuaikan dengan penilaian Anda sendiri |
| `lib/site.js` → `SITE_URL` | domain contoh | ganti setelah punya domain |

### Foto pratinjau kartu proyek & publikasi
Setiap item pada `projects` dan `papers` punya field `preview`. Kosongkan untuk memakai kartu gradien
otomatis, atau isi dengan gambar tangkapan layar proyek:

```js
preview: "/images/simarsita-preview.png",
```

### Menambahkan foto
1. Letakkan foto di `public/images/`, misalnya `himsi-2023.jpg`.
2. Isi field `img` pada data terkait:

```js
{
  year: "Okt 2022 — Okt 2024",
  title: "Koordinator IT",
  img: "/images/himsi-2023.jpg",   // ← dari kosong menjadi path ini
  ...
}
```

Field `img` tersedia di: `journey` (perjalanan pendidikan), `organizations` (timeline organisasi horizontal —
foto muncul sebagai thumbnail di kartu),
`experience` (pengalaman kerja), `certificates` (sertifikat), dan `achievements` (penghargaan).
Selama kosong, tampil kotak abu bertuliskan “Slot foto”. Rasio terbaik: 4:3 untuk timeline, 16:10 untuk kartu sertifikat.

### Menambahkan logo aplikasi
Simpan file logo (SVG/PNG) di `public/logos/`, lalu isi `img` pada `toolCategories`:

```js
{ name: "Figma", color: "#F24E1E", short: "Fi", img: "/logos/figma.svg" }
```

Jika `img` kosong, yang tampil adalah kotak warna berisi inisial — tetap rapi, jadi tidak wajib diisi.

### Mengganti CV / portofolio PDF
Timpa berkas di `public/files/` dengan nama yang sama:
`CV-Wahyu-Kelvin-Sihite.pdf` dan `Portofolio-Wahyu-Kelvin-Sihite.pdf`.

---

## 4. Deploy ke Vercel (gratis, paling cepat)

1. Unggah folder ini ke GitHub sebagai repositori baru.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repositori tersebut.
3. Vercel mengenali Next.js otomatis; klik **Deploy**.
4. Setelah tayang, buka **Settings → Domains** untuk memasang domain sendiri
   (mis. `wahyukelvinsihite.com`), lalu perbarui `SITE_URL` di `lib/site.js` dan deploy ulang.

Alternatif: `npm run build` lalu unggah isi folder `out/` ke Netlify, GitHub Pages, atau hosting cPanel biasa.

---

## 5. Agar muncul di pencarian Google

1. Pasang domain terlebih dahulu, lalu perbarui `SITE_URL`.
2. Daftarkan situs di [Google Search Console](https://search.google.com/search-console).
3. Ambil kode verifikasi, buka `app/layout.js`, dan aktifkan baris berikut:

   ```js
   verification: { google: 'kode-verifikasi-anda' },
   ```

4. Kirim `https://domain-anda.com/sitemap.xml` di menu **Sitemaps**.
5. Gunakan **URL Inspection → Request Indexing** untuk mempercepat pengindeksan.
6. Tautkan alamat website ini dari profil LinkedIn, Instagram, dan tanda tangan email —
   backlink membuat Google lebih cepat menemukan dan mempercayai halaman Anda.

Sudah disiapkan di dalam proyek: judul & deskripsi unik, Open Graph, `robots.txt`, `sitemap.xml`,
dan structured data `schema.org/Person` sehingga Google dapat mengenali nama, pendidikan, dan profesi Anda.

---

## 6. Fitur yang sudah ada

- Hero beranimasi: blob warna yang bergerak, nama tersingkap, teks peran mengetik sendiri,
  foto tanpa latar di atas lingkaran biru, dan tiga chip melayang
- Menu samping dengan penanda bagian aktif saat menggulir
- Timeline organisasi horizontal bergaya alur proses (ikon, garis penghubung, nomor, status)
- Kartu tautan untuk proyek dan publikasi: label Link, pratinjau, URL, judul, dan deskripsi
- Sertifikat dan penghargaan tampil sebagai carousel geser kanan–kiri dengan tombol navigasi
- Progress bar keahlian yang terisi saat terlihat, modal detail, tab aktivitas
- Tombol unduh CV dan portofolio, mode terang/gelap, responsif hingga layar ponsel
- Menghormati `prefers-reduced-motion` dan memiliki fokus keyboard yang terlihat

---

## 7. Menyesuaikan warna

Semua warna berada di bagian atas `app/globals.css`:

```css
--paper:  #f5f8ff;   /* latar halaman */
--card:   #ffffff;   /* kartu */
--ink:    #0f2547;   /* teks */
--blue:   #2563eb;   /* aksen biru */
--yellow: #ffc93c;   /* aksen kuning */
--r-lg: 26px; --r-xl: 34px;  /* tingkat kelengkungan sudut */
```

Ubah nilainya sekali, seluruh halaman ikut menyesuaikan — termasuk versi mode gelap di bawahnya.
