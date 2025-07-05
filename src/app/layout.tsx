import "./global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import CoverImage from "../../public/cover.png";

const inter = Inter({
  subsets: ["latin"],
});

export function generateMetadata(): Metadata {
  const title = {
    template: "%s | HonoHub",
    default: "HonoHub - Tools for Honojs",
  };
  const description =
    "HonoHub is a collection of tools and libraries for building and managing Honojs apps.";

  return {
    title,
    description,
    keywords: [
      "Honojs",
      "toolkit",
      "javascript",
      "typescript",
      "hono",
    ],
    metadataBase: new URL("https://honohub.dev"),
    category: "education",
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: {
        width: CoverImage.width,
        height: CoverImage.height,
        url: CoverImage.src,
      },
    },
    openGraph: {
      title,
      description,
      images: {
        width: CoverImage.width,
        height: CoverImage.height,
        url: CoverImage.src,
      },
      siteName: "HonoHub Docs",
      url: "/",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <GoogleAnalytics gaId="G-950MSN3L0J" />
      </head>
      <body className="flex flex-col min-h-screen selection:bg-[#79ffe1] dark:selection:bg-[#f81ce5] dark:selection:text-white selection:text-secondary-700">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
