import React, {Fragment} from 'react';
import Modal from "../../modal/Modal";
import Loader from "../../loader/Loader";

export default function ArticleModal({ isOpen, setOpen, contents, title }) {
    return (
        <Fragment>
            {
                !contents && isOpen ?
                    <Loader
                        fixed={true}
                    /> :
                    <Modal
                        isOpen={isOpen}
                        setOpen={setOpen}
                        modalClasses={'modal--article'}
                    >
                        <div className="article-modal">
                            {title ? <h1 className="article-modal__title">{title}</h1> : null}
                            <div className="generated-content" dangerouslySetInnerHTML={{__html: contents}} />
                        </div>
                    </Modal>
            }
        </Fragment>
    )
}

