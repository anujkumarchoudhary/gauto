import React from 'react'
const data = ["Ac Car", "Non Ac Car"]
const SelectField = () => {
    return (
        <select className='bg-white outline-none border border-slate-300 px-4 py-2 my-1 w-full'>
            {data?.map((item) => {
                return (
                    <option>{item}</option>
                )
            })}
        </select>
    )
}

export default SelectField
