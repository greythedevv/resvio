
import { Link } from "react-router-dom";
import SignupForm from "../components/auth/SignUpForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF8] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md flex-col justify-center">
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link
            to="/"
            className="font-serif text-2xl tracking-tight text-[#1F2421]"
          >
            resvio
          </Link>

          <div className="mx-auto mt-5 h-px w-10 bg-[#C1694F]" />
        </div>

        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl tracking-tight text-[#1F2421]">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-[#7A756D]">
            Start creating your wedding experience.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-[#E8D9CD] bg-white p-6 shadow-[0_10px_35px_rgba(31,36,33,0.04)] md:p-8">
          <SignupForm />
        </div>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-[#7A756D]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#C1694F] hover:text-[#A8573F]"
          >
            Log in
          </Link>
        </p>

        <p className="mt-8 text-center text-[11px] leading-5 text-[#A19A92]">
          By continuing, you agree to Resvio's terms and privacy policy.
        </p>
      </div>
    </main>
  );
}

