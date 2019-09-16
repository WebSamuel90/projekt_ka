import React, { FunctionComponent } from 'react'

interface IHamburger {
  openMenu?: Function
}

const Hamburger = (props: IHamburger) => {
  return (
    <svg
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
        <path d="m3.33337 19.9999c0-.9205.7462-1.6666 1.66667-1.6666h29.99996c.9205 0 1.6667.7461 1.6667 1.6666s-.7462 1.6667-1.6667 1.6667h-29.99996c-.92047 0-1.66667-.7462-1.66667-1.6667z" />
        <path d="m3.33337 9.99992c0-.92048.7462-1.66667 1.66667-1.66667h29.99996c.9205 0 1.6667.74619 1.6667 1.66667s-.7462 1.66668-1.6667 1.66668h-29.99996c-.92047 0-1.66667-.7462-1.66667-1.66668z" />
        <path d="m3.33337 29.9999c0-.9205.7462-1.6666 1.66667-1.6666h29.99996c.9205 0 1.6667.7461 1.6667 1.6666s-.7462 1.6667-1.6667 1.6667h-29.99996c-.92047 0-1.66667-.7462-1.66667-1.6667z" />
      </g>
    </svg>
  )
}

export default Hamburger
