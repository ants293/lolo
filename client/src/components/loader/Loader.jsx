import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

Loader.propTypes = {
  fixed: PropTypes.bool
}

export default function Loader({ fixed = false }) {
  return (
    <div className={clsx(['loader', fixed && 'loader--fixated'])}>
      <div className="loader__slab" />
      <div className="loader__slab" />
      <div className="loader__slab" />
      <div className="loader__slab" />
    </div>
  )
}
