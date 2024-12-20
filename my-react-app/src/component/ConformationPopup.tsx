const ConfirmationPopup = ({
    onCancel,
    onConfirm,
    message = "Do you want to logout?",
    confirmButtonLabel = "Yes",
    cancelButtonLabel = "No",
}: any) => {
    return (
        <>
            <div
                className="modal-backdrop fade show custom-backdrop"
                onClick={onCancel}
            />
            <div
                className="modal show custom-modal"
                style={{
                    display: "block",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1050,
                }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title custom-modal-title">Confirmation</h5>
                            <button
                                type="button"
                                className="btn-close custom-close-icon"
                                aria-label="Close"
                                onClick={onCancel}
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <p className="custom-modal-text">{message}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn custom-cancel-btn"
                                onClick={onCancel}
                            >
                                {cancelButtonLabel}
                            </button>
                            <button
                                type="button"
                                className="btn custom-confirm-btn"
                                onClick={onConfirm}
                            >
                                {confirmButtonLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationPopup;
