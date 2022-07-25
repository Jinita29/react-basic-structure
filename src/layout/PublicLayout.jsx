import {Outlet} from 'react-router-dom';
import Header from "../components/common/Header"
import Footer from './../components/common/Footer';

const PublicLayout = () => {
    return (
        <>
            <Header />
                <main className="main-content">
                    <Outlet />
                </main>
            <Footer />
        </>
    )
}

export default PublicLayout;