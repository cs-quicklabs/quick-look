// import { Container } from '../components/Container'
import backgroundImage from '../images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id='get-started-today'
      className='relative overflow-hidden bg-blue-600 py-32 text-xl font-medium'
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <img
          src={backgroundImage}
          alt=''
          width={2347}
          height={1244}
          // className='fixed'
          style={{
            position: 'absolute',
            inset: ' 0px',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
          }}
        />
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>
            Get started today
          </h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <button
            color='white'
            className='group inline-flex items-center justify-center rounded-full py-2 px-4  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10 font-medium text-lg'
          >
            <a href='/login'>Get 6 months free</a>
          </button>
        </div>
      </div>
    </section>
  )
}
