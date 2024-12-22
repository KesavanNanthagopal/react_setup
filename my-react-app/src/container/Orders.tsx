import { useState } from "react";
import moment from 'moment';
import biryani from '../assets/images/biryani.jpg';


const OrderScreen = () => {
    const [activeTab, setActiveTab] = useState("Pending");

    const [activeOrderIndex, setActiveOrderIndex] = useState(null);

    const orderId = '12345';
    const userName = 'John Doe';
    const orderDate = moment('2024-06-01T08:45:00').format('MMMM D, YYYY hh:mm A');

    const handleOrderClick = (index: any) => {
        setActiveOrderIndex(index === activeOrderIndex ? null : index);
    };
    return (
        <div className="container-fluid py-4 order-row order-overall-container">
            <div className="row order-row">
                <div className="col-4 first-container">
                    <div className="btn-group order-btn-group w-100 mb-3" role="group">
                        {[
                            { label: "Order in", key: "Order" },
                            { label: "Pending", key: "Pending" },
                            { label: "Delivered", key: "Delivered" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={`btn ${activeTab === tab.key ? "order-btn-active" : "order-btn-color"}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div
                        className="overflow-auto order-list"
                    >
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleOrderClick(index)}
                                style={{
                                    backgroundColor: activeOrderIndex === index ? "#fef6e4" : "#ffffff",
                                    border: activeOrderIndex === index ? "1px solid #ff8c00" : "1px solid #f3c07b",
                                    padding: "15px",
                                    margin: "10px",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "3px",
                                    cursor: "pointer",
                                }}
                            >
                                <div className="row">
                                    <div className="col-8">
                                        <div className="row">
                                            <p style={{ color: "black", fontWeight: "bold" }}>
                                                Order ID: #{1000 + index}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end" style={{ alignSelf: "flex-end", textAlign: "end", color: "#ff8c00", fontWeight: "bold" }}>
                                        <div>${100 + index * 10}</div>
                                    </div>
                                </div>
                                <div className="row" style={{ color: "gray" }}>
                                    <p className="order-timing">{moment().format("MMMM D YYYY, hh:mm A")}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-8">
                    <div className=" order-details-container h-100">
                        <div className="row">
                            <div className="p-4">
                                <h5 className="order-details-header">Order Details</h5>
                            </div>
                        </div>
                        <div className="order-details-content">
                            <div className="row p-4">
                                <div className="order-details-mid-container">
                                    <div className="row">
                                        <div className="col-4 d-flex flex-column align-items-start">
                                            <span className="order-details-id mb-2">Order #{orderId}</span>
                                            <span className="order-details-date">{orderDate}</span>
                                        </div>
                                        <div className="col-4 ms-auto d-flex justify-content-end">
                                            <span className="order-details-user">User: {userName}</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="d-flex align-items-center mb-2" style={{ color: 'orange' }}>
                                                <i className="bi bi-geo-alt-fill me-2"></i>
                                                <strong>Delivery</strong>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    123 Main St, Springfield Lorem ipsum dolor sit amet consectetur!
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="d-flex align-items-center justify-content-center mb-2" style={{ color: 'orange' }}>
                                                <i className="bi bi-clock-fill me-2"></i>
                                                <strong>Delivery Time</strong>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <span>June 1, 2024, 10:00 AM</span>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="d-flex align-items-center justify-content-end mb-2" style={{ color: 'orange' }}>
                                                <i className="bi bi-cash-stack me-2"></i>
                                                <strong>Payment</strong>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end">
                                                <span>Paid</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="container" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                                        <div className="row mb-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={biryani}
                                                        alt="Menu Item"
                                                        className="img-fluid me-3"
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    />
                                                    <div>
                                                        <div><strong>Biriyani</strong></div>
                                                        <div>x 2</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-end">
                                                <span className="fw-bold">$400.00</span>
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={biryani}
                                                        alt="Menu Item"
                                                        className="img-fluid me-3"
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    />
                                                    <div>
                                                        <div><strong>Biriyani</strong></div>
                                                        <div>x 2</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-end">
                                                <span className="fw-bold">$400.00</span>
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={biryani}
                                                        alt="Menu Item"
                                                        className="img-fluid me-3"
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    />
                                                    <div>
                                                        <div><strong>Biriyani</strong></div>
                                                        <div>x 2</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-end">
                                                <span className="fw-bold">$400.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-2">
                                        <div className="col-6 d-flex align-items-center">
                                            <strong>Total</strong>
                                        </div>

                                        <div className="col-6 d-flex align-items-center justify-content-end">
                                            <strong className="fw-bold" style={{color:"orange"}}>$500.00</strong>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="order-button-container">
                                <button className="order-reject-button">
                                    Reject Order
                                </button>
                                <button className="order-accept-button">
                                    Accept Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderScreen;
