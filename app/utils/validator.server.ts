import { db } from '~/database/connection.server'

export const validateEmail = async (
  email: string
): Promise<string | undefined> => {
  if (!email) {
    return 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid emaill address'
  }
}

export const validatePassword = async (
  password: string
): Promise<string | undefined> => {
  if (!password) {
    return 'Password is required.'
  } else if (typeof password !== 'string' || password.length < 5) {
    return `Passwords must be at least 5 characters long.`
  }
}

export const validateComfirmPassword = async (
  confirmPassword: string,
  password: string
): Promise<string | undefined> => {
  if (!confirmPassword) {
    return 'Confirm password is required.'
  } else if (password !== confirmPassword) {
    return 'Password does not match.'
  }
}

export const validateName = async (
  name: string
): Promise<string | undefined> => {
  if (!name) {
    return 'Name is required.'
  } else if (typeof name !== 'string' || name.length < 3) {
    return `Name must be at least 3 characters long.`
  }
}

export const validateUsername = async (
  username: string
): Promise<String | undefined> => {
  const usernameExist = await db.user.count({
    where: {
      username,
    },
  })
  if (!username) {
    return 'Username is required.'
  } else if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  }
  return
}
