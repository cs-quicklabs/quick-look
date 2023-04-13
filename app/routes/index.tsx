import { CallToAction } from '../components/Marketing/CallToAction'
import { Footer } from '../components/Marketing/Footer'
import { Hero } from '../components/Marketing/Hero'
import { PrimaryFeatures } from '../components/Marketing/PrimaryFeatures'
import { SecondaryFeatures } from '../components/Marketing/SecondaryFeatures'
import { Header } from '../components/Marketing/Header'
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { useLoaderData } from '@remix-run/react'
import Pricing from '~/components/Marketing/Pricing'

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
