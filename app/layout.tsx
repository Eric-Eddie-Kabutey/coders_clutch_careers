import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

// Replace Geist with Inter (similar modern sans-serif)
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Replace Geist_Mono with Roboto_Mono
const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Careers | Coders Clutch",
  description: "Join the team of innovators at Coders Clutch. Explore our job openings and find your next career move.",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coders Clutch Careers",
              url: "https://careers.codersclutch.com",
            }),
          }}
        />

        {/* Tawk.to chat widget script */}

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
