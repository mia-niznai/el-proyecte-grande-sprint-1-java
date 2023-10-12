import {Outlet} from "react-router-dom";

export default function SkillsLayout () {
    return(
        <>
            <div className="games-layout"></div>
            <h2>Skills</h2>

            <main id="main">
                <Outlet />
            </main>
        </>
    )
}