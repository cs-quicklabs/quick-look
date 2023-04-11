/* eslint-disable react/jsx-no-target-blank */
import DynamicHeroIcon from './DynmaicIcon'

export default function BannerAddOn({ loaderData, mode }: any) {
  var _ = require('lodash')

  const iconName = _.startCase(_.camelCase(loaderData.supportBanner?.bannerIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '')
  const Final = Name.split(' ').join('')
  const bannerColor = loaderData.supportBanner?.bannerColor
  const bannerHex = loaderData.supportBanner?.bannerHex
  const color = bannerHex ? bannerHex : bannerColor
  const bannerRedirectURL = loaderData?.supportBanner?.bannerlink.includes('https')
    ? loaderData?.supportBanner?.bannerlink
    : 'https://' + loaderData?.supportBanner?.bannerlink

  return (
    <div className={`flex items-center justify-center `}>
      <a
        href={bannerRedirectURL}
        target="_blank"
        className={`flex h-10 hover:underline cursor-pointer items-center justify-center text-sm font-medium leading-5 text-white shadow-sm w-full`}
        style={{
          backgroundColor: color,
        }}
      >
        <DynamicHeroIcon icon={Final} Final={Final} />
        {loaderData?.supportBanner?.bannerText}{' '}
      </a>
    </div>
  )
}
