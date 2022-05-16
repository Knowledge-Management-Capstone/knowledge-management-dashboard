import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import BaseInput from '../components/generic/form/input/BaseInput'
import BaseSelect from '../components/generic/form/input/BaseSelect'
import BaseButton from '../components/generic/button/BaseButton'

import { register } from '../store/actions/userActions'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector(state => state.userLogin)

  useEffect(() => {
    navigate('/', { replace: true })
  }, [user, navigate])

  const handleSubmit = (values, { setSubmitting }) => {
    const { fullName, email, userId, faculty, major, accountType, password } =
      values
    dispatch(
      register(fullName, email, userId, faculty, major, accountType, password)
    )
    setSubmitting(false)
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
            Create new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                userId: '',
                faculty: '',
                major: '',
                accountType: '',
                password: ''
              }}
              validationSchema={Yup.object({
                fullName: Yup.string().required('Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                userId: Yup.string().required('Required'),
                faculty: Yup.string().required('Required'),
                major: Yup.string().required('Required'),
                accountType: Yup.string().required('Required'),
                password: Yup.string().required('Required')
              })}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-6">
                <BaseInput label="Full Name" name="fullName" type="text" />
                <BaseInput label="Email" name="email" type="email" />
                <BaseInput label="NIM / NIP" name="userId" type="text" />
                <BaseInput label="Faculty" name="faculty" type="text" />
                <BaseInput label="Major" name="major" type="text" />
                <BaseSelect label="Account Type" name="accountType">
                  <option value="" disabled defaultValue>
                    Select account type
                  </option>
                  <option value="lecturer">Lecturer</option>
                  <option value="student">Student</option>
                </BaseSelect>
                <BaseInput label="Password" name="password" type="password" />
                <BaseButton type="submit">Register</BaseButton>
              </Form>
            </Formik>

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
