import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ClientChatbot from "@/components/ClientChatbot";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BEYOND REACH | White Label Digital Marketing Agency",
  description: "India-based white label digital marketing delivery partner for US agencies.",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.beyondreach.agency/#organization",
  "name": "BEYOND REACH",
  "url": "https://www.beyondreach.agency/",
  "logo": "https://www.beyondreach.agency/images/logo.png",
  "description": "India-based white label digital marketing delivery partner for US agencies.",
  "email": "partners@beyondreach.agency",
  "address": { "@type": "PostalAddress", "addressCountry": "IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <ClientChatbot />
      </body>
    </html>
  );
}
