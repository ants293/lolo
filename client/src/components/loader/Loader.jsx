import React from "react";
import clsx from "clsx";

export default function Loader({fixed = false}) {
    return (
        <div className={clsx(['loader', fixed && 'loader--fixated'])}>
            <div className="loader__slab" />
            <div className="loader__slab" />
            <div className="loader__slab" />
            <div className="loader__slab" />
        </div>
    )
}
