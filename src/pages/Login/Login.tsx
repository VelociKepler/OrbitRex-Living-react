import { Divider } from "@mui/material";
// Consider checking and updating the InputField component to accept 'value' prop correctly
import InputField from "../../components/Login/InputField.tsx";
import ThirdPartyLogIn from "../../components/Login/ThirdPartyLogIn.tsx";
import React, { useState } from "react";
import Navbar from "../../components/Navbar.tsx";
// Modify the InputField component to include a value prop if needed
// Types
import { InputValues } from "./Login.types.ts";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [inputValue, setInputValue] = useState<InputValues>({
    email: "",
    password: "",
  });

  // @For development input data
  // console.log(isSignIn, inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputValue((prevValues) => ({
      ...prevValues,
      [id]: value, // Update the matching field dynamically
    }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // handle form submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full bg-white">
        <Navbar />
      </div>
      <div className="flex h-screen items-center justify-center bg-zinc-100 text-center">
        <div className="relative top-10 min-h-[560px] w-1/2 overflow-hidden rounded-2xl bg-white shadow-md">
          {/* Forms Section */}
          <div className="relative z-20 flex h-full w-full">
            {/* Sign In Form */}
            <form
              onSubmit={onSubmitHandler} // attach the submit handler here
              className={`absolute left-0 h-full w-1/2 px-8 transition-all duration-500 ${
                isSignIn
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h1 className="mb-10 pt-4 text-3xl font-bold">Log in</h1>
              <ThirdPartyLogIn />
              <Divider>or</Divider>
              <div className="mb-5">
                <InputField
                  label="Your Email"
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  onChange={handleInputChange} // bind the handler
                  value={inputValue.email}
                />
                <InputField
                  label="Your Password"
                  id="password"
                  type="password"
                  required
                  onChange={handleInputChange} // bind the handler
                  value={inputValue.password}
                />
              </div>
              <button type="submit" className="primary-bnt">
                SIGN IN
              </button>
            </form>

            {/* Sign Up Form */}
            <form
              className={`absolute right-0 h-full w-1/2 px-8 transition-all duration-500 ${
                isSignIn
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <h1 className="mb-10 pt-4 text-3xl font-bold">Create Account</h1>
              <ThirdPartyLogIn />
              <Divider>or</Divider>
              <div className="mb-5">
                <InputField
                  label="Your Email"
                  id="email-signup"
                  type="email"
                  placeholder="example@email.com"
                  required
                  onChange={handleInputChange} // bind the handler
                />
                <InputField
                  label="Your Password"
                  id="password-signup"
                  type="password"
                  required
                  onChange={handleInputChange} // bind the handler
                />
                <InputField
                  label="Confirm Password"
                  id="password-confirm"
                  type="password"
                  required
                  onChange={handleInputChange} // bind the handler
                />
              </div>
              <button type="submit" className="primary-bnt">
                SIGN UP
              </button>
            </form>
          </div>

          {/* Toggle Section */}
          <div className="absolute z-10 flex h-full w-full">
            {/* "Hello, Friend!" Section */}
            <div
              className={`absolute left-0 flex h-full w-1/2 flex-col items-center justify-center bg-zinc-400 bg-[url('/images/login-signin-img.png')] px-8 text-center transition-all duration-500 ${
                isSignIn
                  ? "translate-x-[-100%] opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div className="rounded-2xl bg-black/30 p-12 text-white backdrop-blur-[2px]">
                <p className="text-3xl font-bold">Hello, Friend!</p>
                <p>
                  Register with your personal details to use all site features
                </p>
                <button
                  type="button"
                  className="mt-4 rounded border p-3"
                  onClick={() => setIsSignIn(!isSignIn)}
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* "Welcome Back!" Section */}
            <div
              className={`absolute right-0 flex h-full w-1/2 flex-col items-center justify-center bg-zinc-400 bg-[url('/images/sign-up-bg.jpg')] bg-cover px-8 text-center transition-all duration-500 ${
                isSignIn
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%] opacity-0"
              }`}
            >
              <div className="rounded-2xl bg-white/30 p-12 text-white backdrop-blur-[2px]">
                <p className="text-3xl font-bold">Welcome Back!</p>
                <p>Enter your personal details to use all site features</p>
                <button
                  type="button"
                  className="mt-4 rounded border p-3"
                  onClick={() => setIsSignIn(!isSignIn)}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
