import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

// 1. Critical for Mobile: Prevents scaling issues and defines the touch area
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "OPay - We Are Beyond Banking",
  description: "A professional redesign of the OPay experience.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. We use 'antialiased' here to make font rendering smoother on high-DPI mobile screens
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
