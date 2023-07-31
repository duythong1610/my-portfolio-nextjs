import Head from "next/head";
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
  description: "Portfolio Âu Duy Thông 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio - Âu Duy Thông</title>
        <meta
          name="description"
          content="Portfolio - Âu Duy Thông"
          key="desc"
        />
        <meta property="og:title" content="Portfolio - Âu Duy Thông" />
        <meta
          property="og:description"
          content="Portfolio - Âu Duy Thông 2023"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/my-image-products/icon_portfolio.png"
        />
        <meta
          name="google-site-verification"
          content="ewCT8qjNOWqgeae2vR0_7yhi0YnXKW_D5QTgTbycMIY"
        />
      </Head>
      <body className={anton.className}>{children}</body>
    </html>
  );
}
