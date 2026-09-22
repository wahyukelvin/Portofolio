import './globals.css';
import { SITE_URL } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Portfolio - Wahyu Kelvin Sihite',
  description:
    'Portfolio of Wahyu Kelvin Sihite, an Information Systems graduate from Universitas Atma Jaya Yogyakarta (GPA 3.69). Business analysis, systems design, quality assurance, data analytics, and digital marketing.',
  keywords: [
    'Wahyu Kelvin Sihite', 'portfolio', 'information systems', 'business analyst',
    'system analyst', 'quality assurance', 'data analyst',
    'Universitas Atma Jaya Yogyakarta', 'Yogyakarta',
  ],
  authors: [{ name: 'Wahyu Kelvin Sihite' }],
  creator: 'Wahyu Kelvin Sihite',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Wahyu Kelvin Sihite Portfolio',
    title: 'Wahyu Kelvin Sihite — Business & System Analyst',
    description:
      'Information Systems graduate from UAJY. Business analysis, systems design, QA, and data analytics.',
    images: [{ url: '/images/profile.jpg', width: 800, height: 1000, alt: 'Wahyu Kelvin Sihite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu Kelvin Sihite — Business & System Analyst',
    description: 'Portfolio of an Information Systems graduate from UAJY.',
    images: ['/images/profile.jpg'],
  },
  // verification: { google: 'your-verification-code' },
};

export const viewport = {
  themeColor: '#f5f8ff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
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