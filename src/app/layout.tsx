import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://recreationfitnessclub.com'),
  title: 'Recreation Calisthenics Fitness Club | Defy Gravity & Recreate Yourself',
  description: 'Premier Gym & Calisthenics Club. Master bodyweight mastery, strict muscle-ups, full planche, and functional gym strength in our world-class arena. Free trial available.',
  keywords: [
    'Calisthenics Gym',
    'Recreation Cali Fitness Club',
    'Bodyweight Training',
    'Street Workout',
    'Planche Training',
    'Muscle-up Classes',
    'Gymnastic Rings',
    'Gym and Fitness Club',
    'Weighted Calisthenics',
    'Handstand Mastery'
  ],
  openGraph: {
    title: 'Recreation Calisthenics Fitness Club | Recreate Your Limits',
    description: 'The ultimate training ground combining bodyweight gymnastics, high-bar rigs, and heavy barbell power.',
    url: 'https://recreationfitnessclub.com',
    siteName: 'Recreation Calisthenics Fitness Club',
    images: [
      {
        url: '/images/hero-athlete.jpg',
        width: 1200,
        height: 675,
        alt: 'Recreation Calisthenics Arena',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/images/logo.jpeg', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/images/logo.jpeg" />
        <link rel="shortcut icon" href="/images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
      </head>
      <body>
        <ModalProvider>
          <Navbar />
          <main style={{ flex: 1, minHeight: 'calc(100vh - 160px)' }}>
            {children}
          </main>
          <Footer />
          <BookingModal />
          <WhatsAppButton />
        </ModalProvider>
      </body>
    </html>
  );
}
