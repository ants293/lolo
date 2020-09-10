import React from 'react';
import Modal from "../../modal/Modal";

export default function ArticleModal({ isOpen, setOpen, contents, title }) {
    return (
        <Modal
            isOpen={isOpen}
            setOpen={setOpen}
            modalClasses={'modal--w-850'}
        >
            <div className="article-modal">
                {title ? <h1 className="article-modal__title">{title}</h1> : null}
                <div className="generated-content" dangerouslySetInnerHTML={{__html: contents}} />
            </div>
        </Modal>
    )
}
