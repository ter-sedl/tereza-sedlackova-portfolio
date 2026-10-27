import type { Metadata } from "next";
import "./globals.css";
import ThemeButton from "@/components/theme/theme-button";


export const metadata: Metadata = {
  title: "Tereza Sedláčková",
  description: "Junior Frontend Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ThemeButton />
        </body>
    </html>
  );
}
