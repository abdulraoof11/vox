"use client";
import * as React from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-non hover:bg-non h-0 py-3 px-0  flex items-center"
    >
      {theme === "dark" ? (
        <>
          <Icons.sun className="bg-none text-black dark:text-white" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <Icons.moon className="bg-none text-black dark:text-white" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </Button>
  );
}
