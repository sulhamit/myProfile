import { createContext, useEffect, useState } from "react"
import tr from "../data/tr.json";
import en from "../data/en.json";

export const LanguageContext = createContext();
export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(en);
    const languageHandleChange = (lang) => {
        setLanguage(lang);
    };

    const selectWord = (key) => {
        return language[key] || key;
    };
    return (
        <LanguageContext.Provider value={{ language, selectWord, languageHandleChange }}>
            {children}
        </LanguageContext.Provider>
    )
}