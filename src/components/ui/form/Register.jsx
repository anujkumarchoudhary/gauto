import React from 'react';
import InputField from '../InputField';
import Button from '../Button';
import Icons from '../Icons';

const Register = ({ handleClick, isRegister }) => {
  
    return (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-10">
            {/* Modal Content */}
            <div className="relative bg-white space-y-4 p-10 rounded-lg shadow-lg w-1/2 max-w-md text-center">
                <p className='text-2xl font-bold'>{isRegister === "register" ? "Sign Up" : "Login"}</p>
                <Icons name={"close"} handleClick={handleClick} color='#D42E1F' className='absolute top-4 right-4 cursor-pointer' />
                {isRegister === "register" && <InputField placeholder={"Name"} />}

                <InputField placeholder={"Email"} />
                <InputField placeholder={"Password"} />
                {isRegister === "register" && <InputField placeholder={"Conform Password"} />
                }
                <div className='flex gap-2 mt-2'>
                    <InputField type={"checkbox"} className={"!w-4 my-auto"} />
                    {isRegister === "register" ? <p className=''>Accept Terms & Condition</p> :
                        <div className='flex justify-between w-full'>
                            <p className=''>Remember</p>
                            <p className=''>Forgot Password</p></div>}

                </div>
                <Button name={isRegister === "register" ? "Register" : "Login"} isBorder={true} className={"w-full"} />
                <p className=''>Do you need an account?</p>
            </div>
        </div>
    );
};

export default Register;
