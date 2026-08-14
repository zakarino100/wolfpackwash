"use client";

import { useEffect } from "react";

/** Daytime window: 6:00am (inclusive) to 7:00pm (exclusive) = red + white. Otherwise red + black. */
export function themeForHour(hour: number): "day" | "night" {
  return hour >= 6 && hour < 19 ? "day" : "night";
}

/**
 * Sets data-theme on <html> from the visitor's LOCAL time of day and keeps it
 * current if the tab stays open across the day/night boundary.
 *
 * A `?theme=day` or `?theme=night` query param forces a theme (handy for QA,
 * screenshots, or pinning a look on a linked/QR landing). The initial value is
 * painted by an inline script (ThemeNoFlashScript) so there is no flash on load.
 */
export function ThemeProvider() {
  useEffect(() => {
    const forced = () => {
      const p = new URLSearchParams(window.location.search).get("theme");
      return p === "day" || p === "night" ? p : null;
    };
    const apply = () => {
      const theme = forced() ?? themeForHour(new Date().getHours());
      const root = document.documentElement;
      if (root.getAttribute("data-theme") !== theme) {
        root.setAttribute("data-theme", theme);
      }
    };
    apply();
    const timer = window.setInterval(apply, 60_000);
    const onVisible = () => document.visibilityState === "visible" && apply();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return null;
}

/** Inline, render-blocking script that stamps the theme before first paint. */
export function ThemeNoFlashScript() {
  const js = `(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=(q==='day'||q==='night')?q:((function(){var h=new Date().getHours();return (h>=6&&h<19)?'day':'night';})());document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','night');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
