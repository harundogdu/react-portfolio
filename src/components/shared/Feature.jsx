import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
const Feature = ({ title, level }) => {
    return (
        <div className='feature'>
            <BsPatchCheckFill />
            <div className='feature-inner'>
                <h2>{title}</h2>
                <p>{level}</p>
            </div>
        </div>
    )
}

export default Feature