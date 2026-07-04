export default function Button({ value, variant = "number", onClick }) {
    const base = "aspect-square rounded-2xl text-lg font-semibold transition-all duration-150 active:scale-95";

    const variants = {
        number: "bg-[#e8ecf1] text-gray-700 shadow-[4px_4px_8px_#c5c9d0,-4px_-4px_8px_#ffffff] dark:bg-[#1e1e1e] dark:text-white dark:shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#2c2c2c]",
        operator: "border-2 border-blue-500 text-blue-500 bg-[#e8ecf1] dark:bg-[#1e1e1e]",
        equals: "bg-blue-500 text-white shadow-[4px_4px_8px_#c5c9d0,-4px_-4px_8px_#ffffff]",
        clear: "bg-[#e8ecf1] text-gray-700 dark:bg-[#1e1e1e] dark:text-white",
    };

    return (
        <button className={`${base} ${variants[variant]}`} onClick={() => onClick(value)}>
            {value}
        </button>
    );
}