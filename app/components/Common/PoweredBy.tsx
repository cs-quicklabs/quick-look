import { QUICKLABS_DOMAIN } from '~/utils/constants'

const PoweredBy = ({ textColor }: { textColor?: string }) => {
  return (
    <>
      <div className="w-full text-center">
        <a
          href={QUICKLABS_DOMAIN}
          target="_blank"
          className={`text-sm font-normal hover:font-semibold hover:underline ${
            textColor ? textColor : 'text-gray-500'
          } cursor-pointer`}
          rel="noreferrer"
        >
          Powered By <span className="">Quick Bio</span>
        </a>
      </div>
    </>
  )
}

export default PoweredBy
