import React from 'react'

function TextAreaComponent({inputId, inputName, inputStyle, inputValue, handleChange, inputBlur, title, error, errorMessage, label, labelStyle}) {
  return (
    <>
    
    <label htmlFor={inputId} className={labelStyle}>{label}</label>
      <textarea id={inputId} name={inputName} className={`p-1 border rounded-md outline-0 ${inputStyle} ${error ? 'border-red-500' :''}`} value={inputValue} onChange={handleChange} onBlur={inputBlur} placeholder={title}/>
    <div className='text-red-500 text-sm'>{errorMessage}</div>
    </>
  )
}

export default TextAreaComponent
