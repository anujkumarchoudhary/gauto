import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";
import Icons from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, setUser } from "@/redux/slices/userSlice";
import { toast } from "react-toastify";
import { setGlobalData } from "@/redux/slices/globalSlice";
import axios from "axios";
import { baseUrl } from "@/baseurl";

const Register = ({ handleClose, isRegister }) => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
    password: "",
    tac: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/signup`, inputVal);
      if (res.status === 201) {
        toast.success(res.data.message);
        handleClose();
      }
    } catch (err) {
      if (err.status == 409) {
        toast.error(err.response.data.message);
      }
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, inputVal);
      const { token } = res.data;
      localStorage.setItem("token", token);

      if (res.status === 200) {
        toast.success(res.data.message);
        handleClose();
      }
    } catch (err) {
      if (err.status == 404) {
        toast.error(err.response.data.message);
      }
      if (err.status == 401) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-10">
      {/* Modal Content */}
      <div className="relative bg-white space-y-4 p-10 rounded-lg shadow-lg w-[90%] md:w-1/2 max-w-md text-center">
        <p className="text-2xl font-bold">
          {isRegister === "register" ? "Sign Up" : "Login"}
        </p>
        <Icons
          name={"close"}
          handleClick={handleClose}
          color="#D42E1F"
          className="absolute top-4 right-4 cursor-pointer"
        />
        {isRegister === "register" && (
          <InputField
            name={"name"}
            value={inputVal.name}
            handleChange={handleChange}
            placeholder={"Name"}
          />
        )}

        <InputField
          name={"email"}
          value={inputVal.email}
          handleChange={handleChange}
          placeholder={"Email"}
        />
        {isRegister === "register" && (
          <InputField
            type={"tel"}
            name={"phone"}
            value={inputVal.phone}
            handleChange={handleChange}
            placeholder={"Phone"}
            maxLength={10}
          />
        )}
        <InputField
          name={"password"}
          value={inputVal.password}
          handleChange={handleChange}
          placeholder={"Password"}
        />
        <div className="flex gap-2 mt-2">
          <InputField
            name={"name"}
            value={inputVal.tac}
            handleChange={handleChange}
            type={"checkbox"}
            className={"!w-4 my-auto"}
          />
          {isRegister === "register" ? (
            <p className="">Accept Terms & Condition</p>
          ) : (
            <div className="flex justify-between w-full">
              <p className="">Remember</p>
              <p className="">Forgot Password</p>
            </div>
          )}
        </div>
        <Button
          handleClick={isRegister === "register" ? handleSignUp : handleLogin}
          name={isRegister === "register" ? "Register" : "Login"}
          isBorder={true}
          className={"w-full"}
        />
        <p className="">Do you need an account?</p>
      </div>
    </div>
  );
};

export default Register;
