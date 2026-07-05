import Calculator from "./components/Button";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative px-16 py-6 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-200"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-16 px-4 py-2 rounded-xl text-white text-2xl"
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      <div className="flex justify-center items-center min-h-screen">
        <Calculator />
      </div>
    </div>
  );
}

export default App;