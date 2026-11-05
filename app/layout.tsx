import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeButton from "@/features/theme/theme-button";
import Header from "@/features/header/header";


export const metadata: Metadata = {
  title: "Tereza Sedláčková",
  description: "Frontend Developer",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
export default function RootLayout({ children }: LayoutProps<"/">) {


  return (
    <html
      lang="cs"
      className={spaceGrotesk.variable}
      // suppress je potřeba kvůli změně theme v html ještě před hydratací, aby neproblikávala bílý pře refreshi
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem("theme");
                  var theme;

                  if (saved === "light" || saved === "dark") {
                    theme = saved;
                  } else {
                    theme = window.matchMedia(
                      "(prefers-color-scheme: dark)"
                    ).matches ? "dark" : "light";
                  }

                  document.documentElement.dataset.theme = theme;
                } catch {
                  document.documentElement.dataset.theme =
                    window.matchMedia(
                      "(prefers-color-scheme: dark)"
                    ).matches ? "dark" : "light";
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">
        <Header />
        <main>
          {children}
        </main>
        <ThemeButton />
      </body>
    </html>
  );
}
