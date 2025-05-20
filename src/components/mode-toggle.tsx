import { Moon, Sun, Monitor } from "lucide-react";
import { Theme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

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

  const CurrentIcon = themes[themeNum].icon;
  return (
    <>
      <div className='flex absolute inset-0 h-full'>
        <div className='m-auto w-max '>
          {/* IMPORTANT PART IS THE BUTTON */}
          <Button
            className='cursor-pointer'
            onClick={() => {
              setThemeNum((prev) => (prev + 1) % themes.length);
              setTheme(themes[(themeNum + 1) % themes.length].key);
            }}
            variant='default'
            size='lg'>
            <CurrentIcon
              className='h-[1.2rem] w-[1.2rem] transition-all'
              strokeWidth={2.5}
            />
            <p className='capitalize font-semibold'>{themes[themeNum].key}</p>
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </div>
      </div>
    </>
  );
}
