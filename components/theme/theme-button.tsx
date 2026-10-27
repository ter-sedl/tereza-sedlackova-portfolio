"use client";
import { useEffect, useState } from "react";
import styles from "./theme-button.module.css";



type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

export default function ThemeButton() {


    const [preference, setPreference] =
        useState<ThemePreference>("system");

    const [resolvedTheme, setResolvedTheme] =
        useState<ResolvedTheme>("light");

    // Načtení uložené preference při první návštěvě
    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "light" || saved === "dark") {
            setPreference(saved);
        } else {
            setPreference("system");
        }

        setResolvedTheme(
            document.documentElement.dataset.theme === "dark"
                ? "dark"
                : "light"
        );
    }, []);

    // Nastavení skutečného vzhledu stránky
    useEffect(() => {
        const media = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const applyTheme = () => {
            const theme =
                preference === "system"
                    ? media.matches
                        ? "dark"
                        : "light"
                    : preference;

            document.documentElement.dataset.theme = theme;
            setResolvedTheme(theme);
        };

        applyTheme();

        // Reaguj na změnu systému pouze v režimu system
        const handleSystemChange = () => {
            if (preference === "system") {
                applyTheme();
            }
        };

        media.addEventListener("change", handleSystemChange);

        return () => {
            media.removeEventListener("change", handleSystemChange);
        };
    }, [preference]);

    const toggleTheme = () => {
        const nextTheme =
            resolvedTheme === "dark" ? "light" : "dark";

        // Ruční volba uživatele má přednost před systémem
        localStorage.setItem("theme", nextTheme);
        setPreference(nextTheme);
    };

    return (
        <>
            <button
                type="button"
                role="switch"
                aria-checked={resolvedTheme === "dark"}
                aria-label={`Přepnout na ${resolvedTheme === "dark" ? "světlý" : "tmavý"
                    } režim`}
                onClick={toggleTheme}
                className={styles.themeToggle}
            >
                <span aria-hidden="true">
                    {resolvedTheme === "dark" ? "☀" : "☾"}
                </span>

                <span className="theme-toggle__label">
                    {resolvedTheme === "dark" ? "Light" : "Dark"}
                </span>
            </button>

        </>

    );


};