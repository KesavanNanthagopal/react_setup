import { useState } from 'react';
import biryani from '../assets/images/biryani.jpg'
import AddMenuModal from '../component/AddMenu';
import { menuItems } from '../utils/const';
import ConformationPopup from "../component/ConformationPopup";

function Menu() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [menuId, setMenuId] = useState(null);

    const handleEdit = (id: any) => {
        setMenuId(id)
        setIsModalVisible(true)
    };

    const handleDelete = (id: any) => {
        setMenuId(id)
        setShowPopup(true)
    };

    const handleConformDelete = () => {
        setShowPopup(false)
    };

    const handleCancel = () => {
        setShowPopup(false)
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <div className="container mt-4 menu">
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "#FC8019", color: "#fff" }}>
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search menu..."
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn" onClick={toggleModal}>
                        Add Menu
                    </button>
                </div>
            </div>
            <div className="container mt-4 menu">
                <h3 className="menuheader">Menu</h3>
                <div className="row menu-row" style={{ maxHeight: "40vh", overflowY: "auto" }}>
                    {menuItems.map((item) => (
                        <div className="col-md-3" key={item.id}>
                            <div className="card position-relative">
                                <div className="position-absolute top-0 end-0 p-2">
                                    <i
                                        className="bi bi-pencil-square mx-2"
                                        onClick={() => handleEdit(item.id)}
                                        title="Edit"
                                        style={{ color: "orange", cursor: "pointer" }}
                                    ></i>
                                    <i
                                        className="bi bi-trash mx-2"
                                        onClick={() => handleDelete(item.id)}
                                        title="Delete"
                                        style={{ color: "gray", cursor: "pointer" }}
                                    ></i>
                                </div>

                                <img src={biryani} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title menuName">{item.name}</h5>
                                    <p className="card-text menuPrice">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AddMenuModal isVisible={isModalVisible} onClose={toggleModal} />
            {showPopup && (
                <ConformationPopup
                    message="Do you want to delete this menu?"
                    confirmButtonLabel="Yes"
                    cancelButtonLabel="No"
                    onConfirm={handleConformDelete}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default Menu;
