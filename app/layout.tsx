import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Liana Voinea — Web Design, Brand & SEO",
  description:
    "Quick-start your digital presence in the age of AI. From Brand Identity and Web Design to SEO and GEO, build a system to find your ideal clients and thrive.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Liana Voinea — Web Design, Brand & SEO",
    description:
      "Quick-start your digital presence in the age of AI. From Brand Identity and Web Design to SEO and GEO, build a system to find your ideal clients and thrive.",
    images: [
      {
        url: "/assets/Liana-Voinea-Web-Design-Brand-SEO-og.png",
        width: 1200, // Recomandat standard 1200x630 (sau 1920x911 specificat de tine)
        height: 630,
        alt: "Liana Voinea — Web Design, Brand & SEO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liana Voinea — Web Design, Brand & SEO",
    description:
      "Quick-start your digital presence in the age of AI. From Brand Identity and Web Design to SEO and GEO, build a system to find your ideal clients and thrive.",
    images: ["/assets/Liana-Voinea-Web-Design-Brand-SEO-og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preload"
          href="/fonts/LeMurmure-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" crossOrigin="anonymous" href="/assets/index-Bd_-9hTi.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
