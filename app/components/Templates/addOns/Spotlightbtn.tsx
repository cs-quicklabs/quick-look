
import React from 'react'
import DynamicHeroIcon from './DynmaicIcon'


export default function Spotlightbtn({ loaderData }: any) {
  var _ = require('lodash');

  const iconName = _.startCase(_.camelCase(loaderData?.spotlightButton?.spotlightIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '');
  const Final = Name.split(" ").join('')

  const btnText = loaderData?.spotlightButton?.buttonText?.length > 30 ? `${loaderData?.spotlightButton?.buttonText.substring(0, 30)}...` : loaderData?.spotlightButton?.buttonText


  return (
    <div className='flex justify-center items-center mt-9 mb-4'>
      <a className='pr-8 md:pr-0' href={loaderData?.spotlightButton?.buttonActionlink.includes('https') ? loaderData?.spotlightButton?.buttonActionlink : 'https://'+loaderData?.spotlightButton?.buttonActionlink} target="_blank">
        <button style={{ 'backgroundColor': loaderData?.spotlightButton?.buttonhex, 'textShadow': '0px 1px black' }} className={`flex justify-center rounded-md items-center w-[299px] sm:w-[399px] ml-[4.5rem] sm:ml-auto h-10 shadow-sm text-sm leading-5 font-medium text-white ${loaderData?.spotlightButton?.buttonColor}`}><DynamicHeroIcon icon={Final} Final={Final} /> {btnText}
        </button>
      </a>
    </div>
  )
}

