import {
  Outlet,
  LiveReload,
  Scripts,
  Links,
  useLocation,
  useLoaderData,
  Meta,
  useRouteError,
  isRouteErrorResponse,
  useNavigation,
} from '@remix-run/react'
import { REACT_APP_DOMAIN } from '~/utils/constants'

import ErrorHandler from './components/PageNotFoundError'
import tailwindcss from './styles/tailwind.css'
import LightGallery from './styles/lightgallery.css'
import HeaderSecondary from './components/Common/Header'
import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
export function links() {
  return [
    { rel: 'stylesheet', href: tailwindcss },
    { rel: 'stylesheet', href: LightGallery },
  ]
}

export async function loader() {
  return json({
    ENV: {
      REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY,
    },
  })
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Quick Bio — Introduction made simple with just one link.' },
    {
      name: 'description',
      content:
        'Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${REACT_APP_DOMAIN}` },
    {
      property: 'og:title',
      content: 'Quick Bio — Introduction made simple with just one link.',
    },
    {
      property: 'og:description',
      content:
        'Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.',
    },
    { property: 'og:image', content: `${REACT_APP_DOMAIN}/build/_assets/Menus-NEYOTUUT.png` },

    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: `${REACT_APP_DOMAIN}/` },
    {
      property: 'twitter:title',
      content: 'Quick Bio — Introduction made simple with just one link.',
    },
    {
      property: 'twitter:description',
      content:
        'Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.',
    },
    {
      property: 'twitter:image',
      content: `${REACT_APP_DOMAIN}/build/_assets/Menus-NEYOTUUT.png`,
    },
    {
      property: 'keywords',
      content: `twitter profile, linkTree, facebook profile, linkedIn profile, one link profile, social profile quickbio, quickbio sign in, quickbio login, quickbio signup`,
    },
  ]
}

export default function App() {
  const data = useLoaderData()

  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
        }}
      />
      <Scripts />
    </Document>
  )
}

function Document({ children }: any) {
  return (
    <html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <head>
        <title>Quick Bio</title>
        <script
          defer
          data-domain="bio.quicklabs.in"
          src="https://plausible.io/js/script.js"
        ></script>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <Links />
      </head>
      <body className="flex h-screen w-screen flex-col antialiased min-h-full">
        {children}
        <LiveReload />
      </body>
    </html>
  )
}
function Layout({ children }: any) {
  const Location = useLocation()
  const navigation = useNavigation()

  return (
    <>
      {Location.pathname.includes('/auth/signup') ||
      Location.pathname.includes('/auth/forgot-password') ||
      Location.pathname.includes('successlogin') ||
      Location.pathname.includes('/auth/password') ||
      Location.pathname.includes('/confirm/password') ||
      Location.pathname.includes('/auth/receive-email') ||
      Location.pathname.includes('/confirm/email') ? (
        <HeaderSecondary />
      ) : (
        <></>
      )}
      <div
        className={`${
          Location.pathname.includes('/forgot-password') ||
          Location.pathname.includes('/successlogin') ||
          Location.pathname.includes('/auth/password') ||
          Location.pathname.includes('/auth/tokenerror') ||
          Location.pathname.includes('/confirm/password') ||
          Location.pathname.includes('/auth/receive-email') ||
          Location.pathname.includes('/confirm/email')
            ? 'overflow-hidden'
            : 'overflow-x-hidden'
        } `}
      >
        {navigation?.state !== 'idle' &&
        (navigation.formAction === '/account/license' || Location.pathname.includes('/license')) ? (
          <div className="fixed top-0 z-50 bg-white items-center h-screen w-full flex justify-center">
            <div className="font-medium text-gray-500 text-lg">
              You're almost there! Heading to the payment page...
            </div>
          </div>
        ) : null}
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error))
    return (
      <div>
        <ErrorHandler name={error?.statusText} status={error?.status} />
      </div>
    )

  return (
    <Document>
      <Layout>
        <div className="bg-red-200">
          {error instanceof Error ? (
            <>
              <h1 className="text-5xl">Error</h1>
              <p className="font-sans text-xl">{error.message}</p>
            </>
          ) : (
            <h1>Unknown Error</h1>
          )}
        </div>
      </Layout>
    </Document>
  )
}
