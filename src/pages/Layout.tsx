import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main className='min-h-screen'>
                <Outlet/>
            </main>
           <Footer/>
        </div>
    );
};

export default Layout;