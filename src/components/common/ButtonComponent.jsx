import React from 'react'

function ButtonComponent({btnTitle, btnDisabled, btnStyle, handleClick, btnType}) {
  return (
    <>
      <button disabled={btnDisabled} className={btnStyle} onClick={handleClick} type={btnType}>{btnTitle}</button>
    </>
  )
}

export default ButtonComponent
