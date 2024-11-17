import SocialLoginButton from "./SocialLoginButton.tsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const ThirdPartyLogIn = () => {
  return (
    <div>
      <SocialLoginButton icon={<FacebookIcon fontSize="medium" />} />
      <SocialLoginButton icon={<GoogleIcon />} />
      <SocialLoginButton icon={<GitHubIcon />} />
    </div>
  );
};

export default ThirdPartyLogIn;
