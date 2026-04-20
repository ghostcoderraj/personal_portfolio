import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Raj",
  description: "Crafting scalable systems, seamless user experiences, and high-performance web applications using modern tech stacks.",
  keywords: ["Aditya Raj", "Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Developer", "Software Engineer", "Full Stack Engineer", "Frontend Engineer", "Backend Engineer", "Web Engineer", "Software Engineer", "Full Stack Engineer", "Frontend Engineer", "Backend Engineer", "Web Engineer"],
  authors: [{ name: "Aditya Raj", url: "https://rajaditya.in" }],
  creator: "Aditya Raj",
  publisher: "Aditya Raj",
  openGraph: {
    title: "Aditya Raj",
    description: "Crafting scalable systems, seamless user experiences, and high-performance web applications using modern tech stacks.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
