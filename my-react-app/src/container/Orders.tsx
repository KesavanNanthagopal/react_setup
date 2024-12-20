import { useState } from "react";
import moment from 'moment';


const OrderScreen = () => {
    const [activeTab, setActiveTab] = useState("Pending");

    const [activeOrderIndex, setActiveOrderIndex] = useState(null);

    const handleOrderClick = (index: any) => {
        setActiveOrderIndex(index === activeOrderIndex ? null : index); // Toggle active state
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
                        <div className="row">
                            <div className="order-details-mid-container">
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>

                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
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
