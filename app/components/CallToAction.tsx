import backgroundImage from '../../assets/images/background-call-to-action.jpg'
import { ButtonLink } from './Button'
import { Container } from './Container'

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
          className='w-screen absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        
          
        />
      </div>
      <Container className="relative">

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>
            Get started today
          </h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            Create one link to connect all your social profile and get
            discovered .
          </p>
          <ButtonLink href="/auth/signup" color="white" className="mt-10">
            Get Started For Free
          </ButtonLink>
        </div>
      </div>
      </Container>

    </section>
  )
}


