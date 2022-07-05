import logo from '../../../assets/images/quicklook-icon.png'
export default function confirmforgotpassword() {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-60'>
        <div className='flex flex-col '>
          <img src={logo} alt='' className='h-auto w-20 mx-auto' />
          <p className='text-3xl text-center font-black'>Reset Your Password</p>
        </div>
        <div className='w-2/5 h-auto shadow-sm shadow-gray-300 mt-12 p-4'>
          <div className='flex flex-col gap-4 p-auto'>
            <h1 className='text-lg font-semibold '>Check your Inbox</h1>
            <p>
              A password reset email has been sent to you on your specified
              email ID if it exists. <br />
              Please check your email and click on reset password link. You should be able to login into your account after resetting your password.{' '}
            </p>
            <a
              href='/login'
              className='text-blue-500 cursor-pointer font-medium'
            >
              Go to Login Page →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
