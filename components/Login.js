import { signIn } from "next-auth/client";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="https://kahanelaw.com/wp-content/uploads/2014/01/facebook-icon.png"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center font-semibold cursor-pointer text-xl"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
