import {Hero} from "../components/Hero.jsx";
import {Sidebar} from "../components/Sidebar.jsx";
import {Navbar} from "../components/Navbar.jsx";
export function Home() {
    return (
        <>
            {/*<Sidebar/>*/}
            <Navbar />
        <Hero/>
        </>
    )
}