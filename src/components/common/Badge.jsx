import React from 'react'
import { twMerge } from 'tailwind-merge'

const Badge = ({ styleClass }) => {
  return (
    <div className={twMerge(`bg-green-500 inline-block py-1 px-2 rounded text-white text-sm ${styleClass}`)}>
      Delivered
    </div>
  )
}
export default Badge
