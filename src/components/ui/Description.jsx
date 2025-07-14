import React from 'react'

const Description = ({placeholder}) => {
    return (
        <div>
            <textarea placeholder={placeholder} className='bg-white outline-none border border-slate-300 px-4 py-2 my-1 w-full'/>
        </div>
    )
}

export default Description
