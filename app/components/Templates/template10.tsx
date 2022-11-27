import React from 'react'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
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

function Template10({
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
  mode,
}: any) {
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
              src={
                primaryRestore
                  ? DefaultCoverPicture
                  : loaderData?.profileImage?.primaryImage
              }
              className={`w-[100%] object-cover ${
                mode === 'mobile' ? 'h-[36vh]' : 'h-[20vh] md:h-[40vh]'
              }`}
              alt=""
            />
          ) : null}
        </div>

      <div className='xl:flex xl:flex-col xl:items-center '>
      <div
        className={`flex flex-col ${
          mode === 'mobile' ? '' : ''
        }  ${mode === 'mobile' ? 'h-[25vh] largeLaptop:h-[20vh]' : 'h-[10vh] md:h-[20vh]'}`}
      >
       
        <div
          className={`relative flex justify-center  ${
            primaryRestore || loaderData?.profileImage?.primaryImage
              ? ` ${
                  mode === 'mobile'
                    ? 'bottom-[5rem] right-0'
                    : 'bottom-[4rem] md:bottom-[9rem]'
                }`
              : 'bottom-[-11rem]'
          } ${mode === 'mobile' ? 'bottom-[9rem]' : ''}`}
        >
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
            <img
              src={
                secondaryRestore
                  ? defaultimg
                  : loaderData?.profileImage?.secondaryImage
              }
              alt=""
              className={`rounded-full ${
                mode === 'mobile'
                  ? 'drop-shadow border-white lg:h-[18rem] lg:w-[18rem] lg:border-[10px] '
                  : 'h-[8rem] w-[8rem] border-[7px] border-white drop-shadow sm:h-[11rem] sm:w-[11rem] md:h-[18rem] md:w-[18rem] md:border-[10px]'
              }  `}
            />
          ) : null}
        </div>
      </div>

      <div className={`w-[100%] px-[1rem] pb-[3rem] sm:pt-[3rem] md:pt-[2rem] ${
              mode === 'mobile' ? 'lg:px-[2rem] lg:pt-[0rem]' : 'lg:px-[2rem] xl:px-[0rem] xl:w-[40rem] medium:w-[45rem] largeLaptop:w-[50rem] largeLaptop:pt-[0rem]' }`} >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`font-extrabold leading-10 md:mt-0 lg:mt-4 xl:mt-0 ${
              mode === 'mobile'
                ? 'lg:text-4xl'
                : 'text-xl md:text-4xl'
            }`}
          >
            {loaderData?.firstname} {loaderData?.lastname}
          </div>
          <div
            className={`text-xs font-medium leading-8 md:text-2xl ${
              mode === 'mobile' ? '' : ''
            }`}
          >
            {input.occupation} {input.location && input.occupation ? `in` : ''}{' '}
            {input.location}
          </div>
          <div
            className={` ${
              mode === 'mobile' ? '' : ''
            }`}
          >
            {loaderData?.spotlightButton?.toggleSpotlight && (
              <Spotlightbtn loaderData={loaderData} />
            )}
          </div>

          <div
            className={` ${
              mode === 'mobile' ? '' : ''
            }`}
          >
            {loaderData?.spotlightButton?.toggleSpotlight && (
              <AdditionalLinksAddOn loaderData={loaderData} />
            )}
          </div>
          <div
            className={`flex flex-wrap ${
              mode === 'mobile' ? '' : ''
            }`}
          >
            {' '}
            <pre className="whitespace-pre-wrap break-normal font-sans text-xs font-normal leading-5 text-gray-500 lg:text-base">
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

          <div
            className={` ${mode === 'mobile' ? '' : ''}`}
          >
            {loaderData?.video?.videoLink && (
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
            )}
          </div>
          {/* <div className="flex w-[42rem] items-center justify-center pr-[4rem] md:pr-0 lg:px-0 lg:pl-0"> */}
          <div>
            <PortfolioAddon mode={mode} loaderData={loaderData} />
          </div>

          <div
            className={`mt-5 flex w-[20rem] items-center gap-8 md:w-full flex-col ${
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
            >
              <img src={facebook} alt="" className="h-auto w-9 md:w-11" />
            </a>
          ) : null}
          {loaderData?.socialMedia?.twitterLink ? (
            <a
              href={`https://${loaderData?.socialMedia?.twitterLink}`}
              target="_blank"
            >
              <img src={twitter} alt="" className="h-auto w-9 md:w-11" />
            </a>
          ) : null}
          {loaderData?.socialMedia?.youtubeLink ? (
            <a
              href={`https://${loaderData?.socialMedia?.youtubeLink}`}
              target="_blank"
            >
              <img src={youtube} alt="" className="h-auto w-9 md:w-11" />
            </a>
          ) : null}
        </footer>
      </div>
      </div>
    </>
  )
}

export default Template10
