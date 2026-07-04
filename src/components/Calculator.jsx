export default function Calculator() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div
            className={`
                w-[320px] sm:w-[360px] 
                p-5 rounded-[32px]
                flex flex-col gap-4
                transition-colors duration-300
                ${isDark 
                    ? "bg-[#1e1e1e] shadow-[10px_10px_20px_#0a0a0a,-10px_-10px_20px_#2c2c2c]" 
                    : "bg-[#e8ecf1] shadow-[10px_10px_20px_#c5c9d0,-10px_-10px_20px_#ffffff]"
                }
            `}
        >
            <Display />
            <Keypad />
        </div>
    );
}