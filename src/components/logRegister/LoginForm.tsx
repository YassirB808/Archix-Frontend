import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Login failed");
      navigate("/home");
    } catch {
      setErrors({ email: "Invalid email or password" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-3 text-light-gray w-5 h-5 pointer-events-none" />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none ${
            errors.email ? "border-error" : "border-very-light-gray"
          }`}
        />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="relative">
        <Lock className="absolute left-3 top-3 text-light-gray w-5 h-5 pointer-events-none" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none ${
            errors.password ? "border-error" : "border-very-light-gray"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-light-gray hover:text-corporate-red"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
        {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-corporate-red text-cream-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        <LogIn className="w-5 h-5" /> {isSubmitting ? "Logging in..." : "Login"}
      </button>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-3 text-sm text-medium-gray">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Login */}
      <button
        type="button"
        className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Login with Google
      </button>

      {/* Company Email Option */}
      <button
        type="button"
        className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
      >
        <Mail className="w-5 h-5 text-light-gray" />
        Login with company email
      </button>
    </form>
  );
};

export default LoginForm;
