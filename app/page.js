import Portfolio from '../components/Portfolio';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wahyu Kelvin Sihite',
  jobTitle: 'Business & System Analyst',
  email: 'mailto:wahyukelvinsihite@gmail.com',
  telephone: '+6281338650664',
  image: '/images/profile.jpg',
  sameAs: [
    'https://www.linkedin.com/in/wahyu-kelvin-sihite',
    'https://github.com/wahyukelvinsihite',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sleman',
    addressRegion: 'Daerah Istimewa Yogyakarta',
    addressCountry: 'ID',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Universitas Atma Jaya Yogyakarta' },
    { '@type': 'HighSchool', name: 'SMA Katolik W.R. Soepratman 020 Samarinda' },
  ],
  knowsAbout: [
    'Business Analysis',
    'System Analysis and Design',
    'Quality Assurance',
    'Data Analytics',
    'Project Management',
    'Digital Marketing',
  ],
  knowsLanguage: ['Indonesian', 'English'],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Portfolio />
    </>
  );
}
