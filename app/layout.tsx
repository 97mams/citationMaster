import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Card } from "@/card";


export const metadata: Metadata = {
  title: "CitationMaster",
  description: "Web developper junior",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className="h-full">
      <body className={cn(GeistSans.variable, "font-sans h-screen bg-background text-foreground max-w-lg flex flex-col gap-4 m-auto p-4")}>
        <Header />
        {children}
      </body>
    </html>
  );
}

