import RegisterForm from "../components/logRegister/RegisterForm";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-cream-white to-background-gray px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-10 animate-fadeInUp">
        {/* Logo + Archix */}
        <div
          className="flex items-center justify-center gap-2 mb-6 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img src="./logos/archixCopy.png" alt="Archix Logo" className="h-12 w-auto" />
          <h1 className="text-3xl font-bold text-corporate-red relative">
            Archix
            <span className="absolute left-0 bottom-0 w-full h-1 bg-corporate-red rounded-full"></span>
          </h1>
        </div>
        <p className="text-medium-gray text-center mb-6">Create your account</p>

        {/* Form */}
        <RegisterForm />

        {/* Links */}
        <div className="mt-6 text-center text-sm text-medium-gray">
          Already have an account?{" "}
          <a href="/login" className="text-corporate-red hover:underline">
            Login
          </a>
        </div>
        <div className="mt-2 text-center">
          <a href="/forgot-password" className="text-sm text-corporate-red hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-medium-gray mt-6 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="underline hover:text-corporate-red">Privacy Policy</a> and{" "}
          <a href="#" className="underline hover:text-corporate-red">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};
