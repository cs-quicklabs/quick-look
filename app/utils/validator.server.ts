import { db } from '~/database/connection.server'

export const validateEmail = async (
  email: string
): Promise<string | undefined> => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (!email.length || !validRegex.test(email)) {
    return 'Please enter a valid email address'
  }
}

export const validatePassword = async (
  password: string
): Promise<string | undefined> => {
  if (password.length < 4) {
    return 'Please enter a password that is at least 5 characters long'
  }
}

export const validateName = async (
  name: string
): Promise<string | undefined> => {
  if (!name.length) return `Please enter a value`
}

export const validateUsername = async (
  username: string
): Promise<String | undefined> => {
  const usernameExist = await db.user.count({
    where: {
      username,
    },
  })

  if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  }
  return
}
