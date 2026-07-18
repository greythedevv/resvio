import { Link } from "react-router-dom";
import SignupForm from "../components/auth/SignUpForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="font-serif text-2xl text-[#1F2421]"
          >
            resvio
          </Link>

          <p className="text-[#7A756D] text-xs mt-2">
            Create your account
          </p>
        </div>

        <SignupForm />

        <p className="text-center text-xs text-[#7A756D] mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#C1694F] font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}