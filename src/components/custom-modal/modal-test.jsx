import React, { useState } from "react";
import Modal from "./modal";
import "./styles.css";

function ModelTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleClick() {
        setShowModalPopup(!showModalPopup);
    }
    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleClick}>Open the custom Modal</button>
            {showModalPopup && (
                <Modal onClose={onClose} body={<div>Customized Modal</div>} />
            )}
        </div>
    );
}

export default ModelTest;
