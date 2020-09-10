import React from 'react';
import clsx from 'clsx';

export default function Modal({ children, overlayClasses = null, modalClasses = null, isOpen = false }) {
    return (
        <div className={clsx(['overlay', isOpen && 'overlay--visible', overlayClasses])}>
            <div className={clsx(['modal', modalClasses])}>
                {children}
            </div>
        </div>
    )
}
