import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.userLogin)

  useEffect(() => {
    if (!user) navigate('/login', { replace: true })
    if (user.isApproved) navigate('/', { replace: true })
  })

  return (
    <>
      <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <div className="sm:ml-6">
              <div className="sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Account not activated
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please contact the administrator
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go back to login
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default NotFound
