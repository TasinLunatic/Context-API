import clsx from "clsx";
import useTheme from "../hooks/useTheme";


export default function Header( ) {
    const {theme, toggleTheme} = useTheme();
  return (
    <header className={clsx('p-4 border-b-2 transition-colors duration-300',
        theme === "light" && "bg-slate-200 border-slate-200 text-slate-800",
        theme === "dark" && "bg-slate-900 border-slate-600 text-slate-200"
    )}>

       <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
            <span className="">Welcome, Guest!</span>
            <button onClick={toggleTheme} className={clsx('px-4 py-2 rounded-lg font-medium cursor-pointer',
                theme === "light" && "bg-gray-800 text-white hover:bg-gray-700" ,
                theme=== "dark" && "bg-slate-200 text-slate-800 hover:bg-slate-200")}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
       </div>
    </header>
      
  )
}
