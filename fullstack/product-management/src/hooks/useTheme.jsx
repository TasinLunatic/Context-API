import ThemeContext  from "../contexts/ThemeContext";
import { useContext } from "react";

const useTheme=()=>{
    const themeContext=useContext(ThemeContext);

    return themeContext;
};

export default useTheme;