import "./globals.css";

import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

export const metadata = {
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
