import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dubinski-sjaj-dk.tariktare.chatgpt.site"),
  title: "Dubinski sjaj DK | Dubinsko čišćenje Sarajevo",
  description: "Profesionalno dubinsko čišćenje namještaja u Sarajevu. Brzo, kvalitetno i pouzdano.",
  openGraph: {
    title: "Dubinski sjaj DK | Vaš namještaj ponovo kao nov",
    description: "Profesionalno dubinsko čišćenje namještaja u Sarajevu.",
    url: "/",
    siteName: "Dubinski sjaj DK",
    locale: "bs_BA",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Dubinski sjaj DK — dubinsko čišćenje u Sarajevu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubinski sjaj DK | Vaš namještaj ponovo kao nov",
    description: "Profesionalno dubinsko čišćenje namještaja u Sarajevu.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
