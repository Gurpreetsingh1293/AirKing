import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TawkToChat from "@/components/TawkToChat/TawkToChat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Air King - Premium Air Compressors & Oxygen Plants | Indore & Rau",
  description: "Leader in pneumatic air compressors, oxygen plants, and spare parts services in Indore, Rau, and central India.",
  keywords: [
    "air king indore",
    "aur king rau",
    "air king rau indore",
    "pneumatic air compressors",
    "oxygen plants indore",
    "air compressor spare parts",
    "industrial air compressors",
    "air king company",
    "central india compressor manufacturer"
  ],
  openGraph: {
    title: "Air King - Premium Air Compressors",
    description: "Premium Air Compressors and Oxygen Plants provider in Indore and Rau.",
    siteName: "Air King",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TawkToChat />
      </body>
    </html>
  );
}
