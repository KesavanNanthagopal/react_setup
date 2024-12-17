import { useState } from "react";

const Header = ({ toggleSidebar }: any) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
    return (
        <div className="header">
        <div>
          <button className="btn btn-light" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
        </div>
        <div className="header-right">
          <div className="profile-container" onClick={toggleDropdown}>
            <img src="profile-image.jpg" alt="Profile" className="profile-image" />
          </div>
          {/* {dropdownVisible && ( */}
            <div className="dropdown-menu">
              <button className="btn btn-light profile-btn">
                <i className="bi bi-person"></i> Profile
              </button>
              <button className="btn btn-light logout-btn">
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          {/* )} */}
        </div>
      </div>
    );
};

export default Header;
