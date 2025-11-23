import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light");
  const lightTheme = () => {
    setthemeMode("light");
  };
  const darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-700 justify-center">
          <div className="max-w-2xl">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeBtn />
            <div className="w-full max-w-sm mx-auto"></div>
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
