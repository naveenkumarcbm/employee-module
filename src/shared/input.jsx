import React from 'react'

const Input = (props) => {
    const { id, label, type } = props;
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type || "text"} />
        </>
    )
}

export default Input;