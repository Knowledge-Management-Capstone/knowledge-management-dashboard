import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

import BaseInput from '../components/generic/form/input/BaseInput'
import BaseSelect from '../components/generic/form/input/BaseSelect'
import BaseButton from '../components/generic/button/BaseButton'

const accountTypes = [
  { label: 'Lecturer', value: 'lecturer' },
  { label: 'Student', value: 'student' }
]

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
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.table(values)
                  setSubmitting(false)
                }, 400)
              }}
            >
              {formik => (
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                  <BaseInput
                    id="fullName"
                    label="Full Name"
                    type="text"
                    {...formik.getFieldProps('fullName')}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div>{formik.errors.fullName}</div>
                  ) : null}
                  <BaseInput
                    id="email"
                    label="Email"
                    type="email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                  <BaseInput
                    id="userId"
                    label="NIM / NIP"
                    type="text"
                    {...formik.getFieldProps('userId')}
                  />
                  {formik.touched.userId && formik.errors.userId ? (
                    <div>{formik.errors.userId}</div>
                  ) : null}
                  <BaseInput
                    id="faculty"
                    label="Faculty"
                    type="text"
                    {...formik.getFieldProps('faculty')}
                  />
                  {formik.touched.faculty && formik.errors.faculty ? (
                    <div>{formik.errors.faculty}</div>
                  ) : null}
                  <BaseInput
                    id="major"
                    label="Major"
                    type="text"
                    {...formik.getFieldProps('major')}
                  />
                  {formik.touched.major && formik.errors.major ? (
                    <div>{formik.errors.major}</div>
                  ) : null}
                  <BaseSelect
                    id="accountType"
                    label="Account Type"
                    options={accountTypes}
                    {...formik.getFieldProps('accountType')}
                  />
                  {formik.touched.accountType && formik.errors.accountType ? (
                    <div>{formik.errors.accountType}</div>
                  ) : null}
                  <BaseInput
                    id="password"
                    label="Password"
                    type="password"
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                  <BaseButton type="submit">Register</BaseButton>
                </form>
              )}
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
