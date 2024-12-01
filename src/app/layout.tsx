import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | Anon Uploads`,
    default: "Share Images Anonymously for 24 Hours",
  },
  description:
    "Anon Uploads is your playground for anonymous image sharing. Share anything, stay anonymous, and enjoy the rush for 24 hours!",
  authors: [
    {
      name: "Shivam Gupta",
      url: "https://x.com/ashokasec",
    },
    {
      name: "ashokasec",
      url: "https://ashokasec.com",
    },
  ],
  alternates: {
    canonical: "https://anon-uploads.ashokasec.com",
  },
  keywords: [
    "anon uploads",
    "anonymous image upload",
    "anonymous file upload",
    "anonymous upload",
    "anon",
  ],
  publisher: "@ashokasec",
  creator: "@ashokasec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
