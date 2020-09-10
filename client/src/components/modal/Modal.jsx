import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  overlayClasses: PropTypes.string,
  modalClasses: PropTypes.string,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func.isRequired
}

export default function Modal ({
  children,
  overlayClasses = null,
  modalClasses = null,
  isOpen = false,
  setOpen
}) {
  const modalRef = useRef(null)
  useEffect(() => {
    document.addEventListener('mousedown', (e) => onOutsideClick(e, modalRef, setOpen))

    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
    }
  })

  return (
    <div
      className={clsx(['overlay', isOpen && 'overlay--visible', overlayClasses])}
    >
      <div className={clsx(['modal', modalClasses])} ref={modalRef}>
        {children}
      </div>
    </div>
  )
}

function onOutsideClick (e, modalRef, setOpen) {
  if (modalRef.current && !modalRef.current.contains(e.target)) {
    setOpen(false)
  }
}
