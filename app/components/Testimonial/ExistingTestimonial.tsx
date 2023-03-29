import { useState } from 'react'
import fbIcon from '../../../assets/images/fb1.png'
import { Testimonials } from '../Testimonials'
import DeleteTestimonial from './DeleteTestimonial'
import EditTestimonial from './EditTestimonial'

export default function ExistingTestimonial({
  setShowCreateTestimonial,
  testimonialText,
  testimonialBy,
  setTestimonialBy,
  setTestimonialText,
  setShowTestimonial,
  loaderData,
  mode,
  setmode,
}: any) {
  const testimonial = [
    {
      name: loaderData?.testimonial?.testimonialBy,
      description: loaderData?.testimonial?.testimonialText,
    },
  ]

  const [showEditTestimonial, setShowEditTestimonial] = useState(false)

  const toggleEditTestimonial = (person: {
    name: string
    description: string
  }) => {
    setShowEditTestimonial(!showEditTestimonial)
  }

  const [openDeleteTestimonial, setOpenDeleteTestimonial] = useState(false)

  return (
    <div className="pl-3 pr-3.5">
      <ul>
        {testimonial.map((person) => (
          <li key={person.name} className="">
            {person.description ? (
              <div
                className={`flex justify-between lg:items-center border-b border-gray-200 ${
                  mode === 'mobile'
                    ? 'flex-col xl:flex-row items-center'
                    : 'flex-col lg:flex-row'
                }`}
              >
                <div className="py-4 flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="w-[15rem] text-sm text-gray-500 text-ellipsis overflow-hidden">
                      {person.description.length > 35
                        ? person.description?.slice(0, 35) + '...'
                        : person.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start mb-2 lg:mb-0 text-gray-400 ${
                    mode === 'mobile'
                      ? 'mr-[6.5rem] xl:mr-0 flex-row xl:flex-col'
                      : 'flex-row lg:flex-col lg:ml-[3.2rem] ml-[0.8rem] py-0 lg:py-4'
                  }`}
                >
                  <button
                    data-cy="editTestimonialButton"
                    className="hover:text-indigo-600 text-[14px]"
                    onClick={(e: any) => {
                      e.preventDefault()
                      toggleEditTestimonial(person)
                    }}
                  >
                    Edit
                  </button>
                  {showEditTestimonial && (
                    <EditTestimonial
                      testimonialBy={testimonialBy}
                      testimonialText={testimonialText}
                      setTestimonialBy={setTestimonialBy}
                      setTestimonialText={setTestimonialText}
                      setShowTestimonial={setShowTestimonial}
                      loaderData={loaderData}
                      setShowEditTestimonial={setShowEditTestimonial}
                      mode={mode}
                      setmode={setmode}
                    />
                  )}
                  <button
                    data-cy="deleteTestimonialButton"
                    onClick={(e: any) => {
                      e.preventDefault()
                      setOpenDeleteTestimonial(true)
                    }}
                    className={`hover:text-red-600 text-[14px] ${
                      mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'
                    }`}
                  >
                    Delete
                  </button>
                  <DeleteTestimonial
                    setShowCreateTestimonial={setShowCreateTestimonial}
                    setShowTestimonial={setShowTestimonial}
                    setTestimonialBy={setTestimonialBy}
                    setTestimonialText={setTestimonialText}
                    openDeleteTestimonial={openDeleteTestimonial}
                    onClose={() => setOpenDeleteTestimonial(false)}
                  />
                </div>
              </div>
            ) : (
              <span></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
