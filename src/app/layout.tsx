import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junaid Ali - Full-Stack Developer",
  description: "Portfolio of Junaid Ali - Full-Stack Developer specializing in MERN and Next.js",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
