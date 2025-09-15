import { useState } from "react";
import { Link } from "react-router";
import axios from "../../lib/axios"; 

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
  }>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/login", { email, password });

      window.location.pathname = "/";
    } catch (error: any) {
      console.error("Login failed. Full error response:", error.response); 
      if (error.response) {
        console.error("Data:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error Message:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container bg-white mx-auto mt-32 w-xl px-24 py-16 flex flex-col gap-8 shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold">Sign in</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="border border-custom-gray rounded-md p-2"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-custom-gray rounded-md p-2"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-custom-blue text-white text-center text-xl py-3 rounded-md disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="text-center text-custom-gray">
          <Link to="/">Back to results</Link>
        </div>
      </div>
    </section>
  );
}
