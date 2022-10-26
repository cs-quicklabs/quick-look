import React from 'react'

export default function TestimonialAddOn({
  testimonialText,
  testimonialBy,
  loaderData,
}: any) {
  return (
    <section className="mt-[1rem] overflow-hidden">
      <div
        className={`mx-auto ${
          loaderData?.profileInfo?.templateNumber == '10'
            ? 'w-[32rem]'
            : 'max-w-7xl '
        }`}
      >
        <div className="">
          <blockquote className="">
            <div className="text-base font-normal leading-5 text-gray-500">
              <div
                className={`mb-[-3rem] flex justify-start text-7xl ${
                  loaderData?.profileInfo?.templateNumber == '4' ||
                  loaderData?.profileInfo?.templateNumber == '9'
                    ? 'text-white lg:text-gray-50'
                    : 'text-black'
                }`}
              >
                &ldquo;
              </div>
              <pre
                className={`flex whitespace-pre-wrap pt-2 text-center font-sans text-base font-normal leading-5 ${
                  loaderData?.profileInfo?.templateNumber == '4' ||
                  loaderData?.profileInfo?.templateNumber == '9'
                    ? 'text-white lg:text-gray-50'
                    : 'text-gray-500'
                }`}
              >
                {testimonialText}
              </pre>
              <br />
              <div
                className={`flex justify-end ${
                  loaderData?.profileInfo?.templateNumber == '4' ||
                  loaderData?.profileInfo?.templateNumber == '9'
                    ? 'text-white lg:text-gray-50'
                    : 'text-gray-500'
                }`}
              >
                -- {testimonialBy}
              </div>

              <div
                className={`mb-[-3rem] flex justify-end pt-3 text-7xl ${
                  loaderData?.profileInfo?.templateNumber == '4' ||
                  loaderData?.profileInfo?.templateNumber == '9'
                    ? 'text-white lg:text-gray-50'
                    : 'text-black'
                }`}
              >
                &ldquo;
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
