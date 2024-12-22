import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen }: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobilePage, setMobilePage]=useState(false);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const isActive = (path: string) => location.pathname === path;

    useEffect(() => {
        const handleResize = () => {
            setMobilePage(window.innerWidth < 600)
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`sidebar ${isMobilePage? 'shrink-mobile':isOpen ? 'shrink' :""}`}>
            <ul className="nav flex-column pt-4 p-1">
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/dashboard") ? "active" : ""}`}
                        onClick={() => handleNavigation("/dashboard")}
                    >
                        <i className="bi bi-clipboard-data-fill"></i>
                        {(!isOpen && !isMobilePage)&& <span className="menu-text">Dashboard</span>}
                    </span>
                </li>
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/menu") ? "active" : ""}`}
                        onClick={() => handleNavigation("/menu")}
                    >
                        <i className="bi bi-basket"></i>
                        {(!isOpen && !isMobilePage) && <span className="menu-text">Menu</span>}
                    </span>
                </li>
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/order") ? "active" : ""}`}
                        onClick={() => handleNavigation("/order")}
                    >
                        <i className="bi bi-file-earmark-text"></i>
                        {(!isOpen && !isMobilePage) && <span className="menu-text">Order</span>}
                    </span>
                </li>
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/profile") ? "active" : ""}`}
                        onClick={() => handleNavigation("/profile")}
                    >
                        <i className="bi bi-person-lines-fill"></i>
                        {(!isOpen && !isMobilePage) && <span className="menu-text">Profile</span>}
                    </span>
                </li>
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/catagory") ? "active" : ""}`}
                        onClick={() => handleNavigation("/catagory")}
                    >
                        <i className="bi bi-basket"></i>
                        {(!isOpen && !isMobilePage) && <span className="menu-text">Category</span>}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
