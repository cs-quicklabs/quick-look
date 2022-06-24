import { hydrate } from 'react-dom'
import { RemixBrowser } from '@remix-run/react'

if (typeof document === 'undefined') {
  hydrate(<RemixBrowser />, document)
}
