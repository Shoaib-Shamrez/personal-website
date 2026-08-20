import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Shoaib Shamrez',
    template: '%s | Shoaib Shamrez',
  },
  description:
    'Full Stack Developer & AWS Certified Solutions Architect - Personal website and portfolio of Shoaib Shamrez, showcasing projects, skills, and experience in web development and cloud architecture.',
  keywords: [
    'Shoaib Shamrez',
    'Shoaib',
    'Shamrez',
    'Portfolio',
    'Personal Website',
    'Resume',
    'Projects',
    'MERN Stack',
    'Full Stack Developer',
    'Web Developer',
    'Software Engineer',
    'AWS Certified Solutions Architect',
    'AWS Solutions Architect Associate',
    'Cloud Architecture',
    'NestJS Developer',
    'React Developer Islamabad',
  ],
  authors: [{ name: 'Shoaib Shamrez' }],
  creator: 'Shoaib Shamrez',
  metadataBase: new URL('https://shoaibshamrez.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shoaibshamrez.netlify.app',
    siteName: 'Shoaib Shamrez',
    title: 'Shoaib Shamrez',
    description:
      'Full Stack Developer & AWS Certified Solutions Architect - Personal website and portfolio of Shoaib Shamrez, showcasing projects, skills, and experience in web development and cloud architecture.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Shoaib Shamrez',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <head>
        {/* Set theme before paint to avoid a flash of the wrong theme */}
        <script
          // biome-ignore lint: inline bootstrap script must run before hydration
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
