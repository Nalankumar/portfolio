import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center">
      <span>
        <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
          <circle r="15" cx="30" cy="30" fill="#535C91" />
        </svg>
      </span>
      <p className="font-bold text-[30px] relative right-5 top-1">T</p>
    </div>
  )
}
