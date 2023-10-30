import React from 'react'
import { twMerge } from 'tailwind-merge'

function ImagePreview({styleClass}) {
  return (
    <div>
      <img className={twMerge(`w-full h-40 object-cover rounded-md ${styleClass}`)} src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
    </div>
  )
}

export default ImagePreview
