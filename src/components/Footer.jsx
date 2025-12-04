import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "@mui/material";
import { DarkModeContext } from '../context/DarkModeContext.jsx';


const Footer = () => {
    const { selectWord } = useContext(LanguageContext);
    const { darkButton, setDarkButton } = useContext(DarkModeContext);

    return (
        <header className="footer-class">
            <h2 className="margin text-4xl font-bold">{selectWord("SendMeAMessage")}</h2>
            <p className="text-black">{selectWord("FooterText")}</p>
            <p><a className="underline " href="mailto:sulhamit@gmail.com" target="_blank">{selectWord("gmail")}</a></p>

        </header>
    )
}
export default Footer;