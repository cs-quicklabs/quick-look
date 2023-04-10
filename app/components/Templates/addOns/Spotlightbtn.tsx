import React from 'react'
import DynamicHeroIcon from './DynmaicIcon'

export default function Spotlightbtn({ loaderData }: any) {
  var _ = require('lodash')

  const iconName = _.startCase(_.camelCase(loaderData?.spotlightButton?.spotlightIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '')
  const Final = Name.split(' ').join('')

  const btnText =
    loaderData?.spotlightButton?.buttonText?.length > 30
      ? `${loaderData?.spotlightButton?.buttonText.substring(0, 30)}...`
      : loaderData?.spotlightButton?.buttonText

  return (
    <div className={`flex justify-center items-center mb-4 mt-4`}>
      <a
        className=""
        href={
          loaderData?.spotlightButton?.buttonActionlink.includes('https')
            ? loaderData?.spotlightButton?.buttonActionlink
            : 'https://' + loaderData?.spotlightButton?.buttonActionlink
        }
        target="_blank"
        rel="noreferrer"
      >
        <button
          className={`flex justify-center rounded-md items-center w-[299px] sm:w-[399px]  h-10 shadow-sm text-sm leading-5 font-medium text-white bg-[#${loaderData?.spotlightButton?.buttonhex}] ${loaderData?.spotlightButton?.buttonColor} `}
        >
          <DynamicHeroIcon icon={Final} Final={Final} /> {btnText}
        </button>
      </a>
    </div>
  )
}
