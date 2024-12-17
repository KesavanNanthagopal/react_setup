const Sidebar = ({ isOpen }: any) => {
    return (
        <div className={`sidebar ${isOpen ? 'shrink' : ''}`}>
        <ul className="nav flex-column p-3">
            <li className="nav-item">
                <a href="#" className="nav-link text-white">
                <i className="bi bi-clipboard-data-fill"></i>
                    {!isOpen && <span className="menu-text">Home</span>}
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-white">
                <i className="bi bi-basket"></i>

                    {!isOpen && <span className="menu-text">Menu</span>}
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-white">
                <i className="bi bi-file-earmark-text"></i>

                    {!isOpen && <span className="menu-text">Order</span>}
                </a>
            </li>
        </ul>
    </div>
    );
};

export default Sidebar;
