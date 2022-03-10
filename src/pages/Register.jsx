import { Link } from 'react-router-dom'

import BaseInput from '../components/generic/form/input/BaseInput'
import BaseButton from '../components/generic/button/BaseButton'

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <BaseInput
                id="full-name"
                name="full-name"
                label="Full Name"
                type="text"
                autoComplete="full-name"
                required
              />
              <BaseInput
                id="email"
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                required
              />
              <BaseInput
                id="user-id"
                name="user-id"
                label="NIM / NIP"
                type="text"
                autoComplete="user-id"
                required
              />
              <BaseInput
                id="faculty"
                name="faculty"
                label="Faculty"
                type="text"
                autoComplete="faculty"
                required
              />
              <BaseInput
                id="major"
                name="major"
                label="Major"
                type="text"
                autoComplete="major"
                required
              />

              <div>
                <label
                  htmlFor="account-type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account Type
                </label>
                <select
                  id="account-type"
                  name="account-type"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="Canada"
                >
                  <option>Lecturer</option>
                  <option>Student</option>
                </select>
              </div>
              <BaseInput
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
              />
              <BaseButton>Register</BaseButton>
            </form>

            <div className="mt-6">
              <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
