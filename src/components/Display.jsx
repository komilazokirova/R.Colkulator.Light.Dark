// export default function Display({ value = "1997" }) {
//     const { theme } = useTheme();
//     const isDark = theme === "dark";

//     return (
//         <div
//             className={`
//                 h-20 rounded-2xl px-4 flex items-center justify-end
//                 border-2 border-blue-500
//                 ${isDark ? "bg-[#141414]" : "bg-[#f4f6f9]"} `} >
//             <span className={`text-4xl font-mono tracking-wider ${isDark ? "text-white" : "text-gray-800"}`}>
//                 {value}
//             </span>
//         </div>
//     );
// }