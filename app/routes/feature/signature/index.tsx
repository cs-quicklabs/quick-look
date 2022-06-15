export default function Signature() {
  return (
    <div className='flex flex-col gap-12 mt-10'>
      <div>
        <h1 className=' text-center object-cover text-xl'>
          An email signature is a snapshot of your page that is added
          <br /> to every email message you send.
        </h1>
      </div>
      <div className='flex justify-center  items-center'>
        <img
          src='https://about.me/s3/h/z/email_signature.8a7f9eb6.jpg'
          alt=''
          className='lg:w-2/4 object-cover'
        />
      </div>
    </div>
  )
}
