import moment from "moment";
import biryani from "../assets/images/biryani.jpg";

const OrderDetailsPopup = ({ show, onClose }: any) => {
    const orderId = "12345";
    const userName = "John Doe";
    const orderDate = moment("2024-06-01T08:45:00").format("MMMM D, YYYY hh:mm A");

    return (
        <div
            className={`modal fade ${show ? "show d-block" : "d-none"}`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            role="dialog"
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Order Details</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="order-details-content">
                            <div className="row p-4">
                                <div className="order-details-mid-container">
                                    <div className="row">
                                        <div className="col-12 col-sm-4 d-flex flex-column align-items-start mb-3">
                                            <span className="order-details-id mb-2">Order #{orderId}</span>
                                            <span className="order-details-date">{orderDate}</span>
                                        </div>
                                        <div className="col-12 col-sm-4 ms-auto d-flex">
                                            <span className="order-details-user">User: {userName}</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 mb-2">
                                            <div
                                                className="d-flex align-items-center"
                                                style={{ color: "orange" }}
                                            >
                                                <i className="bi bi-geo-alt-fill me-2"></i>
                                                <strong>Delivery</strong>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    123 Main St, Springfield Lorem ipsum dolor sit
                                                    amet consectetur!
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 mb-2">
                                            <div
                                                className="d-flex align-items-center"
                                                style={{ color: "orange" }}
                                            >
                                                <i className="bi bi-clock-fill me-2"></i>
                                                <strong>Delivery Time</strong>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>June 1, 2024, 10:00 AM</span>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 mb-2">
                                            <div
                                                className="d-flex align-items-center"
                                                style={{ color: "orange" }}
                                            >
                                                <i className="bi bi-cash-stack me-2"></i>
                                                <strong>Payment</strong>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Paid</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        className="container"
                                        style={{ maxHeight: "150px", overflowY: "auto" }}
                                    >
                                        {[...Array(3)].map((_, index) => (
                                            <div className="row mb-2" key={index}>
                                                <div className="col-6">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={biryani}
                                                            alt="Menu Item"
                                                            className="img-fluid me-3"
                                                            style={{
                                                                width: "50px",
                                                                height: "50px",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        <div>
                                                            <div>
                                                                <strong>Biriyani</strong>
                                                            </div>
                                                            <div>x 2</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex align-items-center justify-content-end">
                                                    <span className="fw-bold">$400.00</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <hr />
                                    <div className="row p-2">
                                        <div className="col-6 d-flex align-items-center">
                                            <strong>Total</strong>
                                        </div>

                                        <div className="col-6 d-flex align-items-center justify-content-end">
                                            <strong
                                                className="fw-bold"
                                                style={{ color: "orange" }}
                                            >
                                                $500.00
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="order-button-container">
                            <button className="order-reject-button">Reject Order</button>
                            <button className="order-accept-button">Accept Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPopup;
