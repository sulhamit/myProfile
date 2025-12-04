import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

const Projects = () => {
    const { darkButton, setDarkButton } = useContext(DarkModeContext);

    return (
        <div className="projects">
            <div className="text-purpleColor m-100 text-4xl font-bold">Projects</div>
            <div className="project-list">
                <div className="project-item">
                    <h3 className="text-2xl font-bold">Project 1</h3>
                    <p>Description of Project 1</p>
                </div>
                <div className="project-item">
                    <h3 className="text-2xl font-bold">Project 2</h3>
                    <p>Description of Project 2</p>
                </div>
            </div>

        </div>
    )
}
export default Projects;