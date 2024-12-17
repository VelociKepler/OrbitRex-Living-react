import React, { useContext, useState } from "react";
import { Divider } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import InputField from "../../components/Login/InputField";
import ThirdPartyLogIn from "../../components/Login/ThirdPartyLogIn";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ShopContext, ShopContextType } from "../../contexts/ShopContext.tsx";
import { backendUrl } from "../../App.tsx";

interface InputValues {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const Login: React.FC = () => {
  const useShopContext = (): ShopContextType => {
    const context = useContext(ShopContext);
    if (!context) {
      throw new Error("useShopContext must be used within a ShopContextProvider");
    }
    return context;
  };

  const { isSignIn, setIsSignIn, setIsLogin } = useShopContext();


  const [inputValues, setInputValues] = useState<InputValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    switch (id) {
      case "username":
        setInputValues((prev) => ({ ...prev, username: value }));
        break;
      case "email":
        setInputValues((prev) => ({ ...prev, email: value }));
        break;
      case "password":
        setInputValues((prev) => ({ ...prev, password: value }));
        break;
      case "confirmPassword":
        setInputValues((prev) => ({ ...prev, confirmPassword: value }));
        break;
      default:
        break;
    }
  };
  const toggleSignInSignUp = () => setIsSignIn(!isSignIn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = inputValues;

    try {
      let response;
      if (!isSignIn) {
        if (!password || !confirmPassword || password !== confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }

        response = await axios.post(`${backendUrl}/api/user/register`, { username, email, password });
      } else {
        if (!email || !password) {
          toast.error("Please fill out all required fields!");
          return;
        }

        response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
      }

      if (response?.data?.success) {
        localStorage.setItem("token", response.data.token);
        toast.success(isSignIn ? "Login successful!" : "Registration successful!");
        if (isSignIn) navigate("/");
        setIsLogin(true);
      } else {
        const errorMessage = response?.data?.message;
        if (errorMessage === "User not found") {
          toast.error("User not found. Please check your email.");
        } else {
          toast.error(errorMessage || "Check Email or Password!");
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        // Extract the error message sent from the backend
        const errorMessage = error.response.data?.message || "An unknown error occurred!";
        toast.error(errorMessage); // Display the error message in toast
      } else {
        // Handle unexpected errors
        console.error("Unexpected error: ", error);
        toast.error("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className = "flex h-screen top-[-64px] items-center justify-center bg-zinc-100 text-center">
        <div className = "relative top-10 min-h-[560px] w-3/4 md:max-w-[1080px] overflow-hidden rounded-2xl bg-white shadow-md">
          {/* Forms Container */}
          <div className = "relative z-20 flex h-full">
            {/* Sign In Form */}
            {isSignIn && (
              <form
                onSubmit = {handleSubmit}
                className = {`absolute left-0 h-full w-1/2 px-12 transition-all duration-1000 opacity-0 ${isSignIn ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"}`}
              >
                <h1 className = "mb-10 pt-4 text-3xl font-bold">Log in</h1>
                <ThirdPartyLogIn />
                <Divider>or</Divider>
                <div className = "mb-2">
                  <InputField
                    label = "Your Email"
                    id = "email"
                    type = "email"
                    placeholder = "example@email.com"
                    required
                    onChange = {handleInputChange}
                    value = {inputValues.email}
                  />
                  <InputField
                    label = "Your Password"
                    id = "password"
                    type = "password"
                    required
                    onChange = {handleInputChange}
                    value = {inputValues.password}
                  />
                </div>
                <button
                  type = "submit"
                  className = "primary-bnt"
                >
                  Log in
                </button>
              </form>
            )}

            {/* Sign Up Form */}
            {!isSignIn && (
              <form
                onSubmit = {handleSubmit}
                className = {`absolute right-0 h-full w-1/2 px-12 transition-all duration-500 translate-x-0 opacity-100 `}
              >
                <h1 className = "mb-2 pt-2 text-2xl font-bold">Create Account</h1>
                <ThirdPartyLogIn />
                <Divider>or</Divider>
                <div className = "mb-2">
                  <InputField
                    label = "Your Name"
                    id = "username"
                    type = "text"
                    placeholder = "Username"
                    onChange = {handleInputChange}
                    value = {inputValues.username}
                    required
                  />
                  <InputField
                    label = "Your Email"
                    id = "email"
                    type = "email"
                    placeholder = "example@email.com"
                    onChange = {handleInputChange}
                    value = {inputValues.email}
                    required
                  />
                  <InputField
                    label = "Your Password"
                    id = "password"
                    type = "password"
                    placeholder = "Enter a strong password"
                    onChange = {handleInputChange}
                    value = {inputValues.password}
                    required
                  />
                  <InputField
                    label = "Confirm Password"
                    id = "confirmPassword"
                    type = "password"
                    placeholder = "Re-enter your password"
                    onChange = {handleInputChange}
                    value = {inputValues.confirmPassword}
                    required
                  />
                </div>
                <button
                  type = "submit"
                  className = "primary-bnt"
                >
                  SIGN UP
                </button>
              </form>
            )}
          </div>

          {/* Toggle Section */}
          <div className = "absolute z-10 flex h-full w-full">
            {
              // Common toggler reusable sections for "Hello, Friend!" and "Welcome Back!"
            }
            <div
              className = {`absolute left-0 flex h-full w-1/2 flex-col items-center justify-center bg-zinc-400 bg-[url('/images/login-signin-img.png')] px-8 transition-all duration-500 ${
                isSignIn ? "translate-x-[-100%] opacity-0" : "translate-x-0"
              }`}
            >
              <div className = "rounded-2xl bg-black/30 p-12 text-white backdrop-blur-[2px]">
                <p className = "text-3xl font-bold">Hello, Friend!</p>
                <p className = "pb-10">Register with your personal details to use all features</p>
                <p className = "text-sm">Already have an account? <span
                  onClick = {toggleSignInSignUp}
                  className = "underline cursor-pointer text-sm hover:text-orange-500"
                >Sign in</span></p>
              </div>
            </div>
            <div
              className = {`absolute right-0 flex h-full w-1/2 flex-col items-center justify-center bg-zinc-400 bg-[url('/images/sign-up-bg.jpg')] bg-cover px-8 transition-all duration-500 ${
                isSignIn ? "translate-x-0" : "translate-x-[100%] opacity-0"
              }`}
            >
              <div className = "rounded-2xl bg-white/30 p-12 text-white backdrop-blur-[2px]">
                <p className = "text-3xl font-bold">Welcome Back!</p>
                <p className = "pb-10">Enter your personal details to use all features</p>
                <p className = "text-sm">Don't have any account? <span
                  onClick = {toggleSignInSignUp}
                  className = "underline cursor-pointer text-sm hover:text-orange-500"
                >Sign up</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;