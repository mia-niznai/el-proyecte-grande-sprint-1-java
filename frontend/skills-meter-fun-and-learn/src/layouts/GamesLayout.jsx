import {Outlet} from "react-router-dom";

export default function GamesLayout () {
    return(
        <>
<div className="games-layout" ></div>
    <h2>Games</h2>

    <main id="main">
        <Outlet />
    </main>
        </>
)
}