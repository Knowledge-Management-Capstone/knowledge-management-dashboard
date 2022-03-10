import { useState } from 'react'
import { Link } from 'react-router-dom'

import BaseInput from '../components/generic/form/input/BaseInput'
import BaseCheckbox from '../components/generic/form/input/BaseCheckbox'
import BaseButton from '../components/generic/button/BaseButton'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
  }

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <BaseInput
                id="email"
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <BaseInput
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-between">
                <BaseCheckbox
                  id="remember-me"
                  name="remember-me"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                />

                <div className="text-sm">
                  <Link
                    to="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <BaseButton onClick={handleSubmit}>Sign in</BaseButton>
            </form>

            <div className="mt-6">
              <p className="mt-2 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
