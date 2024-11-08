import {FormEvent, useState} from "react";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <>
            {isSignIn ? (
                <div className="grid grid-cols-2 h-fit border max-w-screen-lg mx-auto">
                    <div className="items-center justify-center w-full px-4 py-2 border-r-2 text-center">
                        <h1 className="font-bold mb-4">Sign in</h1>
                        <div className="flex w-full mx-auto mt-10 mb-10">
                            {/* Line Login Button */}
                            <button className="flex items-center gap-4 w-fit mx-auto bg-gray-100 p-2 rounded-md">
                                <img
                                    className="w-8 h-8"
                                    src="https://img.icons8.com/?size=100&id=21746&format=png&color=000000"
                                    alt="Line Logo"
                                />
                            </button>

                            {/* Google Login Button */}
                            <button className="flex items-center gap-4 w-fit mx-auto bg-gray-100 p-2 rounded-md">
                                <img
                                    className="w-8 h-8"
                                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                                    alt="Google Logo"
                                />
                            </button>

                            {/* Facebook Login Button */}
                            <button className="flex items-center gap-4 w-fit mx-auto bg-gray-100 p-2 rounded-md">
                                <img
                                    className="w-8 h-8"
                                    src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                                    alt="Facebook Logo"
                                />
                            </button>
                        </div>
                        <div className="max-w-screen-lg mx-auto">
                            <form
                                className="flex flex-col max-w-[300px] mx-auto text-center"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    className="input-form my-5"
                                    type="text"
                                    placeholder="Email..."
                                />
                                <input
                                    className="input-form my-5"
                                    type="text"
                                    placeholder="Password..."
                                />
                                <p className="text-left mb-8">forgot password?</p>
                                <button className="primary-bnt">Sign-in</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full px-8">
                        <h1>Slogan</h1>
                        <p className="text-center my-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium asperiores assumenda cupiditate eius ipsum minima
                            mollitia nulla perferendis quam, unde?
                        </p>
                        <button className="outline-bnt" onClick={() => setIsSignIn(false)}>
                            Sign-up
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 h-fit border max-w-screen-lg mx-auto">
                    <div className="flex flex-col justify-center items-center h-full px-8">
                        <h1 className="font-bold">Sign Up</h1>
                        <p className="text-center my-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium asperiores assumenda cupiditate eius ipsum minima
                            mollitia nulla perferendis quam, unde?
                        </p>
                        <button className="outline-bnt" onClick={() => setIsSignIn(true)}>
                            Sign-in
                        </button>
                    </div>
                    <div className="items-center justify-center w-full px-4 py-2 text-center">
                        <div className="max-w-screen-lg mx-auto">
                            <form
                                className="flex flex-col max-w-[300px] mx-auto"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    className="input-form my-5"
                                    type="text"
                                    placeholder="Username..."
                                />
                                <input
                                    className="input-form my-5"
                                    type="text"
                                    placeholder="Email..."
                                />
                                <input
                                    className="input-form my-5"
                                    type="text"
                                    placeholder="Password..."
                                />
                                <button className="primary-bnt">Sign-up</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
