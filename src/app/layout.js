import "./globals.css";

import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

export const metadata = {
  icons: {
    icon: "https://storage.googleapis.com/my-image-products/icon_portfolio.png",
  },
  images: [
    {
      url: "https://nextjs.org/og.png",
      width: 800,
      height: 600,
    },
  ],
  locale: "vi",
  type: "website",
  title: "Portfolio - Âu Duy Thông",
  description: "Portfolio Âu Duy Thông 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  );
}
