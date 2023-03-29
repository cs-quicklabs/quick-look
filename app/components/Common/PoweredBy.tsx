const PoweredBy = ({ textColor }: { textColor?: string }) => {
  return (
    <>
      <div className="w-full text-center">
        <a
          href={`/`}
          target="_blank"
          className={`text-sm font-normal hover:font-semibold ${
            textColor ? textColor : 'text-gray-500'
          } cursor-pointer`}
          rel="noreferrer"
        >
          Powered By <span className="">Quicklook</span>
        </a>
      </div>
    </>
  )
}

export default PoweredBy
