import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/data/profile';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.title,
    description: '14+ years building CMS (Drupal) web applications. Six Acquia certifications.',
    images: ['/photo.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#061416',
};

// Applies a saved light theme before first paint so there is no flash.
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
