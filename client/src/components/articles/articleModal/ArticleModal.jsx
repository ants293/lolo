import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../modal/Modal'
import Loader from '../../loader/Loader'

ArticleModal.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  contents: PropTypes.string,
  title: PropTypes.string
}

export default function ArticleModal({
  isOpen = false,
  setOpen,
  contents = '',
  title = ''
}) {
  return (
    <Fragment>
      {
        !contents && isOpen
          ? <Loader
            fixed={true}
          />
          : <Modal
            isOpen={isOpen}
            setOpen={setOpen}
            modalClasses={'modal--article'}
          >
            <div className="article-modal">
              {title ? <h1 className="article-modal__title">{title}</h1> : null}
              <div className="generated-content" dangerouslySetInnerHTML={{ __html: contents }} />
            </div>
          </Modal>
      }
    </Fragment>
  )
}
