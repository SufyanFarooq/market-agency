import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unanimous Communication PK - IT-Enabled Services & Outsourcing",
  description: "Unanimous Communication PK provides IT-enabled services and outsourcing, primarily to e-commerce businesses. We offer call center services, SEO, web development, virtual assistance, and live chat support.",
  keywords: "call center, BPO, outsourcing, IT services, web development, SEO, virtual assistance, live chat support",
  authors: [{ name: "Unanimous Communication PK" }],
  // viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
