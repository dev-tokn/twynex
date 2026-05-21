"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-5 right-5 z-[100] grid size-12 place-items-center rounded-lg border border-[#cfc3b3] bg-[#fffaf2]/95 text-[#171411] shadow-[0_18px_44px_rgba(23,20,17,0.18)] backdrop-blur transition hover:border-[#171411] dark:border-[#3c4657] dark:bg-[#111827]/95 dark:text-[#f8fafc] dark:shadow-[0_18px_44px_rgba(0,0,0,0.38)] dark:hover:border-[#8fa3bd]"
    >
      {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}
