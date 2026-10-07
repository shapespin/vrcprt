import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  // metadataBase obligă Next.js să transforme toate căile relative în URL-uri absolute complete
  metadataBase: new URL("https://design.lianavoinea.com"),
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
    url: "https://design.lianavoinea.com",
    siteName: "Liana Voinea",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/Liana-Voinea-Web-Design-Brand-SEO-og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Liana Voinea — Web Design, Brand & SEO",
      },
    ],
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