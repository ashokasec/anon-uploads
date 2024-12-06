import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { creator, project } from "@/lib/config";
import Provider from "@/components/provider";

export const metadata: Metadata = {
  title: {
    template: `%s | ${project.name.sentenceCase}`,
    default: "Share Images Anonymously for 24 Hours",
  },
  description: `${project.name.sentenceCase} is an anonymous image-sharing platform where your uploads live for 24 hours, then vanish forever—no names, no logs, no traces.`,
  openGraph: {
    type: "website",
    url: "https://anon-uploads.ashokasec.com",
    title: `Share Images Anonymously for 24 Hours`,
    description: `${project.name.sentenceCase} is an anonymous image-sharing platform where your uploads live for 24 hours, then vanish forever—no names, no logs, no traces.`,
    siteName: project.name.sentenceCase,
    images: [
      {
        url: "https://d2gox21sq349ly.cloudfront.net/app/opengraph.png",
        alt: `${project.name.sentenceCase} Opengraph`,
      },
    ],
  },
  authors: [
    {
      name: "Shivam Gupta",
      url: creator.socials.twitter,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
