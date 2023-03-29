import { CheckCircleIcon } from '@heroicons/react/outline'
import { ButtonLink } from './Button'

const includedFeatures = [
  'Your personal Portfolio',
  'Unmatched features',
  'Customisation',
  'Link your social media',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-blue-600">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-3xl space-y-2 text-center lg:max-w-none">
          <h2 className="text-3xl font-semibold leading-6 text-gray-300">
            Pricing
          </h2>

          <p className="text-xl text-gray-300">
            Your Portfolio is your internet identitiy. Quicklook cost is not
            more than a cup of coffee.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-blue-600" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Pay Once, Own it Forever
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  {/* We offer unmatched feature for a unmatched price . You can
                  always signup for free and buy the memebrship later for the
                  premium features. */}
                  Signup today and get 14 days free trial. No credit card
                  required. If you like it, just do own time payment and own it
                  forever.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">
                  Simple pricing for everyone
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>$19</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                    USD
                  </span>
                </div>

                <div className="mt-6">
                  <ButtonLink
                    href="/auth/signup"
                    color="blue"
                    className={undefined}
                  >
                    <span className="p-[0.3rem]">Get Free Access</span>
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
