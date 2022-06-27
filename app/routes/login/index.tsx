import { LockClosedIcon } from '@heroicons/react/solid';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikCheckbox, FormikInput } from "../../components/Common/FormikInput";

export default function Login() {
  const validate = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
      .matches(
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        ('Email is invalid')
      ),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Your Password must not be less than 4 characters.'),
  });

  const initialValues = {
    email: "",
    password: "",
    remember_me: false,
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <svg className="mx-auto h-12 w-auto" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="200" fill="#4F46E5"/>
            <path d="M290.751 106.13C241.043 54.6877 160.16 54.6889 110.452 106.13C60.745 157.571 60.745 241.274 110.451 292.716C160.162 344.161 241.044 344.159 290.75 292.715C340.458 241.274 340.458 157.571 290.751 106.13ZM200.602 314.371C172.145 314.371 143.687 303.163 122.023 280.741C78.6944 235.901 78.6944 162.942 122.023 118.101C165.35 73.2633 235.849 73.2609 279.18 118.101C322.508 162.942 322.508 235.901 279.18 280.741C257.515 303.161 229.058 314.371 200.602 314.371Z" fill="white"/>
            <path d="M236.1 230.879L229.346 228.733L204.476 242.731C202.06 244.092 199.143 244.092 196.729 242.731L171.857 228.733L165.102 230.879C156.884 233.753 151.371 241.702 151.371 250.684V284.365C165.802 293.354 182.701 298.531 200.77 298.531C218.701 298.531 235.475 293.427 249.831 284.565V250.683C249.831 241.702 244.318 233.753 236.1 230.879Z" fill="white"/>
            <path d="M200.602 142.476C189.265 142.476 180.041 152.022 180.041 163.754C180.041 175.487 189.265 185.033 200.602 185.033C211.939 185.033 221.164 175.487 221.164 163.754C221.164 152.022 211.939 142.476 200.602 142.476Z" fill="white"/>
            <path d="M200.77 99.9549C147.783 99.9549 104.829 144.408 104.829 199.243C104.829 227.806 116.5 253.532 135.156 271.646V250.684C135.156 234.437 145.164 220.067 160.058 214.93C160.12 214.908 160.181 214.888 160.243 214.867L170.358 211.655C172.443 210.995 174.697 211.228 176.609 212.306L200.601 225.809L224.591 212.306C226.507 211.228 228.761 210.995 230.843 211.655L240.958 214.867C241.021 214.888 241.081 214.908 241.143 214.93C256.037 220.067 266.046 234.437 266.046 250.684V271.981C284.901 253.85 296.71 227.981 296.71 199.244C296.712 144.408 253.758 99.9549 200.77 99.9549V99.9549ZM200.602 201.814C180.324 201.814 163.826 184.74 163.826 163.754C163.826 142.768 180.324 125.695 200.602 125.695C220.881 125.695 237.379 142.768 237.379 163.754C237.379 184.74 220.88 201.814 200.602 201.814V201.814Z" fill="white"/>
          </svg>
          <h2 className="mt-6 text-center text-3xl font-[750] text-gray-900">Sign in to your account</h2>
          </div>
          <div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={values => {
                      console.log(values)
                    }}
                  >
                    {formik => (
                    <Form
                      className="space-y-4"
                      action="#"
                      method="POST"
                      noValidate
                    >
                      <div className=''>
                      <div>
                        <FormikInput
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <FormikInput
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      </div>
                      <div className="flex items-center justify-between">
                      <div className="flex items-center mt-3.5 font-semibold">
                        <FormikCheckbox
                          type="checkbox"
                          name="remember_me"
                          label="Remember Me"
                          className="h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm"
                        />
                      </div>
                      <div className="text-sm mt-3.5">    
                        <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                      <div>
                        <button
                          type="submit"
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
                        >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                          </span>
                          Sign in
                        </button>
                        </div>
                        <p className="mt-2 text-center text-sm">
                          <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Did not receive confirmation email? 
                          </Link>
                        </p>
                    </Form>
                    )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}


      