import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
        <div>
            <div className="bg-white">
                <div className="relative overflow-hidden">
                    <main>
                        <div className="bg-white pt-10 sm:pt-16 lg:overflow-hidden lg:pt-16 lg:pb-14">
                            <div className="mx-auto max-w-7xl px-4 text-center sm:px-8">
                                <h1 className="mt-4 mb-4 text-4xl font-extrabold tracking-tight text-gray-600 sm:mt-5 sm:text-6xl xl:text-6xl">
                                    <span className="inline-block">Make your</span> {" "}
                                    <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-800 bg-clip-text text-transparent">Portfolio</span> {" "}
                                    <span className="inline-block">interesting.</span>
                                </h1>
                                <p className="text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
                                    <span className="inline-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</span>
                                </p>
                                <div className="my-12 md:mt-20">
                                    <img className="w-full rounded-lg shadow-xl" src="https://about.me/s3/h/z/aboutme-desktop.d642444f.png" alt="Image is missing"/>
                                </div>
                            </div>
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="relative z-10 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                        <div className="lg:py-24">
                                            <p className="text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut deserunt quibusdam fuga architecto nam mollitia dolorum. Error quo, eaque, nostrum veritatis recusandae adipisci dolorem ratione a laborum quasi enim!</p>
                                            <div className="jutsify-center flex items-center">
                                                <div className="my-4 mx-auto grid grid-cols-1 gap-x-5 gap-y-2 sm:mx-0 sm:grid-cols-2">
                                                    <div className="flex items-center justify-start space-x-1 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-gray-600">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        <span>Lorem ipsum</span>
                                                    </div>
                                                    <div className="flex items-center justify-start space-x-1 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-purple-400">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        <span>Lorem ipsum</span>
                                                    </div>
                                                    <div className="flex items-center justify-start space-x-1 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-purple-400">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        <span>Lorem ipsum</span>
                                                    </div>
                                                    <div className="flex items-center justify-start space-x-1 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-purple-400">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        <span>Lorem ipsum</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="sm:flex">
                                                    <div className="mt-3 flex items-center justify-center space-x-2 sm:mt-0">
                                                        <Link to="/beta" className="block w-full rounded-md bg-gray-800 py-3 px-4 text-center font-medium text-white shadow hover:bg-gray-600">Get your free page</Link>
                                                    </div>
                                                    <p className="ml-3 mt-3 text-sm text-gray-600 sm:mt-4">Lorem ipsum</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="sm:flex">
                                                    <div className="mt-3 flex items-center justify-center space-x-2 sm:mt-0">
                                                        <Link to="/beta" className="block w-full rounded-md bg-gray-800 py-3 px-4 text-center font-medium text-white shadow hover:bg-gray-600">Features</Link>
                                                    </div>
                                                    <p className="ml-3 mt-3 text-sm text-gray-600 sm:mt-4">Lorem ipsum.</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="sm:flex">
                                                    <div className="mt-3 flex items-center justify-center space-x-2 sm:mt-0">
                                                        <Link to="/pricing" className="block w-full rounded-md bg-gray-800 py-3 px-4 text-center font-medium text-white shadow hover:bg-gray-600">Pricing – $20</Link>
                                                    </div>
                                                    <p className="ml-3 mt-3 text-sm text-gray-600 sm:mt-4">
                                                    Lorem ipsum {" "}
                                                        <span className="bg-gray-800 to-cyan-600 px-2 font-semibold text-white">SALE</span>{" "}
                                                        (Lorem ipsum: $29)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="glowing mx-auto flex max-w-md items-center justify-center px-2 py-20 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                            <div className="relative z-20">
                                                <div className="relative cursor-pointer">
                                                    <img className="translate-x-6 skew-y-1 aspect-[1192/1404] absolute top-5 -left-5 with-loading-placeholder z-10 mx-auto transform rounded-xl border border-gray-500 shadow transition-all hover:scale-105 hover:ease-[cubic-bezier(.4,0,.2,1)]" width="400" src="https://about.me/s3/h/z/google_analytics.6c305716.jpg" alt="image 1"/>
                                                    <img className="translate-x-5 skew-y-1 aspect-[1192/1404] with-loading-placeholder relative mx-auto transform rounded-xl border border-gray-500 shadow transition-all hover:z-20 hover:scale-105 hover:ease-[cubic-bezier(.4,0,.2,1)]" width="400" src="https://about.me/s3/h/z/professional-desktop.46306085.jpg" alt="image 2"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="pt-12 sm:pt-16 lg:pt-24">
                    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
                            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">The right price for you, whoever you are</p>
                            <p className="text-xl text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                    <div className="relative">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                        <div>
                                            <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">Standard</h3>
                                        </div>
                                        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                                            $49
                                            <span className="ml-1 text-2xl font-medium text-gray-500"> /mo </span>
                                        </div>
                                        <p className="mt-5 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                                        <ul role="list" className="space-y-4">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">    
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Pariatur quod similique</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Sapiente libero doloribus modi nostrum</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Vel ipsa esse repudiandae excepturi</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Itaque cupiditate adipisci quibusdam</p>
                                            </li>
                                        </ul>
                                        <div className="rounded-md shadow">
                                            <Link to="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600" aria-describedby="tier-standard"> Get started </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                        <div>
                                            <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">Enterprise</h3>
                                        </div>
                                        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                                            $79
                                            <span className="ml-1 text-2xl font-medium text-gray-500"> /mo </span>
                                        </div>
                                        <p className="mt-5 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                                        <ul role="list" className="space-y-4">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Pariatur quod similique</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">  
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Sapiente libero doloribus modi nostrum</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Vel ipsa esse repudiandae excepturi</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0">  
                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">Itaque cupiditate adipisci quibusdam</p>
                                            </li>
                                        </ul>
                                        <div className="rounded-md shadow">
                                            <Link to="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600" aria-describedby="tier-standard"> Get started </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                        <div className="max-w-md mx-auto lg:max-w-5xl">
                            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                                <div className="flex-1">
                                    <div>
                                        <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">Discounted</h3>
                                    </div>
                                    <div className="mt-4 text-lg text-gray-600">Get full access to all of standard license features for solo projects that make less than $20k gross revenue for <span className="font-semibold text-gray-900">$29</span>.
                                    </div>
                                </div>
                                <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                                    <Link to="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"> Buy Discounted License </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)}
