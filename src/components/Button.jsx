import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Button = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Fon rangi
  const btnBg = isDark ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-800";

  // soya - dark va light uchun alohida
  const btnShadow = isDark
    ? "shadow-[6px_6px_12px_#0a0a0a,-6px_-6px_12px_#2a2a2a]"
    : "shadow-[6px_6px_12px_#c8ccd1,-6px_-6px_12px_#ffffff]";

  const btnActiveShadow = isDark
    ? "active:shadow-[inset_6px_6px_12px_#0a0a0a,inset_-6px_-6px_12px_#2a2a2a]"
    : "active:shadow-[inset_6px_6px_12px_#c8ccd1,inset_-6px_-6px_12px_#ffffff]";

  // Har bir oddiy tugma uchun umumiy klasslar
  const btnClass = `${btnBg} ${btnShadow} ${btnActiveShadow} rounded-xl p-6 transition-shadow`;

  return (
    <div className='flex flex-col gap-6'>
      {/* Ekran */}
      <div
        className={`${isDark ? "bg-gray-900 border-blue-500" : "bg-gray-100 border-blue-500"} 
          border-2 rounded-2xl px-4 py-6 text-right text-3xl font-mono w-80 ${isDark ? "text-white" : "text-gray-800"}`}
      >
        0
      </div>

     {/* tugma */}
      <div className='grid grid-cols-4 gap-4'>
        <button className={btnClass}>AC</button>
        <button className={btnClass}>$</button>
        <button className={btnClass}>%</button>
        <button className={btnClass}>/</button>

        <button className={btnClass}>7</button>
        <button className={btnClass}>8</button>
        <button className={btnClass}>9</button>
        <button className={btnClass}>x</button>

        <button className={btnClass}>4</button>
        <button className={btnClass}>5</button>
        <button className={btnClass}>6</button>
        <button className={btnClass}>-</button>

        <button className={btnClass}>1</button>
        <button className={btnClass}>2</button>
        <button className={btnClass}>3</button>
        <button className={btnClass}>+</button>

        <button className={`col-span-2 ${btnClass}`}>0</button>
        <button className={btnClass}>.</button>
        <button className={`bg-blue-500 text-white rounded-xl p-6 transition-shadow ${btnShadow} ${btnActiveShadow}`}>
          =
        </button>
      </div>
    </div>
  );
}

export default Button