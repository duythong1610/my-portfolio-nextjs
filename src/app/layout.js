import "./globals.css";

import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

export const metadata = {
  icons: {
    icon: "https://storage.googleapis.com/my-image-products/icon_portfolio.png",
  },
  locale: "vi",
  type: "website",
  description: "Portfolio Âu Duy Thông 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  );
}
