import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiUser } from "react-icons/fi";

import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import ErrorMessage from "./ErrorMessage";

import { signupUser } from "../../services/auth.service";

export default function SignupForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

    setError("");

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      await signupUser(form);

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
          label="Full name"
          name="name"
          type="text"
          placeholder="Amara Okafor"
          value={form.name}
          onChange={handleChange}
          icon={<FiUser size={15} />}
          required
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          icon={<FiMail size={15} />}
          required
        />

        <PasswordInput
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#C1694F] text-[#FAF6F1] font-serif text-sm py-2.5 rounded-lg hover:bg-[#a8573f] transition-colors disabled:opacity-60"
        >
          {loading
            ? "Creating account..."
            : "Create account"}
        </button>
      </form>
    </div>
  );
}