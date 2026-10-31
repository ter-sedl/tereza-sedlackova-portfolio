"use client";
import { useEffect, useState } from "react";
import styles from "./theme-button.module.css";



type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";
type InitializedState = boolean;
type MountedState = boolean;

export default function ThemeButton() {


    const [preference, setPreference] =
        useState<ThemePreference>("system");

    const [resolvedTheme, setResolvedTheme] =
        useState<ResolvedTheme>("light");

    // initialized má na starost, ať se script na aplikaci theme spustí až po inicializaci 
    const [initialized, setInitialized] =
        useState<InitializedState>(false);

    // mounted má na starost, aby text podle resolvedTheme se vykreslil až po mounted
    const [mounted, setMounted] =
        useState<MountedState>(false);

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

        setInitialized(true);
        setMounted(true);
    }, []);

    // Nastavení skutečného vzhledu stránky
    useEffect(() => {
        if (!initialized) return;

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
    }, [preference, initialized]);

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
                aria-checked={mounted && resolvedTheme === "dark"}
                aria-label={mounted
                    ? `Přepnout na ${resolvedTheme === "dark" ? "světlý" : "tmavý"} režim`
                    : "Přepínání barevného režimu"}
                onClick={toggleTheme}
                className={styles.themeToggle}
            >
                {mounted ? (
                    <>
                        {/* <span aria-hidden="true">
                            {resolvedTheme === "dark" ? "☀" : "☾"}
                        </span> */}

                        <span className="styles[theme-toggle__label]">
                            {resolvedTheme === "dark" ? "Light" : "Dark"}
                        </span>
                    </>
                ) : (
                    <span className="styles[theme-toggle__label] invisible" aria-hidden="true">
                     Light
                    </span>
                )}
            </button>

        </>

    );


};