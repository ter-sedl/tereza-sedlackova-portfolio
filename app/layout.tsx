import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tereza Sedláčková",
  description: "Junior Frontend Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
