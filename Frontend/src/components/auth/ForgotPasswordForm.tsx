import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";

import { forgotPassword } from "../../services/auth.service";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      await forgotPassword(email);

      setSent(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-white border border-[#E8D9CD] rounded-lg p-6">
        <p className="text-sm text-center leading-relaxed">
          If an account exists for
          <strong> {email}</strong>,
          a reset link has been sent.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E8D9CD] rounded-lg p-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <ErrorMessage message={error} />

        <p className="text-xs text-[#7A756D]">
          Enter your email and we'll send
          a password reset link.
        </p>

        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="you@example.com"
          icon={<FiMail size={15} />}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#C1694F] text-[#FAF6F1] py-2.5 rounded-lg"
        >
          {loading
            ? "Sending..."
            : "Send reset link"}
        </button>
      </form>
    </div>
  );
}