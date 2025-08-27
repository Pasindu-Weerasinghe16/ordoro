import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center">
        <div className="flex justify-center order-first sm:order-last">
          <img src={require("../assets/register.jpg")} alt="" />
        </div>
        <div className="w-full max-w-xl space-y-8 p-14 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-40 w-auto mb-2"
              src={require("../assets/logo.png")}
              alt="Your Company"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-mono text-center">
              Sign Up
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-6">
              <div className="flex gap-4">
                <input
                  name="firstName"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  placeholder="First Name"
                />
                <input
                  name="lastName"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  placeholder="Password"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-400" />
                </span>
              </div>
              <div>
                <input
                  name="phoneNumber"
                  type="number"
                  autoComplete="phoneNumber"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  required
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I Agree Terms & Conditions
                </label>
              </div>

              <div className="text-sm">
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 py-2 px-3 text-lg font-semibold text-white shadow-lg hover:from-blue-500 hover:to-cyan-300 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="h-5 w-5 text-cyan-200 group-hover:text-cyan-100" aria-hidden="true" />
                </span>
                <span className="ml-6">Sign up</span>
              </button>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already Have an Account, Please {" "}
                  <Link to = '/login'>Sign In now</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;