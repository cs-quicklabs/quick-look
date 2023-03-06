import { CallToAction } from '../components/CallToAction'
import { Faqs } from '../components/Faqs'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { PrimaryFeatures } from '../components/PrimaryFeatures'
import { SecondaryFeatures } from '../components/SecondaryFeatures'
import { Testimonials } from '../components/Testimonials'
import { Header } from '../components/Header'
import { LoaderFunction, redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { useLoaderData, useLocation } from '@remix-run/react'
import Pricing from '~/components/Pricing'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  if (user) {
    return redirect('/account')
  }

  return user
}

export default function Home() {
  const loaderData = useLoaderData()
  const isLoggedin = loaderData?.id

  return (
    <>
      <head>
        <meta name="title" content="Introduction made simple with just one link."/>
        <meta name="description" content="Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.quicklook.me/"/>
        <meta property="og:title" content="Introduction made simple with just one link."/>
        <meta property="og:description" content="Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together."/>
        
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.quicklook.me/"/>
        <meta property="twitter:title" content="Introduction made simple with just one link."/>
        <meta property="twitter:description" content="Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together."/>
      </head>
      <Header isloggedin={isLoggedin} />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Faqs /> */}
      <CallToAction />
      <Footer />
    </>
  )
}
