import {Outlet} from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const RootLayout = ()=> {
return (
<>
<NavbarComp/>
    <div className="root-layout" style={{minHeight: "91.5vh"}}>
        <header>
        </header>
        <main id="main">
            <Outlet />
        </main>
    </div>
</>
)
}

export default RootLayout;
