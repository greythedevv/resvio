import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";

import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import ErrorMessage from "./ErrorMessage";

import { loginUser } from "../../services/auth.service";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await loginUser(form);

      navigate("/dashboard");
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

  return (
    <div className="bg-white border border-[#E8D9CD] rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <ErrorMessage message={error} />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          icon={<FiMail size={15} />}
          required
        />

        <PasswordInput
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-xs text-[#C1694F] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#C1694F] text-[#FAF6F1] font-serif text-sm py-2.5 rounded-lg hover:bg-[#a8573f] transition-colors disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}