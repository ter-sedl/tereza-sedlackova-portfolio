import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}
        <ThemeButton />
      </body>
    </html>
  );
}
