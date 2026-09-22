import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Liana Voinea — Web Design, Brand & SEO",
  description:
    "Portfolio of Liana Voinea, a Villeurbanne-based designer crafting elegant, user-centric websites, brands and SEO strategies that build trust and deliver real results.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    images: ["/assets/Liana-Voinea-Web-Design-Brand-SEO-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://bolt.new/static/og_default.png"],
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
