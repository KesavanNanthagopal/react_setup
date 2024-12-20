import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConformationPopup from "./ConformationPopup";

const Header = ({ toggleSidebar }: any) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const handleConfirmLogout = () => {
    setShowPopup(false);
    navigate('/')
  };

  const handleCancelLogout = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div className="header">
      <div className="d-flex">
        <i className="bi bi-list icon-style" onClick={toggleSidebar}></i>
        {/* <p> Fullfilmart</p> */}
      </div>
      <div className="header-right mt-2">
        <div className="logout">
          <button className="btn btn-outline-light d-flex align-items-center" onClick={handleLogoutClick}>
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>
      </div>
    </div>
    {showPopup && (
      <ConformationPopup
        message="Are you sure, Do you want to logout?"
        confirmButtonLabel="Yes"
        cancelButtonLabel="No"
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    )}
    </>
  );
};

export default Header;
