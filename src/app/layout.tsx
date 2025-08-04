import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unanimous Communication PK - IT-Enabled Services & Outsourcing",
  description: "Unanimous Communication PK provides IT-enabled services and outsourcing, primarily to e-commerce businesses. We offer call center services, SEO, virtual assistance, and live chat support.",
  keywords: "call center, BPO, outsourcing, IT services, SEO, virtual assistance, live chat support",
  authors: [{ name: "Unanimous Communication PK" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/logo.png', type: 'image/png', sizes: '16x16 32x32 48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/assets/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Unanimous Communication PK - IT-Enabled Services & Outsourcing",
    description: "Unanimous Communication PK provides IT-enabled services and outsourcing, primarily to e-commerce businesses. We offer call center services, SEO, virtual assistance, and live chat support.",
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Unanimous Communication PK Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Unanimous Communication PK - IT-Enabled Services & Outsourcing",
    description: "Unanimous Communication PK provides IT-enabled services and outsourcing, primarily to e-commerce businesses. We offer call center services, SEO, virtual assistance, and live chat support.",
    images: ['/assets/logo.png'],
  },
  // viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
