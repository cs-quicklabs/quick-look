import { db } from '~/database/connection.server'
import bcrypt from 'bcryptjs'

export const validateEmail = async (
  email: string
): Promise<string | undefined> => {
  if (!email) {
    return 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid emaill address'
  }
}

export const validateSignupEmail = async (email: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  })

  if (!email) {
    return 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid email address.'
  } else if (user && user.email === email) {
    return 'Email already exists.'
  }
}

export const validatePassword = async (
  password: string
): Promise<string | undefined> => {
  if (!password) {
    return 'Password is required.'
  } else if (password.length > 18) {
    return 'Password must not be more than 18 characters.'
  } else if (typeof password !== 'string' || password.length < 5) {
    return `Passwords must be at least 5 characters long.`
  }
}

export const checkIncorrectCredentials = async (
  email: string,
  password: string
) => {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  })
  if (!user || !(await bcrypt.compare(password, user.password))) {
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

export const validateFirstName = async (name: any): Promise<string | undefined> => {
  let onlyAlphabetsRegex = /^[a-zA-Z]+$/ 
  let whiteSpaceRegex = /[^-\s]/

  let notContainsSymbols = name.match(onlyAlphabetsRegex)
  let notContainsWhitespace = name.match(whiteSpaceRegex)
  
  if (!name) {
    return 'First Name is required.'
  } else if (!notContainsWhitespace){
    return 'Whitespaces are not allowed.'
  } else if (!isNaN(name)) {
    return `First Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `First Name must be at least 3 characters long.`
  } else if (name.length > 12) {
    return `First Name must be less than 12 characters.`
  } else if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  }
}

export const validateLastName = async (
  name: any
): Promise<string | undefined> => {
  let onlyAlphabetsRegex = /^[a-zA-Z]+$/ 
  let whiteSpaceRegex = /[^-\s]/

  let notContainsSymbols = name.match(onlyAlphabetsRegex)
  let notContainsWhitespace = name.match(whiteSpaceRegex)

  if (!name) {
    return 'Last Name is required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  }else if (!isNaN(name)) {
    return `Last Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `Last Name must be at least 3 characters long.`
  } else if (name.length > 12) {
    return `Last Name must be less than 12 characters.`
  } if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  }
}
export const validateUsername = async (
  username: string
): Promise<String | undefined> => {

  let notcontainSymbolsRegex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let notcontainSymbol = username.match(notcontainSymbolsRegex)
  let lowerCasedUserName = username.toLocaleLowerCase();

  const usernameExist = await db.user.count({
    where: {
      username: lowerCasedUserName,
    },
  })

  if ( !username ) {
    return 'Username is required.'
  } else if (username.length > 20) {
    return 'Id can not be bigger than 20 characters.'
  } else if (!notcontainSymbol) {
    return 'Only alphabets, number and - sign is allowed.'
  } else if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  } else if (username.length < 6 ){
    return 'Profile Id should be atleast 6 charcaters long.'
  }
  return
}

