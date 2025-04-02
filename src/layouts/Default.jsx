import { Outlet } from "react-router"
import { useContext } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import GlobalContext from "../contexts/GlobalContext"
import Loader from "../components/Loader"

function Default() {

    const { Loading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>
                <Outlet />
                {Loading && <Loader />}
            </main>
            <Footer />

        </>
    )
}

export default Default