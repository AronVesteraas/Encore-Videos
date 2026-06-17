import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://encorevideos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Encore Videos — Turn Your Content Into Additional Revenue",
  description:
    "Encore Videos helps creators monetize their content through professionally managed compilation channels — additional revenue, zero extra work.",
  openGraph: {
    title: "Encore Videos — Turn Your Content Into Additional Revenue",
    description:
      "We help creators monetize their content through professionally managed compilation channels.",
    type: "website",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${manrope.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply saved theme before paint to avoid a flash. Defaults to light. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("encore-theme")||"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
