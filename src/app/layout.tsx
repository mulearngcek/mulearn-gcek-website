import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "μLearn GCEK",
  description:
    "μLearn GCEK — the μLearn campus chapter at Government College of Engineering, Kannur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
