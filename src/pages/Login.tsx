import { FormEvent, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      {isSignIn ? (
        <div className="grid grid-cols-2 h-screen max-w-screen-lg mx-auto">
          <div className="items-center justify-center w-full px-4 py-2 border-r-2 text-center my-auto">
            <h1 className="font-bold mb-4">Sign in</h1>
            <div>
              {/* Line Login Button */}
              <Button>
                <FacebookIcon></FacebookIcon>
              </Button>
              {/* Google Login Button */}
              <Button>
                <GoogleIcon></GoogleIcon>
              </Button>
              {/* Facebook Login Button */}
              <Button>
                <GitHubIcon></GitHubIcon>
              </Button>
            </div>
            <Divider className="text-gray-300">or</Divider>
            <div className="max-w-screen-lg mx-auto">
              <form
                className="flex flex-col max-w-[300px] mx-auto text-center"
                onSubmit={handleSubmit}
              >
                <Box
                  component="form"
                  sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <Button variant="contained" color="secondary">
                    Sign in
                  </Button>
                </Box>
              </form>
            </div>
          </div>
          <div className = " flex flex-col justify-center items-center h-full px-8">
            <p className = "text-center my-5">"Style Your Space, Simplify Your Life.
              Discover Furniture That Feels Like Home."
            </p>
            <button
                className = "outline-bnt"
                onClick = {() => setIsSignIn(false)}
            >
              Sign-up
            </button>
          </div>
        </div>
      ) : (
          <div className = "grid grid-cols-2 h-screen max-w-screen-lg mx-auto">
            <div className = "flex flex-col justify-center items-center px-8">
              <p className = "text-center my-5">"Style Your Space, Simplify Your Life.
                Discover Furniture That Feels Like Home."
              </p>
              <button
                  className = "outline-bnt"
                  onClick = {() => setIsSignIn(true)}
              >
                Sign-in
              </button>
            </div>
            <div className = "items-center justify-center w-full px-4 py-2 text-center my-auto">
              <div className = "max-w-screen-lg mx-auto border-l-2">
              <form
                className="flex flex-col max-w-[300px] mx-auto"
                onSubmit={handleSubmit}
              >
                <Box
                  component="form"
                  sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Confirm password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <Button variant="contained" color="secondary">
                    Sign up
                  </Button>
                </Box>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
