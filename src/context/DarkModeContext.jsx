import { createContext } from "react";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorege";

export const DarkModeContext = createContext();
export const DarkModeContextProvider = ({ children }) => {
    const [darkButton, setDarkButton] = useLocalStorage("karanlikMod", false);

    useEffect(() => {
        document.body.style.backgroundColor = darkButton ? "#252128" : "#FFFFFF";
        console.log("Dark mode is now", darkButton ? "enabled" : "disabled");
    }, [darkButton]);
    return (
        <DarkModeContext.Provider value={{ darkButton, setDarkButton }}>
            {children}
        </DarkModeContext.Provider>
    );
}

