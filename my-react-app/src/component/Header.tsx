import { useState } from "react";

const Header = ({ toggleSidebar }: any) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="header">
      <div className="d-flex">
        <i className="bi bi-list icon-style" onClick={toggleSidebar}></i>
        {/* <p> Fullfilmart</p> */}
      </div>
      <div className="header-right mt-2">
        <div className="userName">
          <p>User Name</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
