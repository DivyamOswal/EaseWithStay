import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#E6E6E6]">
      <form className="flex flex-col gap-4 m-auto p-8 py-10 w-80 sm:w-[380px] text-gray-600 rounded-xl shadow-2xl border border-gray-200 bg-white">
        {/* Heading */}
        <p className="text-2xl font-semibold text-center text-gray-800">
          <span className="text-[#0056B3]">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {/* Name field (only for register) */}
        {state === "register" && (
          <div className="w-full">
            <label className="block font-medium">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type here"
              className="border border-gray-300 rounded w-full p-2 mt-1 outline-none focus:ring-2 focus:ring-[#0056B3]"
              type="text"
              required
            />
          </div>
        )}

        {/* Email field */}
        <div className="w-full">
          <label className="block font-medium">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Type here"
            className="border border-gray-300 rounded w-full p-2 mt-1 outline-none focus:ring-2 focus:ring-[#0056B3]"
            type="email"
            required
          />
        </div>

        {/* Password field */}
        <div className="w-full">
          <label className="block font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Type here"
            className="border border-gray-300 rounded w-full p-2 mt-1 outline-none focus:ring-2 focus:ring-[#0056B3]"
            type="password"
            required
          />
        </div>

        {/* Switch between Login/Register */}
        {state === "register" ? (
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-[#0056B3] cursor-pointer font-medium"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-[#0056B3] cursor-pointer font-medium"
            >
              Click here
            </span>
          </p>
        )}

        {/* Button */}
        <button className="bg-[#0056B3] hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md font-medium mt-2">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </section>
  );
};

export default Login;
