// "use client";

// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import { MoonIcon } from "@/icons/moon-icon";
// import { SunIcon } from "@/icons/sun-icon";

// export function ModeToggle() {
//   const { setTheme, theme } = useTheme();

//   const toggleTheme = () => {
//     console.log(theme);
//     if (theme === "dark") {
//       setTheme("light");
//     } else if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("dark");
//     }
//     console.log("Theme:", theme);
//   };

//   return (
//     <Button
//       variant="outline"
//       className="rounded-full"
//       size="icon"
//       onClick={toggleTheme}
//     >
//       {theme === "dark" ? (
//         <SunIcon />
//       ) : theme === "light" ? (
//         <MoonIcon />
//       ) : (
//         <SunIcon />
//       )}
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon } from "@/icons/moon-icon";
import { SunIcon } from "@/icons/sun-icon";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="outline"
      className="rounded-full"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon />
      ) : theme === "light" ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
