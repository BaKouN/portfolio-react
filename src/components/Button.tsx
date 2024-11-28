/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

import React from 'react'

interface Button {
  label: string,
  href?: string,
  target?: string,
  icon?: string,
  classes?: string,
}


/**
 * Primary Button
 */

const ButtonPrimary = ({
  label,
  href,
  target = '_self',
  icon,
  classes
}: Button) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
      >
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}


/**
 * Outline Button
 */

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}: Button) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
      >
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

export {
  ButtonPrimary,
  ButtonOutline
}