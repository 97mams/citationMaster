import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Mamisoa Ratsimbarison",
  description: "Web developper junior",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className="h-full">
      <body className={cn(GeistSans.variable, "font-sans h-full bg-background text-foreground max-w-lg m-auto p-4")}>
        <div className="flex flex-col gap-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

