import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, LogIn } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";

    // Email
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    // Password
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";

    // Confirm Password
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      if (!response.ok) throw new Error("Registration failed");
      navigate("/login");
    } catch {
      setErrors({ email: "This email is already registered" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div className="relative">
        <User className="absolute left-3 top-3 text-light-gray w-5 h-5 pointer-events-none" />
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none ${
            errors.name ? "border-error" : "border-very-light-gray"
          }`}
        />
        {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
      </div>

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

      {/* Confirm Password */}
      <div className="relative">
        <Lock className="absolute left-3 top-3 text-light-gray w-5 h-5 pointer-events-none" />
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none ${
            errors.confirmPassword ? "border-error" : "border-very-light-gray"
          }`}
        />
        {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-corporate-red text-cream-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        <LogIn className="w-5 h-5" /> {isSubmitting ? "Registering..." : "Register"}
      </button>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-3 text-sm text-medium-gray">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Register */}
      <button
        type="button"
        className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Register with Google
      </button>

      {/* Company Email Option */}
      <button
        type="button"
        className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
      >
        <Mail className="w-5 h-5 text-light-gray" />
        Register with company email
      </button>
    </form>
  );
};

export default RegisterForm;
