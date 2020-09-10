import React from 'react';
import Modal from "../../modal/Modal";

export default function ArticleModal({ isOpen, setOpen, contents }) {
    console.log("contents", contents);
    return (
        <Modal
            isOpen={isOpen}
        >
            <div className="generated-content" dangerouslySetInnerHTML={{__html: contents}} />
        </Modal>
    )
}

function setContents(contents) {
    return (
        contents
    )
}
