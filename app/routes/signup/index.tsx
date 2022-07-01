import { LockClosedIcon } from '@heroicons/react/solid'
import { User } from '@prisma/client'
import { ActionFunction, json } from '@remix-run/node'
import { Formik } from 'formik'

import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { createUserSession, register } from '~/services/auth.service.server'
import { sendMail } from '~/services/mail.service.server'
import { findUserByEmail } from '~/services/user.service.serevr'
import { createUserVerificationToken } from '~/services/userVerification.service.server'
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from '~/utils/validator.server'
import { FormikInput } from '../../components/Common/FormikInput'
import { v4 as uuidv4 } from 'uuid'
import logo from '../../images/logos/quicklook-icon.svg'
import { Form } from '@remix-run/react'


export const action: ActionFunction = async ({ request }) => {
  let sentMail

  const form = await request.formData()
  let firstname = form.get('firstName') as string
  let lastname = form.get('lastName') as string
  let email = form.get('email') as string
  let password = form.get('password') as string
  let username = form.get('profileId') as string
  let url = request.url
  console.log(url)

  // const res = await fetch(url)
  const res = new Response(JSON.stringify({ url }))
  const json = await res.json()
  console.log('sup', json)

  const errors = {
    email: await validateEmail(email),
    password: await validatePassword(password),
    firstname: await validateName(firstname),
    lastname: await validateName(lastname),
    username: await validateUsername(username),
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors,
        fields: { email, password, firstname, lastname, username },
        form: action,
      },
      { status: 400 }
    )
  }
  console.log(Object.values(errors))

  const registered = await register({
    firstname,
    lastname,
    username,
    email,
    password,
  })
  const generatedToken = uuidv4() as string
  if (registered) {
    sentMail = await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Email Verification',
      text: `${url}/verification/${generatedToken}`,
      html: `<h1 style=" font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Click on the Link below to Verify your mail</h1>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; font-size: 22px; border:2px solid blue; border-radius:5px; padding:5px"> Click to Verify</a>
      <div style="margin-top:40px">
      <h3>QuickLook.me</h3>
      <span>Describing you with just one link</span></div>`,
    })
  }

  const user: User = await findUserByEmail(email)
  await createUserVerificationToken(user.id, generatedToken)
  return createUserSession(user.id, '/confirmemail') 
}

export default function SignUp() {
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    profileId: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Z.-]+$/,
      ('Profile ID is invalid')
    ),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(4, 'Your Password must not be less than 4 characters.')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  const initialValues = {
    firstName: '',
    lastName: '',
    profileId: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img src={logo} alt='' className='mx-auto h-20 w-auto' />
          <h2 className='mt-4 text-center text-3xl font-[750] text-gray-900'>
            Create new account
          </h2>
          <p className='mt-2 text-center text-sm'>
            <Link
              to='#'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              No credit card required. Starting with free plan.
            </Link>
          </p>
        </div>
        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={(values) => {}}
            >
              {(formik) => (
                <Form className='space-y-4' method='post' noValidate>
                  <div className='mt-1 grid grid-cols-2 gap-2'>
                    <div>
                      <FormikInput
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                        type='firstName'
                        name='firstName'
                        label='First Name'
                      />
                    </div>
                    <div>
                      <FormikInput
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                        type='lastName'
                        name='lastName'
                        label='Last Name'
                      />
                    </div>
                  </div>
                  <div>
                    <FormikInput
                      className='pl-24 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                      xyz='quicklook.me/'
                      // value = 'quicklook.me/'
                      // onClick = {(e: any) => setFieldValue('quicklook.me/', e ? e : "")}
                      type='profileId'
                      name='profileId'
                      label='Choose your Profile ID'
                    />
                  </div>
                  <div>
                    <FormikInput
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                      type='email'
                      name='email'
                      label='Email address'
                    />
                  </div>
                  <div>
                    <FormikInput
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                      type='password'
                      name='password'
                      label='Password'
                    />
                  </div>
                  <div>
                    <FormikInput
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                      type='password'
                      name='confirmPassword'
                      label='Confirm Password'
                    />
                  </div>
                  <div className='mt-5'>
                    <button
                      // type='submit'
                      onClick={()=> {
                        formik.values.profileId= "quicklook.me/" + formik.values.profileId
                        // console.log(formik)
                        }}
                      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        <LockClosedIcon
                          className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                          aria-hidden='true'
                        />
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
function searchCities(arg0: string | null): any {
  throw new Error('Function not implemented.')
}
