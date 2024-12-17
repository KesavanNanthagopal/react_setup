import { useState } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Header toggleSidebar={toggleSidebar} />
            <div className="d-flex">
                <Sidebar isOpen={isSidebarOpen} />
                <div className="main-content flex-grow-1">
                    <Outlet/>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Layout;
