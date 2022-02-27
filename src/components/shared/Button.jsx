import React from 'react'

const Button = ({ text, position = "left" }) => {
    return (
        <div
            className={`btn-container ${position}`}
        >
            <button
                className="btn btn-primary"
            >
                {text}
            </button>
        </div>
    )
}

export const ButtonOutline = ({ text, position }) => {
    return (
        <div
            className={`btn-container ${position}`}
        >
            <button
                className="btn"
            >
                {text}
            </button>
        </div>
    )
}

export default Button