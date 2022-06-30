import { LockClosedIcon } from '@heroicons/react/solid';
import { ActionFunction, json } from '@remix-run/node';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createUserSession, login } from '~/services/auth.service.server';
import { validateEmail, validatePassword } from '~/utils/validator.server';
import { FormikCheckbox, FormikInput } from "../../components/Common/FormikInput";
import logo from '../../images/logos/quicklook-icon.svg';
import { Form } from '@remix-run/react';

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData();
  let email = form.get('email') as string
  let password = form.get('password') as string

  const errors = {
      email: await validateEmail(email),
      password: await validatePassword(password),
    }
  
  if (Object.values(errors).some(Boolean)){
      return json({ errors, fields: { email, password }, form: action }, { status: 400 })
  }
  const user = await login({email, password}) 
  
  return createUserSession(user.id, '/dashboard')
}

export default function Login() {

  const navigate = useNavigate();

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

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    if (actualData.email && actualData.password) {
      console.log(actualData);
      navigate('/dashboard')
    } else {
      return 'Error';
    }
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img src={logo} alt='' className='mx-auto h-20 w-auto' />
            <h2 className="mt-6 text-center text-3xl font-[750] text-gray-900">Sign in to your account</h2>
          </div>
          <div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    // @ts-ignore
                    onSubmit={handleSubmit}
                  >
                    {formik => (
                    <Form
                      className="space-y-4"
                      method="post"
                      noValidate
                    >
                      <div>
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
                          name="rememberMe"
                          label="Remember Me"
                          className="h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm"
                        />
                      </div>
                      <div className="text-sm mt-3.5">    
                        <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
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

