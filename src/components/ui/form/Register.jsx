import React, { useState } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import Icons from '../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, setUser } from '@/redux/slices/userSlice';
import { toast } from 'react-toastify';
import { setGlobalData } from '@/redux/slices/globalSlice';

const Register = ({ handleClose, isRegister }) => {
    const [inputVal, setInputVal] = useState({ name: "", email: "", phone: "", role: "user", password: "" })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value })
    }

    const handleClick = async () => {

        if (isRegister === "register") {
            dispatch(registerUser(inputVal))
        } else {
            const res = await dispatch(loginUser({ email: inputVal.email, password: inputVal.password }))
            dispatch(setGlobalData(res?.payload?.token))
            if (typeof window !== "undefined") {
                localStorage.setItem("token", res?.payload?.token);
            }

            toast(res?.payload?.message);
        }
        await handleClose()
    }


    return (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-10">
            {/* Modal Content */}
            <div className="relative bg-white space-y-4 p-10 rounded-lg shadow-lg w-1/2 max-w-md text-center">
                <p className='text-2xl font-bold'>{isRegister === "register" ? "Sign Up" : "Login"}</p>
                <Icons name={"close"} handleClick={handleClose} color='#D42E1F' className='absolute top-4 right-4 cursor-pointer' />
                {isRegister === "register" && <InputField name={"name"} value={inputVal.name} handleChange={handleChange} placeholder={"Name"} />}

                <InputField name={"email"} value={inputVal.email} handleChange={handleChange} placeholder={"Email"} />
                {isRegister === "register" && <InputField type={"tel"} name={"phone"} value={inputVal.phone} handleChange={handleChange} placeholder={"Phone"} maxLength={10} />}
                <InputField name={"password"} value={inputVal.password} handleChange={handleChange} placeholder={"Password"} />
                <div className='flex gap-2 mt-2'>
                    <InputField name={"name"} value={inputVal.name} handleChange={handleChange} type={"checkbox"} className={"!w-4 my-auto"} />
                    {isRegister === "register" ? <p className=''>Accept Terms & Condition</p> :
                        <div className='flex justify-between w-full'>
                            <p className=''>Remember</p>
                            <p className=''>Forgot Password</p></div>}

                </div>
                <Button handleClick={handleClick} name={isRegister === "register" ? "Register" : "Login"} isBorder={true} className={"w-full"} />
                <p className=''>Do you need an account?</p>
            </div>
        </div>
    );
};

export default Register;
