import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayesh khuman | Software Developer",
  description:
    "Personal portfolio of Jayesh Khuman, a software developer working with Next.js, React, and modern web technologies. Interested in building reliable systems and solving backend-heavy problems.",
  metadataBase: new URL("https://jayeshkhuman.in"),
  keywords: [
    "Jayesh Khuman",
    "Jayesh Khuman Portfolio",
    "Software Developer",
    "Next.js",
    "React.js",
    "Typescript",
    "Node.js",
    "Web Developer",
  ],
  authors: [{ name: "Jayesh Khuman", url: "https://jayeshkhuman.in" }],
  creator: "Jayesh Khuman",
  alternates: {
    canonical: "https://jayeshkhuman.in",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title: "Jayesh Khuman | Software Developer",
    description:
      "Portfolio of Jayesh Khuman, a software developer exploring real-world problems through code.",
    url: "https://jayeshkhuman.in",
    siteName: "Jayesh Khuman",
    images: [
      {
        url: "/og-portfolio-v2.png",
        width: 1200,
        height: 630,
        alt: "Jayesh Khuman Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Khuman | Software Developer",
    description:
      "Software developer working with modern web technologies and backend-focused thinking.",
    images: ["/og-portfolio-v2.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jayesh Khuman",
              url: "https://jayeshkhuman.in",
              sameAs: [
                "https://github.com/Bunny099",
                "https://www.linkedin.com/in/jayeshkhuman"
                
              ],
              jobTitle: "Software Developer"
            })
          }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
