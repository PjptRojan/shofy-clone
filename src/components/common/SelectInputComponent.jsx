import React from 'react'

function SelectInputComponent({ selectName, selectId, optionData, labelName, labelStyle, handleChange, optionStyle, selectStyle }) {
    return (
        <>
            <label htmlFor={selectId} className={labelStyle}>{labelName}</label>
            <select name={selectName} id={selectId} onChange={handleChange} className={selectStyle}>
                {optionData.map((option, index)=> {
                    return (
                       <option key={index} value={option.id}>{option.category_name}</option>
                    )
                })}
                
            </select>
        </>
    )
}

export default SelectInputComponent
