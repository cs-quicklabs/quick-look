import logo from '../../../assets/images/quicklook-icon.png'
export default function confirmforgotpassword() {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-gray-50'>
        <div className='flex flex-col '>
          <img src={logo} alt='' className='h-20 w-20 mt-60 mx-auto' />
          <p className='text-3xl leading-9 font-extrabold text-center mt-6 text-gray-900'>Reset Your Password</p>
        </div>
        <div className='flex flex-col max-w-3xl h-auto shadow mt-7 gap-3 pl-6 pb-6 bg-white rounded-lg font-inter'>
          <div className='max-w-xl'>
            <h1 className='text-lg leading-6 font-medium mt-6'>Check your Inbox</h1>
            <p className='mt-2 text-sm leading-5 font-normal text-gray-500'>
              A password reset email has been sent to you on your specified
              email ID if it exists. 
              <br />
              Please check your email and click on reset password link. You should be able to login into your account after resetting your password.{' '}
            </p>
            <div className='mt-3'>
              <a
                href='/login'
                className='text-indigo-600 w-32 h-5 cursor-pointer text-sm leading-5 font-medium '
              >
                Go to Login Page →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
