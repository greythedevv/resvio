import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="font-serif text-2xl text-[#1F2421]"
          >
            resvio
          </Link>

          <p className="text-[#7A756D] text-xs mt-2">
            Welcome back
          </p>
        </div>

        <LoginForm />

        <p className="text-center text-xs text-[#7A756D] mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#C1694F] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}