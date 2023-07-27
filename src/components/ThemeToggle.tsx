import { useEffect, useState } from "react";
export default function ThemeToggle() {
 const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

 const handleClick = () => {
   setTheme(theme === "light" ? "dark" : "light");
 };

 useEffect(() => {
   if (theme === "dark") {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
   localStorage.setItem("theme", theme);
 }, [theme]);

 return (
  <button title="Light" onClick={handleClick}>{theme === "light" ? 
  (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
    )}
  </button>
 );
}