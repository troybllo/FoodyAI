import { useState } from "react";

export type User = {
  email: string;
  password: string;
};

interface SignUpProps {
  onSuccess?: () => void;
}

export default function Signup({ onSuccess }: SignUpProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;

    if (password.length === 0) return strength;

    if (password.length > 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: string;
    message: string;
  } | null>(null);

  const isValid = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!formData.email) {
      errors.email = "Email is required";
      return false;
    } else if (!/\S+@\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      return false;
    } else if (!formData.password) {
      errors.password = "Password is requird";
      return false;
    } else if (formData.password.length < 5) {
      errors.password = "Password must be atleast 5 characters";
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      console.log(errors);
    }
    console.log("Successfull");
  };

  return (
    <div className="w-full">
      {notification && (
        <div
          className={`p-3 mb-4 rounded text-white ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-3 py-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}

          {/* Password strength indicator */}
          {formData.password && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    passwordStrength < 2
                      ? "bg-red-500"
                      : passwordStrength < 4
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }`}
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1">
                Password strength:{" "}
                {passwordStrength < 2
                  ? "Weak"
                  : passwordStrength < 4
                    ? "Moderate"
                    : "Strong"}
              </p>
              <ul className="text-xs mt-1 text-gray-500 space-y-1">
                <li
                  className={
                    formData.password.length >= 8 ? "text-green-500" : ""
                  }
                >
                  ✓ At least 8 characters
                </li>
                <li
                  className={
                    /[A-Z]/.test(formData.password) ? "text-green-500" : ""
                  }
                >
                  ✓ At least 1 uppercase letter
                </li>
                <li
                  className={
                    /[0-9]/.test(formData.password) ? "text-green-500" : ""
                  }
                >
                  ✓ At least 1 number
                </li>
                <li
                  className={
                    /[^A-Za-z0-9]/.test(formData.password)
                      ? "text-green-500"
                      : ""
                  }
                >
                  ✓ At least 1 special character
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-md text-white font-medium ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
