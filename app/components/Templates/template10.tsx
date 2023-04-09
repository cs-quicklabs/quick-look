import React from 'react'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'
import defaultimg from '../../../assets/images/profile.png'
import { useLocation } from '@remix-run/react'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import PortfolioAddon from './addOns/portfolio'
import PoweredBy from '../Common/PoweredBy'

function Template10({ input, loaderData, primaryRestore, secondaryRestore, mode }: any) {
  const Location = useLocation()

  const nav = Location.pathname.includes(`${loaderData.username}`)
  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && (
        <BannerAddOn mode={mode} loaderData={loaderData} />
      )}

      <div>
        {primaryRestore || loaderData?.profileImage?.primaryImage ? (
          <img
            src={primaryRestore ? DefaultCoverPicture : loaderData?.profileImage?.primaryImage}
            className={`w-[100%] object-cover ${
              mode === 'mobile' ? 'h-[15rem]' : 'h-[8rem] md:h-[14rem]'
            }`}
            alt="cover"
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="xl:flex xl:flex-col xl:items-center ">
        <div
          className={`flex flex-col ${mode === 'mobile' ? '' : ''}  ${
            mode === 'mobile'
              ? 'h-[9rem] largeLaptop:h-[20vh]'
              : 'h-[4rem] md:h-[7rem] largeLaptop:h-[9rem]'
          }`}
        >
          <div
            className={`relative flex justify-center  ${
              primaryRestore || loaderData?.profileImage?.primaryImage
                ? ` ${
                    mode === 'mobile' ? 'bottom-[5rem] right-0' : 'bottom-[4rem] md:bottom-[9rem]'
                  }`
                : 'bottom-[-11rem]'
            } ${mode === 'mobile' ? 'bottom-[9rem]' : ''}`}
          >
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                src={secondaryRestore ? defaultimg : loaderData?.profileImage?.secondaryImage}
                alt="profile"
                loading="lazy"
                className={`rounded-full h-[8rem] w-[8rem] md:w-[275px] md:h-[275px] ${
                  mode === 'mobile'
                    ? 'drop-shadow border-white lg:border-[10px] '
                    : 'border-[7px] border-white drop-shadow md:border-[10px]'
                }  `}
              />
            ) : null}
          </div>
        </div>

        <div
          className={`w-[100%] px-[1rem] pb-[3rem] sm:pt-[3rem] md:pt-[2rem] ${
            mode === 'mobile'
              ? 'lg:px-[2rem] lg:pt-[0rem]'
              : 'lg:px-[2rem] xl:px-[0rem] xl:w-[40rem] medium:w-[45rem] largeLaptop:w-[50rem] largeLaptop:pt-[0rem]'
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div
              className={`font-extrabold leading-10 md:mt-0 lg:mt-4 xl:mt-0 ${
                mode === 'mobile' ? 'lg:text-4xl' : 'text-xl md:text-4xl'
              }`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </div>
            <div
              className={`text-xs font-medium md:leading-8 md:text-2xl mt-1 ${
                mode === 'mobile' ? '' : ''
              }`}
            >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </div>
            <div className={` ${mode === 'mobile' ? '' : ''}`}>
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <Spotlightbtn loaderData={loaderData} />
              )}
            </div>

            <div className={` ${mode === 'mobile' ? '' : ''}`}>
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <AdditionalLinksAddOn loaderData={loaderData} />
              )}
            </div>
            <div className={`flex flex-wrap ${mode === 'mobile' ? '' : ''}`}>
              {' '}
              <pre
                className={`max-w-[472px] whitespace-pre-wrap break-normal font-sans text-xs font-normal leading-5 text-gray-500 lg:text-base ${
                  loaderData?.spotlightButton?.toggleSpotlight ? 'mt-1' : 'mt-[1rem]'
                }`}
              >
                {input?.description?.trim()}{' '}
              </pre>{' '}
            </div>

            {loaderData?.testimonial?.testimonialText && (
              <TestimonialAddOn
                loaderData={loaderData}
                testimonialText={loaderData?.testimonial?.testimonialText}
                testimonialBy={loaderData?.testimonial?.testimonialBy}
              />
            )}

            <div className={`w-auto sm:w-[472px] ${mode === 'mobile' ? '' : ''}`}>
              {loaderData?.video?.videoLink && (
                <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
              )}
            </div>
            {/* <div className="flex w-[42rem] items-center justify-center pr-[4rem] md:pr-0 lg:px-0 lg:pl-0"> */}
            <div>
              <PortfolioAddon mode={mode} loaderData={loaderData} />
            </div>

            <div
              className={`mt-5 flex w-[20rem] items-center gap-2 md:w-full flex-col ${
                mode === 'mobile' ? '' : ''
              }`}
            >
              <div className="flex w-max items-center justify-center gap-4 text-xs leading-6 md:text-base md:font-normal">
                {input.company && (
                  <div className="w-[18px] ">
                    <BriefcaseIcon />
                  </div>
                )}
                <div className="w-max">{input.company}</div>
              </div>
              <div className="flex w-max items-center justify-center gap-4 text-xs leading-6 md:text-base md:font-normal">
                {input.education && (
                  <div className="w-[20px] ">
                    <AcademicCapIcon />
                  </div>
                )}
                <div className="w-max">{input.education} </div>
              </div>
            </div>
          </div>
          <footer
            className={`flex w-full items-center justify-center gap-4 md:gap-8 pt-[2rem] ${
              mode === 'mobile' ? '' : ''
            } ${nav ? '' : ''} `}
          >
            {loaderData?.socialMedia?.facebookLink ? (
              <a
                href={`https://${loaderData?.socialMedia?.facebookLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" className="h-auto w-9 md:w-11" />
              </a>
            ) : null}
            {loaderData?.socialMedia?.twitterLink ? (
              <a
                href={`https://${loaderData?.socialMedia?.twitterLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="" className="h-auto w-9 md:w-11" />
              </a>
            ) : null}
            {loaderData?.socialMedia?.youtubeLink ? (
              <a
                href={`https://${loaderData?.socialMedia?.youtubeLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="" className="h-auto w-9 md:w-11" />
              </a>
            ) : null}
          </footer>

          <div className="py-5">
            <PoweredBy />
          </div>
        </div>
      </div>
    </>
  )
}

export default Template10
