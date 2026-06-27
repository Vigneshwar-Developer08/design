import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://forma-studio.vercel.app"),
  title: {
    default: "Forma Studio — Design & Digital Craft",
    template: "%s | Forma Studio",
  },
  description:
    "Forma Studio builds precise, memorable digital products for ambitious brands. UI/UX design, web development, branding, and digital strategy.",
  keywords: [
    "design agency",
    "UI/UX design",
    "web development",
    "branding",
    "digital strategy",
    "Next.js",
  ],
  authors: [{ name: "Forma Studio" }],
  creator: "Forma Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forma-studio.vercel.app",
    title: "Forma Studio — Design & Digital Craft",
    description:
      "Forma Studio builds precise, memorable digital products for ambitious brands.",
    siteName: "Forma Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forma Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Studio — Design & Digital Craft",
    description:
      "Forma Studio builds precise, memorable digital products for ambitious brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
