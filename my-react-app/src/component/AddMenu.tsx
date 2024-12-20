import React, { useState } from "react";

interface AddMenuModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddMenuModal: React.FC<AddMenuModalProps> = ({ isVisible, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [gst, setGst] = useState("");

  const handleSubmit = () => {
    console.log("Form Submitted", { itemName, itemPrice, deliveryFee, gst });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
     {isVisible && (
        <div
          className="modal-backdrop fade show"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
          onClick={onClose}
        />
      )}
      {isVisible && (
        <div className="modal show add-menu-popup" style={{ display: "block" }} onClick={onClose}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Menu</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="itemName" className="form-label">Item Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="itemPrice" className="form-label">Item Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="itemPrice"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="deliveryFee" className="form-label">Delivery Fee</label>
                  <input
                    type="number"
                    className="form-control"
                    id="deliveryFee"
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gst" className="form-label">GST</label>
                  <input
                    type="number"
                    className="form-control"
                    id="gst"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="mainButtonCancel" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="mainButton" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMenuModal;
