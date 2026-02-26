import clsx from 'clsx';
import { use, useContext } from 'react';
import useTheme from '../hooks/useTheme';
import { useNavigate } from 'react-router'; 


function MenuItems({ item,theme}) {
  const navigate=useNavigate();
  return(
               <li>
                  <button onClick={()=>navigate(`/${item.toLowerCase()}`)} className={clsx("w-full text-left p-2 rounded hover:bg-opacity-80 transition-colors ",
                    theme === "light" && "hover:bg-gray-200",
                    theme === "dark" && "hover:bg-gray-900"
                )}>
                    {item}
                  </button>
                </li>
  )
}


export default function Sidebar() {
    const {theme} = useTheme();

    const menuItems = ['Dashboard', 'Profile', 'Settings', 'Help'];
  return (
    <aside className={clsx("w-64 p-4 transition-colors duration-300",
        theme === "light" && " bg-gray-50 text-gray-800",
        theme === "dark" && "bg-gray-800 text-gray-100"
    )}>
        <nav className="">
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">
            {menuItems.map((item) => (
                <MenuItems key={item} item={item} theme={theme}/>    
                ))}
        </ul>
        </nav>   
    </aside>
  )
}
