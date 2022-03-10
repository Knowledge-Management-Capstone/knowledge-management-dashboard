import { Link } from 'react-router-dom'

import BaseInput from '../components/generic/form/input/BaseInput'
import BaseSelect from '../components/generic/form/input/BaseSelect'
import BaseButton from '../components/generic/button/BaseButton'

const accountTypes = ['Lecturer', 'Student']

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
              <BaseSelect
                id="account-type"
                name="account-type"
                label="Account Type"
                defaultValue="Student"
                options={accountTypes}
              />
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
