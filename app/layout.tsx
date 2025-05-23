import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://your-portfolio-url.com'),
  title: 'Amin Shennan | Data Scientist',
  description: 'Portfolio of Amin Shennan, Data Scientist, showcasing projects and skills',
  keywords: ['Amin Shennan', 'Data Scientist', 'Portfolio', 'Projects', 'Skills', 'Resume'],
  authors: [
    {
      name: 'Amin Shennan',
      url: 'https://aminshennan.com',
    },
  ],
  creator: 'Amin Shennan',
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.SITE_URL || 'https://aminshennan.com',
    title: 'Amin Shennan | Data Scientist',
    description: 'Portfolio of Amin Shennan, Data Scientist, showcasing projects and skills',
    siteName: 'Amin Shennan Portfolio',
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Amin Shennan - Data Scientist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Amin Shennan | Data Scientist',
    description: 'Portfolio of Amin Shennan, Data Scientist, showcasing projects and skills',
    creator: "@AminShennan",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/amin.png",
    apple: "/amin.png"
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Providers>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'