import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { DarkModeContext } from '../context/DarkModeContext.jsx';


export default function Profile() {
    const { selectWord } = useContext(LanguageContext);
    const { darkButton, setDarkButton } = useContext(DarkModeContext);

    return (
        <div className="profile">
            <div className="text-2xl font-bold mb-100 text-greenColor">
                {selectWord("Profile")}
            </div>
            <div className="profile-info">
                <div class="text-lg min-w-100">
                    <h3 class="text-2xl font-bold">{selectWord("BasicInfo")}</h3>
                    <dl>
                        <dt> <span class="text-greenColor">{selectWord("BirthDate")} </span>
                            <span>{selectWord("18/05/1986")}</span></dt>

                        <dt> <span span class="text-greenColor">{selectWord("Residence")}  </span>
                            <span>{selectWord("Mannheim/Germany")}</span></dt>

                        <dt> <span span class="text-greenColor">{selectWord("educationStatus")}  </span>
                            <span>{selectWord("sakaryaUniversity")}</span></dt>

                        <dt> <span span class="text-greenColor">{selectWord("preferedRole")}  </span>
                            <span>{selectWord("theRoles")}</span></dt>
                    </dl>

                </div>

                <div className="profile-middle text-white text-lg mt-4 min-w-2xs">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJp09vbM0VbiLixvfr2wR1fruW4Iz3iZTIgL-nG2lzZks4E3tw4nzte3HMBK_hl2tJCCI&usqp=CAU"
                        alt="Profile"
                        className="rounded-2xl w-sm h-sm"
                    />
                </div>

                <div className="profile-right text-white text-lg mt-4 min-w-2xs">
                    <h2 className="text-2xl font-bold">{selectWord("AboutMe")}</h2>
                    <dl>
                        <dt>
                            {selectWord("smallSummary")}
                        </dt>


                    </dl>
                </div>
            </div>
        </div >
    );
}
