import type { User } from '@prisma/client'
import type { LoaderFunction } from '@remix-run/node'
import { getUsers } from '~/services/auth.service.server'
import { REACT_APP_DOMAIN } from '~/utils/constants'

export const loader: LoaderFunction = async () => {
  const users = await getUsers()

  return new Response(renderXML(users || []), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'x-content-type-options': 'nosniff',
      'Cache-Control': `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  })
}

const renderXML = (users: User[]) => {
  const url = REACT_APP_DOMAIN
  const date = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
        <url>
            <loc>${url}/</loc>
            <lastmod>${date}</lastmod>
            <priority>1.00</priority>
        </url>

        <url>
            <loc>${url}/auth/signup</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
        </url>

        <url>
            <loc>${url}/general/terms</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
        </url>

        <url>
            <loc>${url}/general/privacy</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
        </url>

        <url>
            <loc>${url}/general/refund-policy</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
        </url>

        ${users
          .map(({ username }) => {
            return `
            <url>
                <loc>${`${url}/${username}`}</loc>
                <lastmod>${date}</lastmod>
                <priority>1</priority>
            </url>`
          })
          .join('\n')}

    </urlset>`

  return sitemap
}
