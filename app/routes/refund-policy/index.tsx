import { Link } from "react-router-dom";
import { SearchIcon } from '@heroicons/react/solid';
import { Footer } from '../../components/Footer';
import { CallToAction } from "~/components/CallToAction";

export default function Refund() {

  return (
    <>
      <div id="__next" data-reactroot="">
              <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 xl:flex min-h-full py-10">
                  <div className="flex-1 bg-white xl:flex max-content top-16">
                      <div className="b xl:flex-shrink-0 xl:w-64 bg-white h-full">
                          <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0 ">
                              <div className="h-full relative ">
                                  <div className="absolute inset-0 border-gray-200 rounded-lg">
                                      <div className="">
																					<div className="flex-1 flex justify-center lg:justify-end">
																						<div className="max-w-lg w-full lg:max-w-xs">
																							<label htmlFor="search" className="sr-only">
																								Search
																							</label>
																							<div className="relative text-gray-400 focus-within:text-gray-600">
																								<input
																									id="search"
																									className="block w-full bg-white py-2 pl-2 pr-3 border border-solid border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white focus:border-white sm:text-sm"
																									placeholder="Search"
																									type="text"
																									name="search"
																								/>
																								<button type="submit" className="absolute inset-y-0 right-2 pl-3 flex items-center">
																									<SearchIcon className="h-5 w-5" aria-hidden="true" />
																								</button>
																							</div>
																						</div>
																					</div>
                                          <h1 className="text-base font-extrabold mt-2 sm:tracking-tight ">
                                              <span className="text-gray-400">CATEGORIES</span>
                                          </h1>
																					<ul className="list-none list-inside ml-5 mt-2 mb-5 text-sm font-semibold text-gray-500">
																						<li>
																							<Link to='#'>
																								Free Pages
																							</Link>
																						</li>
																						<li>
																						<Link to='#'>
																							Pro Pages
																						</Link>
																						</li>
																						<li>
																						<Link to='#'>
																							Domains
																						</Link>
																						</li>
																					</ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bg-white lg:min-w-0 lg:flex-1">
                          <div className=" py-6 px-4 sm:px-6 lg:px-8 ">
                              <div className=" h-full ">
                                  <div className="relative inset-0 border-gray-200 rounded-lg">
																		<div className="flex justify-between w-2/3">
                                      <h1 className="text-4xl font-extrabold py-4 sm:text-5xl sm:tracking-tight">
                                        <span className="text-gray-900">Refund Policy</span>
																			</h1>
																			<div className="flex items-center">
																			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
																				<path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd" />
																			</svg>
																			</div>
																		</div>
                                      <h2 className="text-lg font-semibold text-gray-800 mt-6 ml-2">Last updated: 29/06/2022                                     
                                      </h2>
                                      <p className="mt-2 text-base text-gray-800"> You may request a refund within 3 days of your annual Pro purchase or Pro renewal.</p>
                                      <p className="mt-5 text-base text-gray-800">If your request is received after that 3-day window, the charge is non-refundable. </p>
                                      <ul className="list-disc list-inside ml-5 mt-5 mb-5 text-base text-gray-800">
                                        <li>
                                          Email address associated with your quicklook.me page
                                        </li>
																				<li>
																					Link to your quicklook.me page (quicklook.me/yourusername)
                                        </li>
																				<li>
																					Date of purchase or renewal (if you have a screenshot of the receipt, even better!)
                                        </li>
																				<li>
																					The word "REFUND" in the body of your email
                                        </li>
                                      </ul>
                                      <p className="mt-2 text-base text-gray-800">If you are eligible for a refund, your request will be evaluated and granted within 30 days. </p>
                                      <h2 className="text-2xl font-semibold text-gray-800 mt-6">             
                                      RELATED ARTICLES
                                      </h2>
                                      <p className="flex mt-2 text-base text-gray-800">
																			<div className="flex items-center">
																			<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
																				<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
																			</svg>
																			</div>
																			<Link to="#" className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
																				How do I delete my page?
																			</Link>
																			</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
							<div>
								<CallToAction />
							</div>
              <div className='w-full max-w-container px-2 sm:px-6 lg:px-8'>
            		<Footer />
              </div>
      </div>
    </>
  )
}
