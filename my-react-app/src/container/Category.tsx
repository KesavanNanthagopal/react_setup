import { useEffect, useState } from 'react';
import biryani from '../assets/images/biryani.jpg';
import { menuItems } from '../utils/const';
import ConformationPopup from "../component/ConformationPopup";
import AddCatagoryModalProps from '../component/AddCategory';

function Category() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [category, setCatagory] = useState(null);
    const [isMobilePage, setMobilePage] = useState(false);

    const handleEdit = (id: any) => {
        setCatagory(id);
        setIsModalVisible(true);
    };

    const handleDelete = (id: any) => {
        setCatagory(id);
        setShowPopup(true);
    };

    const handleConformDelete = () => {
        setShowPopup(false);
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    const handleResize = () => {
        setMobilePage(window.innerWidth < 600)
    };

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container mt-4 menu">
            <div className="row mb-4">
                <div className="col-md-6 col-sm-6 col-10 mb-2 mb-md-0">
                    <div className="input-group">
                        <span
                            className="input-group-text"
                            id="basic-addon1"
                            style={{ backgroundColor: "#FC8019", color: "#fff" }}
                        >
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Category..."
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-2 text-md-end text-center">
                    <button className="btn custom-menu-add" onClick={toggleModal}>
                        {isMobilePage ? "+" : "Add Category"}
                    </button>
                </div>
            </div>
            <h3 className="menuheader">Category</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 scrollable-container">
                {menuItems.map((item) => (
                    <div className="col" key={item.id}>
                        <div className="card h-100 position-relative">
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
                            <img src={biryani} className="card-img-top img-fluid" alt={item.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title menuName">{item.name}</h5>
                                <p className="card-text menuPrice">{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AddCatagoryModalProps isVisible={isModalVisible} onClose={toggleModal} />
            {showPopup && (
                <ConformationPopup
                    message="Do you want to delete this category?"
                    confirmButtonLabel="Yes"
                    cancelButtonLabel="No"
                    onConfirm={handleConformDelete}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default Category;
