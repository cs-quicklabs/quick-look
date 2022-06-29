import { LockClosedIcon } from '@heroicons/react/solid';
import { User } from '@prisma/client';
import { ActionFunction, json } from '@remix-run/node';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { createUserSession, register } from '~/services/auth.service.server';
import { sendMail } from '~/services/mail.service';
import { findUserByEmail } from '~/services/user.service';
import { createUserVerificationToken } from '~/services/userVerification.service';
import { validateEmail, validateName, validatePassword } from '~/utils/validator.server';
import { FormikInput } from "../../components/Common/FormikInput";
import logo from '../../images/logos/quicklook-icon.svg';

export const action: ActionFunction = async ({ request }) => {
  let sentMail;

  const form = await request.formData();
  let firstname = form.get('firstName') as string
  let lastname = form.get('lastName') as string
  let email = form.get('email') as string
  let password = form.get('password') as string
  let username = form.get('username') as string
  let url = request.url

  const errors = {
      email: validateEmail(email),
      password: validatePassword(password),
      firstname: validateName(firstname),
      lastname: validateName(lastname),
  }

  if (Object.values(errors).some(Boolean)){
      return json({ errors, fields: { email, password, firstname, lastname }, form: action }, { status: 400 })
  }

  const isregistered = await register({firstname, lastname, username, email, password})
  const generatedToken = uuidv4() as unknown as string;
  if(isregistered){
      sentMail = await sendMail({
          to: email,
          from: process.env.SENDGRID_EMAIL as string, 
          subject: 'Email Verification',
          text: `${url}/verification/${generatedToken}`
      })
  }
  const user: User = await findUserByEmail(email);
  await createUserVerificationToken(user.id, generatedToken)
  return createUserSession(user.id, '/');
}

export default function SignUp() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(4, 'Your Password must not be less than 4 characters.')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt='' className='mx-auto h-12 w-auto' />
          <h2 className="mt-6 text-center text-3xl font-[750] text-gray-900">Create new account</h2>
          <p className="mt-2 text-center text-sm">
            <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              No credit card required. Starting with free plan.
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                      action= ''
                      method="POST"
                      noValidate
                    >
                      <div>
                        <FormikInput
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                          type="firstName"
                          name="firstName"
                          label="First Name"
                        />
                      </div>
                      <div>
                        <FormikInput
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                          type="lastName"
                          name="lastName"
                          label="Last Name"
                        />
                      </div>
                      <div>
                        <FormikInput
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                          type="email"
                          name="email"
                          label="Email address"
                        />
                      </div>
                      <div>
                        <FormikInput
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                          type="password"
                          name="password"
                          label="Password"
                        />
                      </div>
                      <div>
                        <FormikInput
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                          type="password"
                          name="confirmPassword"
                          label="Confirm Password"
                        />
                      </div>
                      <div className="mt-5">
                        <button
                          type="submit"
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                          </span>
                          Create New Account
                        </button>
                      </div>
                    </Form>
                )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

function uuidv4() {
  throw new Error('Function not implemented.');
}

