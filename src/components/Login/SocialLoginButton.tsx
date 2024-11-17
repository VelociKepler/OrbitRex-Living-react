import Button from "@mui/material/Button";
import React from "react";

const SocialLoginButton = ({ icon }: { icon: React.ReactNode }) => {
  return <Button className="social-button">{icon}</Button>;
};

export default SocialLoginButton;
