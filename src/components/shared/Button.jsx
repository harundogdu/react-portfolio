import React from 'react'

const Button = ({ text }) => {
    return (
        <>
            <button
                className="btn btn-primary"
            >
                {text}
            </button>
        </>
    )
}

export const ButtonOutline = ({ text }) => {
    return (
        <>
            <button
                className="btn"
            >
                {text}
            </button>
        </>
    )
}

export default Button