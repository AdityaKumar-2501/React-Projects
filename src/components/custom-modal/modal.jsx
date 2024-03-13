import React from "react";

function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span onClick={onClose} className="close">
                        &times;
                    </span>
                    <h1>{header || "Header"}</h1>
                </div>
                <div className="body">
                    {body || <div>This is our Modal</div>}
                </div>
                <h1 className="footer">{footer || <div>Footer</div>}</h1>
            </div>
        </div>
    );
}

export default Modal;
