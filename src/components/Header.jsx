import picture1 from "../../picture/picture1.jpg";
import githubLogo from "../../picture/githubLogo.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { DarkModeContext } from '../context/DarkModeContext.jsx';



const Header = () => {
    const { selectWord } = useContext(LanguageContext);
    const { darkButton, setDarkButton } = useContext(DarkModeContext);
    return (

        <div className="header">
            <div className="header-left">


                <div style={{ textAlign: "left", width: "90%" }}>
                    <p style={{ color: "#caf281" }} class="text-2xl font-bold mb-4">{selectWord("HamitSul")}</p>
                    <p>{selectWord("Entry")}</p>
                    <p>{selectWord("IAmAFrontendDeveloper")}</p>
                    <span class="flex">
                        <a href="https://www.linkedin.com/in/hamit-s-927736111/" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Profilim" width="40" height="40" />
                        </a>
                        <a href="https://github.com/sulhamit" target="_blank">
                            <img src={githubLogo} alt="LinkedIn Profilim" width="40" height="40" />
                        </a>
                    </span>
                </div>
            </div>
            <div className="profile-center">
                <img src={picture1} alt="Hamit Sul" className="profile-photo" />
            </div>
            <div className="header-right">
            </div>
        </div >
    )
}
export default Header;