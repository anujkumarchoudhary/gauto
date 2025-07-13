import React from 'react'
import InputField from '../InputField'
import SelectField from '../SelectField'
import Button from '../Button'

const FindCar = () => {
    return (
        <div className='bg-[#F4F4F5] p-4'>
            <InputField placeholder={"From Address"} />
            <InputField placeholder={"To Address"} />
            <SelectField />
            <InputField placeholder={"Journey Date"} />
            <InputField placeholder={"Journey Time"} />
            <Button name={"Find Car"} isBorder={true} className={"mt-3"} />
        </div>
    )
}

export default FindCar
