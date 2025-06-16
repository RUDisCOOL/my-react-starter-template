import { Moon, Sun, Monitor } from "lucide-react";
import { Theme } from "@/components/themeProvider";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/themeProvider";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ModeToggle() {
  type ThemeIcon = typeof Moon | typeof Sun | typeof Monitor;
  const { setTheme } = useTheme();
  const themes: { key: Theme; icon: ThemeIcon }[] = [
    { key: "light", icon: Sun },
    { key: "dark", icon: Moon },
    { key: "system", icon: Monitor },
  ];

  // Find the index of the current theme from localStorage or default
  const getInitialThemeNum = () => {
    const storedTheme =
      (localStorage.getItem("vite-ui-theme") as Theme) || "system";
    const idx = themes.findIndex((t) => t.key === storedTheme);
    return idx === -1 ? 2 : idx; // default to 'system' if not found
  };
  const [themeNum, setThemeNum] = useState(getInitialThemeNum());

  const CurrentTheme = themes[themeNum];
  return (
    <>
      <div className="ml-auto w-max ">
        {/* IMPORTANT PART IS THE BUTTON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-block">
              <Button
                className="cursor-pointer"
                onClick={() => {
                  setThemeNum((prev) => (prev + 1) % themes.length);
                  setTheme(themes[(themeNum + 1) % themes.length].key);
                }}
                variant="ghost"
                size="sm">
                <CurrentTheme.icon
                  className="h-[1.2rem] w-[1.2rem] transition-all"
                  strokeWidth={2.5}
                />
                {/* <p className="capitalize font-semibold">{themes[themeNum].key}</p> */}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sticky="always">
            <p className="capitalize">{CurrentTheme.key}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
