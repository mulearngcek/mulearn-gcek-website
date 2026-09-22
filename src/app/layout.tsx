import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
