import string from 'yup/lib/string'
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

export const validateSignupEmail = async(email: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  })
  if (!email) {
    return 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid emaill address.'
  } else if(user && email) {
    return 'Email already exists.'
  }
}

export const validatePassword = async (
  password: string
): Promise<string | undefined> => {
  if (!password) {
    return 'Password is required.'
  } else if (password.length > 18) {
    return 'Password can not be bigger than 18 characters.'
  } else if (typeof password !== 'string' || password.length < 5) {
    return `Passwords must be at least 5 characters long.`
  }
}

export const checkIncorrectCredentials = async (email: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  })
  if (email && !user) {
    return `Either email or password you entered was not correct. Please try again.`
  }
  return undefined
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

export const validateName = async (name: any): Promise<string | undefined> => {
  if (!name) {
    return 'Name is required.'
  } else if (!isNaN(name)) {
    return `FirstName should contain alphabets only.`
  } else if (name.length < 3) {
    return `Name must be at least 3 characters long.`
  }
}

export const validateLastName = async (
  name: any
): Promise<string | undefined> => {
  if (!name) {
    return 'Last Name is required.'
  } else if (!isNaN(name)) {
    return `Last Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `Last Name must be at least 3 characters long.`
  }
}
export const validateUsername = async (
  username: string
): Promise<String | undefined> => {
  var regex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  var result = username.match(regex)
  const parsedUsername = username.substring(13);
  const usernameExist = await db.user.count({
    where: {
      username,
    },
  })
  if ( !parsedUsername ) {
    return 'Username is required.'
  } else if ( parsedUsername.length > 20 ) {
    return 'Id can not be bigger than 20 characters.'
  } else if (!result) {
    return 'Only alphabets, number and - sign is allowed.'
  } else if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  }
  return
}
