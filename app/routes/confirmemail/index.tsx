import logo from '../../../assets/images/quicklook-icon.png'
export default function confirmEmail() {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-60'>
        {/* image and p tag */}
        <div className='flex flex-col '>
          <img src={logo} alt='' className='h-auto w-20 mx-auto' />
          <p className='text-3xl text-center font-black'>Confirm your email</p>
        </div>
        {/* content */}
        <div className='w-2/5 h-auto shadow-sm shadow-gray-300 mt-12 p-4'>
          <div className='flex flex-col gap-4 p-auto'>
            <h1 className='text-lg font-semibold '>Check your Inbox</h1>
            <p>
              An confirmation email has been sent to you on your specified email
              Id. Please check <br /> your email and click on email confirmation
              link. You should be able to login into  <br /> your account after
              confirming your email.{' '}
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
