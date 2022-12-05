/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import DynamicHeroIcon from './DynmaicIcon'

export default function BannerAddOn({ loaderData, mode }: any) {
  var _ = require('lodash')

  const iconName =
    _.startCase(_.camelCase(loaderData?.supportBanner?.bannerIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '')
  const Final = Name.split(' ').join('')

  return (
    <div
      className={`flex items-center justify-center ${
        mode === 'mobile' ? 'z-0' : ''
      }
       
       ${mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '2' ? 'xl:w-[126%] medium:w-[104%]' : ''}`}
    >
      <a
      href={
        loaderData?.supportBanner?.bannerlink.includes('https')
          ? loaderData?.supportBanner?.bannerlink
          : 'https://' + loaderData?.supportBanner?.bannerlink
      }
      target="_blank"
        style={{
          backgroundColor: loaderData?.supportBanner?.bannerHex,
          textShadow: '0px 1px black',
        }}
        className={`flex h-10 cursor-pointer items-center justify-center text-sm font-medium leading-5 text-white shadow-sm w-full
        ${loaderData?.supportBanner?.bannerColor}`}
      >
        <DynamicHeroIcon icon={Final} Final={Final} />
        <a
          href={
            loaderData?.supportBanner?.bannerlink.includes('https')
              ? loaderData?.supportBanner?.bannerlink
              : 'https://' + loaderData?.supportBanner?.bannerlink
          }
          target="_blank"
          className="text-sm font-semibold leading-5 hover:underline"
        >
          {loaderData?.supportBanner?.bannerText}{' '}
        </a>
      </a>
    </div>
  )
}
