import Head from "next/head";
import "./globals.css";

import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: {
    default: "Portfolio - Âu Duy Thông",
    template: `%s | Portfolio - Âu Duy Thông`,
  },
  description: "Portfolio - Âu Duy Thông 2023",
  verification: {
    google:
      "google-site-verification=ewCT8qjNOWqgeae2vR0_7yhi0YnXKW_D5QTgTbycMIY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  );
}
