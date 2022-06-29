import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikCheckbox, FormikInput } from '~/components/Common/FormikInput';
import { validateRequiredEmail } from "../../components/Utils/validators";
import logo from '../../images/logos/quicklook-icon.svg';

export default function Forgotpassword()  {
  const SignInSchema = Yup.object().shape({
    email: validateRequiredEmail(),
  });
  const initialValues = {
    email: "",
  };

  const [showModal, toggleModal] = useState(false);

  const popUpProps = {
    toggleModal,
    headline: "Password reset email sent!",
    text: 
      "Password reset email has been shared on registered email address. Please set new password with the help of link"
    ,
    buttonText: "Go back to login",
    linkText: "signin",
    dataAttr: "back-to-login",
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img src={logo} alt='' className='mx-auto h-20 w-auto' />
            <h2 className="mt-6 text-center text-3xl font-[750] text-gray-900">Forgot Password?</h2>
            <p className="mt-5 flex items-center justify-start text-base text-gray-500">
              Please enter your email address to receive reset password link
          </p>
          </div>
          <div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <Formik
                    initialValues={initialValues}
                    validationSchema={SignInSchema}
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
                    <div>
                      <FormikInput
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                        type="email"
                        name="email"
                        label="Email address"
                      />
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Reset Password Instructions
                      </button>
                    </div>
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