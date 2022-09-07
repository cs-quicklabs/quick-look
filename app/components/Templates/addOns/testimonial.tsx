import React from 'react'

export default function TestimonialAddOn({testimonialText, testimonialBy}:any) {
  return (
    <section className="mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">

              <div className="">

                <blockquote className="">
                  <div className="text-base leading-5 font-normal text-gray-500">
                    
                      <div className='text-7xl flex justify-start mb-[-3rem] text-black'>
                        &ldquo;
                      </div> 
                      <pre className="text-gray-500 text-center pt-2 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap ">
                        {testimonialText}
                      </pre>
                      <br />
                      <div className='flex justify-end'>
                      -- {testimonialBy}
                      </div>
                    
                      <div className='text-7xl flex justify-end mb-[-3rem] text-black pt-3'>
                        &ldquo;
                      </div>
                  
                  </div>
                
                </blockquote>
              </div>
            </div>
          </section>
  )
}
