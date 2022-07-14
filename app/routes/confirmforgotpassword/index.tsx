import logo from '../../../assets/images/quicklook-icon.png'
export default function confirmforgotpassword() {
  return (
    <>
      <div className='flex flex-col items-center bg-gray-50 h-screen font-inter'>
        <div className='flex flex-col '>
          <img src={logo} alt='' className='h-20 w-20 mt-60 mx-auto' />
          <p className='text-3xl leading-9 font-extrabold text-center mt-6 text-gray-900'>
            Reset Your Password
          </p>
        </div>
        <div className='flex flex-col max-w-3xl h-auto shadow mt-7 gap-3 pl-6 pb-6 bg-white rounded-lg font-inter'>
          <div className='max-w-xl'>
            <h1 className='text-lg leading-6 font-medium mt-6'>
              Check your Inbox
            </h1>
            <p className='mt-2 text-sm leading-5 font-normal text-gray-500'>
              A password reset email has been sent to you on your specified
              email ID if it exists.
              <br />
              Please check your email and click on reset password link. You
              should be able to login into your account after resetting your
              password.{' '}
            </p>
            <div className='mt-3'>
              <a
                href='/auth/login'
                className='text-indigo-600 flex items-center cursor-pointer font-medium text-sm'
              >
                Go to Login Page
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 flex justify-center items-center text-indigo-600 h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
