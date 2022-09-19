import React from 'react'
import DynamicHeroIcon from './DynmaicIcon'

export default function BannerAddOn({loaderData}:any) {

  var _ = require('lodash');

  const iconName = _.startCase(_.camelCase(loaderData?.supportBanner?.bannerIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '');
  const Final = Name.split(" ").join('')

  const bannerText = loaderData?.supportBanner?.bannerText?.length > 30 ? `${loaderData?.supportBanner?.bannerText.substring(0, 30)}...` : loaderData?.supportBanner?.bannerText
  return (
    <div className='flex justify-center items-center'>
      <button style={{ 'backgroundColor': loaderData?.supportBanner?.bannerHex , 'textShadow': '0px 1px black' }} className={`flex justify-center items-center h-10 w-full shadow-sm text-sm leading-5 font-medium text-white cursor-default ${loaderData?.supportBanner?.bannerColor}`}>
        <DynamicHeroIcon icon={Final} Final={Final} />
        <a href={loaderData?.supportBanner?.bannerlink.includes('https') ? loaderData?.supportBanner?.bannerlink : 'https://'+loaderData?.supportBanner?.bannerlink} target="_blank" className='hover:underline text-sm leading-5 font-semibold'>{bannerText} </a>
      </button>
  </div>
  )
}
