import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  type connectAppSignUpType,
  validateConnectAppSignUpRequest,
  validateSecretKeyAndAppId,
  connectAppSignUp,
} from '~/services/auth.service.server'

export const action: ActionFunction = async ({ request }) => {
  if (request.method.toLowerCase() !== 'post')
    throw json(
      {
        error: 'Bad Request',
      },
      { status: 400 }
    )

  const secretKey = request.headers.get('secret_key') || ''
  const appId = request.headers.get('app_id') || ''
  await validateSecretKeyAndAppId({ secretKey, appId })

  const payload = await request
    .json()
    .then((v) => v as connectAppSignUpType)
    .catch(() => {
      throw json(
        {
          error: 'Invalid request. Expected payload is missing or empty.',
        },
        { status: 400 }
      )
    })

  const hasError = await validateConnectAppSignUpRequest(payload)
  if (hasError)
    throw json(
      {
        errors: hasError,
      },
      { status: 400 }
    )

  await connectAppSignUp(payload, appId)

  return json(
    {
      success: true,
    },
    { status: 201 }
  )
}

export const loader: LoaderFunction = async () => {
  throw json(
    {
      error: 'Bad Request',
    },
    { status: 400 }
  )
}
