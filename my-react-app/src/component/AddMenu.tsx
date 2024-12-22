import React, { useState, useRef } from "react";

interface AddMenuModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddMenuModal: React.FC<AddMenuModalProps> = ({ isVisible, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [gst, setGst] = useState("");
  const [vegType, setVegType] = useState("veg");
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};
    if (!itemName.trim()) newErrors.itemName = "Item Name is required.";
    if (!itemPrice.trim()) newErrors.itemPrice = "Item Price is required.";
    if (!deliveryFee.trim()) newErrors.deliveryFee = "Delivery Fee is required.";
    if (!gst.trim()) newErrors.gst = "GST is required.";
    if (!image) newErrors.image = "An image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateInputs()) return;
    console.log("Form Submitted", { vegType, itemName, itemPrice, deliveryFee, gst, image });
    clearStates();
    onClose();
  };

  const onPopupClose=()=>{
    clearStates();
    onClose()
  }

  const handleCancel = () => {
    clearStates();
    onClose();
  };

  const clearStates = () => {
    setItemName("");
    setItemPrice("");
    setDeliveryFee("");
    setGst("");
    setVegType("veg");
    setImage(null);
    setErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result as string);
          setErrors((prev) => ({ ...prev, image: "" }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
          onClick={onPopupClose}
        />
      )}
      {isVisible && (
        <div className="modal show add-menu-popup" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Menu</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onPopupClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center mb-3">
                  <label className={`veg-radio ${vegType === "veg" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="vegType"
                      value="veg"
                      checked={vegType === "veg"}
                      onChange={() => setVegType("veg")}
                      style={{ display: "none" }}
                    />
                    Veg
                  </label>
                  <label className={`non-veg-radio mx-2 ${vegType === "non-veg" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="vegType"
                      value="non-veg"
                      checked={vegType === "non-veg"}
                      onChange={() => setVegType("non-veg")}
                      style={{ display: "none" }}
                    />
                    Non-Veg
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="itemName" className="form-label">Item Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.itemName ? "is-invalid" : ""}`}
                    id="itemName"
                    value={itemName}
                    onChange={(e) => {
                      setItemName(e.target.value);
                      setErrors((prev) => ({ ...prev, itemName: "" }));
                    }}
                  />
                  {errors.itemName && <div className="text-danger error-message">{errors.itemName}</div>}
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <label htmlFor="itemPrice" className="form-label">Item Price</label>
                    <input
                      type="number"
                      className={`form-control ${errors.itemPrice ? "is-invalid" : ""}`}
                      id="itemPrice"
                      value={itemPrice}
                      onChange={(e) => {
                        setItemPrice(e.target.value);
                        setErrors((prev) => ({ ...prev, itemPrice: "" }));
                      }}
                    />
                    {errors.itemPrice && <div className="text-danger error-message">{errors.itemPrice}</div>}
                  </div>
                  <div className="col-4 mb-4">
                    <label htmlFor="deliveryFee" className="form-label">Delivery Fee</label>
                    <input
                      type="number"
                      className={`form-control ${errors.deliveryFee ? "is-invalid" : ""}`}
                      id="deliveryFee"
                      value={deliveryFee}
                      onChange={(e) => {
                        setDeliveryFee(e.target.value);
                        setErrors((prev) => ({ ...prev, deliveryFee: "" }));
                      }}
                    />
                    {errors.deliveryFee && <div className="text-danger error-message">{errors.deliveryFee}</div>}
                  </div>
                  <div className="col-4 mb-4">
                    <label htmlFor="gst" className="form-label">GST</label>
                    <input
                      type="number"
                      className={`form-control ${errors.gst ? "is-invalid" : ""}`}
                      id="gst"
                      value={gst}
                      onChange={(e) => {
                        setGst(e.target.value);
                        setErrors((prev) => ({ ...prev, gst: "" }));
                      }}
                    />
                    {errors.gst && <div className="text-danger error-message">{errors.gst}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="imageUpload" className="form-label">Select Image</label>
                  <input
                    type="file"
                    className={`form-control ${errors.image ? "is-invalid" : ""}`}
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                  {errors.image && <div className="text-danger error-message">{errors.image}</div>}
                </div>
                
                {image && (
                  <div className="mb-3 d-flex justify-content-center position-relative">
                    <img
                      src={image}
                      alt="Image Preview"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger position-absolute top-0 end-0"
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        padding: "0",
                        fontSize: "14px",
                        lineHeight: "1",
                      }}
                      onClick={handleImageDelete}
                    >
                      X
                    </button>
                  </div>
                )}
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
