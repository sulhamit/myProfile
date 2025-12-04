import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { DarkModeContext } from '../context/DarkModeContext.jsx';

const Skills = () => {
    const { selectWord } = useContext(LanguageContext);
    const { darkButton, setDarkButton } = useContext(DarkModeContext);

    return (
        <div className="skills">

            <h2 class="text-2xl font-bold mb-8">{selectWord("Skills")}</h2>
            <div class="skills-list">
                <div class="skill">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" />
                    <span>JAVASCRIPT</span>
                </div>
                <div class="skill">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML Logo" />
                    <span>HTML</span>
                </div>
                <div class="skill">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS Logo" />
                    <span>CSS</span>
                </div>


            </div>

            <div class="skills-list">


                <div class="skill">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" />
                    <span>VS CODE</span>
                </div>


                <div class="skill">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
                    <span>REACT</span>
                </div>
                <div class="skill">


                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
                    <span>REDUX</span>


                </div>
            </div>
        </div >
    )
}
export default Skills;