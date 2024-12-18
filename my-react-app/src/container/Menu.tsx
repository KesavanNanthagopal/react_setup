import { useState } from 'react';
import biryani from '../assets/images/biryani.jpg'
import AddMenuModal from '../component/AddMenu';

function Menu() {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$12.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={biryani} className="card-img-top" alt="Menu item" />
                            <div className="card-body">
                                <h5 className="card-title menuName">Menu Item</h5>
                                <p className="card-text menuPrice">$15.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddMenuModal isVisible={isModalVisible} onClose={toggleModal} />
        </div>
    );
}

export default Menu;
