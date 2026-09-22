import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
});

export const metadata: Metadata = {
  title: {
    default: "μLearn GCEK",
    template: "%s · μLearn GCEK",
  },
  description:
    "μLearn GCEK — the μLearn campus chapter at Government College of Engineering, Kannur. A student community that learns by doing and builds together.",
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png", sizes: "32x32" }],
  },
  openGraph: {
    title: "μLearn GCEK",
    description:
      "The μLearn campus chapter at Government College of Engineering, Kannur — a student community that learns by doing and builds together.",
    type: "website",
    locale: "en_IN",
    siteName: "μLearn GCEK",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-brand-300 focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-brand-700 focus:shadow-lift"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
