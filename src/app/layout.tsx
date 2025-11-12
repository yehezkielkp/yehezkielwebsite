import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Oura Studios - Creative Digital Agency Jakarta",
    template: "%s | Oura Studios",
  },
  description: "Oura Studios adalah creative digital agency yang berbasis di Jakarta Selatan, Indonesia. Kami mengkhususkan diri dalam UI/UX Design, Web Development, Branding, dan Motion Design untuk membantu bisnis Anda berkembang di era digital.",
  keywords: [
    "Oura Studios",
    "creative agency Jakarta",
    "digital agency Indonesia",
    "UI UX design",
    "web development",
    "branding agency",
    "motion design",
    "Jakarta creative agency",
    "website design Jakarta",
    "digital marketing",
  ],
  authors: [{ name: "Oura Studios" }],
  creator: "Oura Studios",
  publisher: "Oura Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourdomain.com"), // TODO: Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oura Studios - Creative Digital Agency Jakarta",
    description: "Creative digital agency specializing in UI/UX Design, Web Development, Branding, and Motion Design in Jakarta, Indonesia.",
    url: "https://yourdomain.com", // TODO: Update with your actual domain
    siteName: "Oura Studios",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/img/logo/LogoWhiteBGTransparant.png",
        width: 1200,
        height: 630,
        alt: "Oura Studios - Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oura Studios - Creative Digital Agency Jakarta",
    description: "Creative digital agency specializing in UI/UX Design, Web Development, Branding, and Motion Design in Jakarta, Indonesia.",
    images: ["/assets/img/logo/LogoWhiteBGTransparant.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    // TODO: Add your verification codes after setting up
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
