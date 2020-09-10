import React from 'react';
import Modal from "../../modal/Modal";

export default function ArticleModal({ isOpen, setOpen, contents }) {
    return (
        <Modal
            isOpen={isOpen}
            setOpen={setOpen}
            modalClasses={'modal--w-850'}
        >
            <div className="generated-content" dangerouslySetInnerHTML={{__html: contents}} />
        </Modal>
    )
}
