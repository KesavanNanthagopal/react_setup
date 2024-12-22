import React, { useState, useRef } from "react";

interface AddCategoryModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({ isVisible, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState({ itemName: "", image: "",itemSku:"" });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validateForm = () => {
    const newErrors: { itemName: string; image: string,itemSku:string } = { itemName: "", image: "" ,itemSku:""};
    if (!itemName.trim()) newErrors.itemName = "Category name is required.";
    if (!itemName.trim()) newErrors.itemSku = "Category SKU is required.";
    if (!image) newErrors.image = "Image is required.";
    setErrors(newErrors);
    return !newErrors.itemName && !newErrors.image;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted", { itemName, image });
      clearStates();
      onClose();
    }
  };

  const handleCancel = () => {
    clearStates();
    onClose();
  };

  const clearStates = () => {
    setItemName("");
    setImage(null);
    setErrors({ itemName: "", image: "",itemSku:"" });
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
          setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
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
          onClick={handleCancel}
        />
      )}
      {isVisible && (
        <div className="modal show add-menu-popup" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Category</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancel}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="itemName" className="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.itemName ? "is-invalid" : ""}`}
                    id="itemName"
                    value={itemName}
                    onChange={(e) => {
                      setItemName(e.target.value);
                      setErrors((prevErrors) => ({ ...prevErrors, itemName: "" }));
                    }}
                  />
                  {errors.itemName && <div className="text-danger">{errors.itemName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="itemName" className="form-label">
                    Category SKU
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.itemSku ? "is-invalid" : ""}`}
                    id="itemName"
                    value={itemName}
                    onChange={(e) => {
                      setItemName(e.target.value);
                      setErrors((prevErrors) => ({ ...prevErrors, itemSku: "" }));
                    }}
                  />
                  {errors.itemName && <div className="text-danger">{errors.itemSku}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUpload" className="form-label">
                    Select Image
                  </label>
                  <input
                    type="file"
                    className={`form-control ${errors.image ? "is-invalid" : ""}`}
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                  {errors.image && <div className="text-danger">{errors.image}</div>}
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

export default AddCategoryModal;
