import localFont from 'next/font/local';
import './globals.css';
import NavBar from './components/NavBar';
import { seoConfig } from './seoConfig';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});


export async function generateMetadata({ params, searchParams }, parent) {
  // Get the current pathname from the URL
  const pathname = params?.slug ? `/${params.slug}` : '/';
  const seoData = seoConfig[pathname] || seoConfig.default;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      images: [seoData.ogImage],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
