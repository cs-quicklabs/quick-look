import React from 'react'

export default function TestimonialAddOn({testimonialText, testimonialBy, loaderData}:any) {
  return (
    <section className="mt-[1rem] overflow-hidden">
            <div className="max-w-7xl mx-auto">

              <div className="">

                <blockquote className="">
                  <div className="text-base leading-5 font-normal text-gray-500">
                    
                      <div className={`text-7xl flex justify-start mb-[-3rem] ${loaderData?.profileInfo?.templateNumber == '4' ? 'text-white lg:text-gray-50' : 'text-black'}`} >
                        &ldquo;
                      </div> 
                      <pre className={`text-center pt-2 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap ${loaderData?.profileInfo?.templateNumber == '4' ? 'text-white lg:text-gray-50' : 'text-gray-500'}`} >
                        {testimonialText}
                      </pre>
                      <br />
                      <div className={`flex justify-end ${loaderData?.profileInfo?.templateNumber == '4' ? 'text-white lg:text-gray-50' : 'text-gray-500'}`} >
                      -- {testimonialBy}
                      </div>
                    
                      <div className={`text-7xl flex justify-end mb-[-3rem] pt-3 ${loaderData?.profileInfo?.templateNumber == '4' ? 'text-white lg:text-gray-50' : 'text-black'}`} >
                        &ldquo;
                      </div>
                  
                  </div>
                
                </blockquote>
              </div>
            </div>
          </section>
  )
}
