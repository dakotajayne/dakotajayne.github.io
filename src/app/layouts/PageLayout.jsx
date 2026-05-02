import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer"

export default function PageLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="grow">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}