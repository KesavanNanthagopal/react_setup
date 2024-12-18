import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen }: any) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className={`sidebar ${isOpen ? 'shrink' : ''}`}>
            <ul className="nav flex-column pt-4 p-1">
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/dashboard") ? "active" : ""}`}
                        onClick={() => handleNavigation("/dashboard")}
                    >
                        <i className="bi bi-clipboard-data-fill"></i>
                        {!isOpen && <span className="menu-text">Dashboard</span>}
                    </span>
                </li>
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/menu") ? "active" : ""}`}
                        onClick={() => handleNavigation("/menu")}
                    >
                        <i className="bi bi-basket"></i>
                        {!isOpen && <span className="menu-text">Menu</span>}
                    </span>
                </li>
                <li className="nav-item pb-1">
                    <span
                        className={`nav-link navColors ${isActive("/order") ? "active" : ""}`}
                        onClick={() => handleNavigation("/order")}
                    >
                        <i className="bi bi-file-earmark-text"></i>
                        {!isOpen && <span className="menu-text">Order</span>}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
