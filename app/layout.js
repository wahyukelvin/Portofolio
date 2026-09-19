import './globals.css';
import { SITE_URL } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Portofolio - Wahyu Kelvin Sihite',
  description:
    'Portofolio Wahyu Kelvin Sihite, Sarjana Sistem Informasi Universitas Atma Jaya Yogyakarta (IPK 3,69). Business analysis, perancangan sistem, quality assurance, data analytics, dan digital marketing.',
  keywords: [
    'Wahyu Kelvin Sihite', 'portofolio', 'sistem informasi', 'business analyst',
    'system analyst', 'quality assurance', 'data analyst',
    'Universitas Atma Jaya Yogyakarta', 'Yogyakarta',
  ],
  authors: [{ name: 'Wahyu Kelvin Sihite' }],
  creator: 'Wahyu Kelvin Sihite',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Portofolio Wahyu Kelvin Sihite',
    title: 'Wahyu Kelvin Sihite — Business & System Analyst',
    description:
      'Sarjana Sistem Informasi UAJY. Analisis bisnis, perancangan sistem, QA, dan data analytics.',
    images: [{ url: '/images/profile.jpg', width: 800, height: 1000, alt: 'Wahyu Kelvin Sihite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu Kelvin Sihite — Business & System Analyst',
    description: 'Portofolio Sarjana Sistem Informasi UAJY.',
    images: ['/images/profile.jpg'],
  },
  // Tempel kode verifikasi dari Google Search Console di sini
  // verification: { google: 'kode-verifikasi-anda' },
};

export const viewport = {
  themeColor: '#f5f8ff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=Plus+Jakarta+Sans:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
