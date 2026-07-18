import { Link } from "react-router-dom";

import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="font-serif text-2xl"
          >
            resvio
          </Link>

          <p className="text-xs text-[#7A756D] mt-2">
            Reset your password
          </p>
        </div>

        <ForgotPasswordForm />

        <p className="text-center text-xs mt-6">
          <Link
            to="/login"
            className="text-[#C1694F]"
          >
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}