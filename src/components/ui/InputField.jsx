import React from 'react'

const InputField = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder} className='bg-white outline-none border border-slate-300 px-4 py-2 my-1 w-full' />
    )
}

export default InputField
