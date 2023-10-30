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
        message: 'Bad Request',
        success: false,
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
          message: 'Invalid request. Expected payload is missing or empty.',
          success: false,
        },
        { status: 400 }
      )
    })

  const hasError = await validateConnectAppSignUpRequest(payload)
  if (hasError)
    throw json(
      {
        message: Object.entries(hasError)
          .map(([key, v]) => (v ? key + ' - ' + v.replace('.', '') : null))
          .filter(Boolean)
          .join(', '),
        success: false,
      },
      { status: 400 }
    )

  await connectAppSignUp(payload, appId)

  return json(
    {
      message: 'User profile created successfully.',
      success: true,
    },
    { status: 201 }
  )
}

export const loader: LoaderFunction = async () => {
  throw json(
    {
      message: 'Bad Request',
      success: false,
    },
    { status: 400 }
  )
}
