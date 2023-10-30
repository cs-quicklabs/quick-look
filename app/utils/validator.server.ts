import { db } from '~/database/connection.server'
import bcrypt from 'bcryptjs'

export const validateEmail = async (email: string): Promise<string | undefined> => {
  if (!email) {
    return 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid emaill address'
  }
}

export const validateSignupEmail = async (email: string) => {
  let lowerCasedEmail = email.toLocaleLowerCase()
  let nosymbolregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  let notContainsSymbols = email.match(nosymbolregex)
  const user = await db.user.findFirst({
    where: {
      email: lowerCasedEmail,
    },
  })

  if (!email) {
    return 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid email address.'
  } else if (user && user.email === lowerCasedEmail) {
    return 'Email already exists.'
  } else if (!notContainsSymbols) {
    return 'Invalid email address.'
  }
}

export const updateValidatePassword = async (
  password: string,
  user?: any
): Promise<string | undefined> => {
  let whiteSpaceRegex = /^\S*$/
  let notContainsWhitespace = password.match(whiteSpaceRegex)
  const isLastPasswordSame = await bcrypt.compare(password, user?.password as string)
  if (!password) {
    return 'New Password is required.'
  } else if (password.length > 18) {
    return 'Password must not be more than 18 characters.'
  } else if (typeof password !== 'string' || password.length < 5) {
    return `Passwords must be at least 5 characters long.`
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (isLastPasswordSame) {
    return 'New password cannot be same as last password.'
  }
}

export const validatePassword = async (password: string): Promise<string | undefined> => {
  let whiteSpaceRegex = /^\S*$/
  let notContainsWhitespace = password.match(whiteSpaceRegex)

  if (!password) {
    return 'Password is required.'
  } else if (password.length > 18) {
    return 'Password must not be more than 18 characters.'
  } else if (typeof password !== 'string' || password.length < 5) {
    return `Passwords must be at least 5 characters long.`
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  }
}

export const checkIncorrectCredentials = async (email: string, password: string) => {
  let lowerCasedEmail = email.toLocaleLowerCase()
  const user = await db.user.findFirst({
    where: {
      email: lowerCasedEmail,
    },
    include: {
      profile: true,
    },
  })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return `Either email or password you entered was not correct. Please try again.`
  }

  if (user?.profile?.isBlocked) return 'Your profile is blocked, Please contact admin to continue.'

  return undefined
}

export const validateComfirmPassword = async (
  password: string,
  confirmPassword: string
): Promise<string | undefined> => {
  if (confirmPassword.length == 0) {
    return 'Confirm password is required.'
  } else if (password.length > 0) {
    if (confirmPassword.length == 0) {
      return 'Confirm password is required.'
    } else if (confirmPassword.length !== 0 && password !== confirmPassword) {
      return 'Password does not match.'
    }
  }
}

export const validateConnectAppName = (appName: string) => {
  const isValidAppName = /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(appName.trim())
  let appNameError = ''

  if (!appName.trim()) appNameError = 'App Name is Required'
  else if (appName.trim().length > 20) appNameError = 'App Name must be less than 20 characters.'
  else if (!isValidAppName)
    appNameError = 'Only letters, numbers and single space between words are allowed.'

  return appNameError
}

export const validateFirstName = async (name: any): Promise<string | undefined> => {
  let onlyAlphabetsRegex = /^[a-z|A-Z]+(?: [a-z|A-Z ]+)*$/
  let notContainsSymbols = name.match(onlyAlphabetsRegex)
  let firstAndMiddleNameRegex = /^(?!.{32,})(\w+\s+\w+ ?)$/
  let singlewhitespace = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/
  let validsinglewhitespace = name.match(singlewhitespace)

  let validName = name.match(firstAndMiddleNameRegex)
  let whiteSpaceRegex = /^\S*$/
  let notContainsWhitespace = name.match(whiteSpaceRegex)

  if (!name) {
    return 'First Name is required.'
  } else if (!isNaN(name)) {
    return `First Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `First Name must be at least 3 characters long.`
  } else if (name.length > 18) {
    return `First Name must be less than 18 characters.`
  } else if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  } else if (!validsinglewhitespace) {
    return 'Single whitespace allowed.'
  } else if (!notContainsWhitespace) {
    if (!validName) {
      return 'Single whitespace allowed.'
    }
  }
}

export const validateLastName = async (name: any): Promise<string | undefined> => {
  let onlyAlphabetsRegex = /^[a-zA-Z]+$/
  let whiteSpaceRegex = /^\S*$/

  let notContainsSymbols = name.match(onlyAlphabetsRegex)
  let notContainsWhitespace = name.match(whiteSpaceRegex)

  if (!name) {
    return 'Last Name is required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!isNaN(name)) {
    return `Last Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `Last Name must be at least 3 characters long.`
  } else if (name.length > 12) {
    return `Last Name must be less than 12 characters.`
  }
  if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  }
}
export const validateUsername = async (
  username: string,
  forUpdate?: Boolean
): Promise<String | undefined> => {
  let whiteSpaceRegex = /^\S*$/
  let notcontainSymbolsRegex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let notOnlyNumberRegex = /(?!^\d+$)^.+$/

  let notOnlyNumber = username.match(notOnlyNumberRegex)
  let notContainsWhitespace = username.match(whiteSpaceRegex)
  let notcontainSymbol = username.match(notcontainSymbolsRegex)
  let lowerCasedUserName = username.toLocaleLowerCase()

  const usernameExist = await db.user.count({
    where: {
      username: lowerCasedUserName,
    },
  })

  if (!username) {
    return 'Profile Id is required.'
  } else if (username.length > 20) {
    return 'Profile Id can not be bigger than 20 characters.'
  } else if (!notcontainSymbol) {
    return 'Only alphabets, number and - sign is allowed.'
  } else if (username.length < 6) {
    return 'Profile Id should be atleast 6 charcaters long.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!notOnlyNumber) {
    return 'Only Numbers are not allowed. '
  } else if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  }
}
export const validateUserName = async (username: string): Promise<String | undefined> => {
  let whiteSpaceRegex = /^\S*$/
  let notContainSymbolsRegex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let notOnlyNumberRegex = /(?!^\d+$)^.+$/

  let notOnlyNumber = username.match(notOnlyNumberRegex)
  let notContainsWhitespace = username.match(whiteSpaceRegex)
  let notContainSymbol = username.match(notContainSymbolsRegex)
  let lowerCasedUserName = username.toLocaleLowerCase()

  const alreadyExist = await db.user.count({
    where: {
      username: lowerCasedUserName,
    },
  })

  if (!username) {
    return 'userName is required.'
  } else if (username.length > 20) {
    return 'userName can not be greater than 20 characters.'
  } else if (!notContainSymbol) {
    return 'Only alphabets, numbers and - sign is allowed.'
  } else if (username.length < 6) {
    return 'userName should be atleast 6 characters long.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!notOnlyNumber) {
    return 'Only Numbers are not allowed. '
  } else if (alreadyExist) {
    return 'userName has already been taken. Please choose another.'
  }
}

export async function validateOldPassword(user: any, newPassword: string, oldpassword: string) {
  if (!oldpassword) {
    return 'Old password is required.'
  }
  const isoldPasswordMatch = await bcrypt.compare(oldpassword, user?.password as string)

  if (!isoldPasswordMatch) {
    return 'Old password does not match.'
  }
}

export async function validateUpdateUsername(username: string, user: any) {
  let whiteSpaceRegex = /^\S*$/
  let notcontainSymbolsRegex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let notOnlyNumberRegex = /(?!^\d+$)^.+$/

  let notOnlyNumber = username.match(notOnlyNumberRegex)
  let notContainsWhitespace = username.match(whiteSpaceRegex)
  let notcontainSymbol = username.match(notcontainSymbolsRegex)
  let lowerCasedUserName = username.toLocaleLowerCase()

  let usernameExist = await db.user.count({
    where: {
      username: lowerCasedUserName,
      NOT: {
        id: user.id,
      },
    },
  })

  if (!username) {
    return 'Profile Id is required.'
  } else if (username.length > 20) {
    return 'Profile Id can not be bigger than 20 characters.'
  } else if (!notcontainSymbol) {
    return 'Only alphabets, number and - sign is allowed.'
  } else if (username.length < 6) {
    return 'Profile Id should be atleast 6 charcaters long.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!notOnlyNumber) {
    return 'Only Numbers are not allowed. '
  } else if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  }
}

export async function validateFacebookUrl(url: string) {
  let whiteSpaceRegex = /^\S*$/
  let fbRegEx = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i
  let notContainsWhitespace = url.match(whiteSpaceRegex)

  let matchesFbRegex = url.match(fbRegEx)
  if (!url) {
    return 'Required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!matchesFbRegex) {
    return 'Inavlid Facebook URL.'
  }
}

export async function validateTwitterUrl(url: string) {
  let whiteSpaceRegex = /^\S*$/
  let twitterRegEx = /^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/i

  let notContainsWhitespace = url.match(whiteSpaceRegex)
  if (!url) {
    return 'Required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!twitterRegEx) {
    return 'Inavlid Facebook URL.'
  }
}
export async function validateYoutubeUrl(url: string) {
  let whiteSpaceRegex = /^\S*$/
  let ytRegEx = /^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*/i

  let notContainsWhitespace = url.match(whiteSpaceRegex)
  if (!url) {
    return 'Required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (!ytRegEx) {
    return 'Inavlid Facebook URL.'
  }
}

export async function spotlightButtonTextValidation(text: string) {
  if (!text) {
    return 'Button text is required.'
  }
  if (text.length > 32) {
    return 'Button text should not exceed 32 characters.'
  }
}

export async function validateHexCode(hexCode: string) {
  const validRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  const isValid = hexCode.match(validRegex)
  if (!isValid) {
    return 'Not valid Hex code.'
  }
}

export async function validateFaIcon(faIcon: string) {
  const validFaIcon = /$([a-z])\w-([a-z])\w\w-([^\s]+)/

  const isValidFaIcon = faIcon.match(validFaIcon)
  if (!isValidFaIcon) {
    return `Not valid ${faIcon}`
  }
}

export async function validateVideo(url: string) {
  let isValidYoutubeUrl = validateYoutubeUrl(url)
  let isValidFacebookUrl = validateFacebookUrl(url)
  if (!isValidFacebookUrl && !isValidYoutubeUrl) {
    return 'Url is not correct.'
  }
}

export async function validateTestimonial(text: string) {
  if (!text) {
    return 'Testimonial is required.'
  }
  if (text.length > 120) {
    return 'Testimonial length should not exceed 120 characters.'
  }
  if (text.length < 12) {
    return 'Testimonial should be atleast 12 characters long.'
  }
}

export async function validateTestimonialBy(name: string) {
  if (!name) {
    return 'Name is required'
  }
  if (name.length < 3) {
    return 'Name should be atleast 3 characters long.'
  }
}

export const validateConnectAppFirstName = (name: string) => {
  name = name.trim()
  let onlyAlphabetsRegex = /^[a-z|A-Z]+(?: [a-z|A-Z ]+)*$/
  let notContainsSymbols = name.match(onlyAlphabetsRegex)
  let firstAndMiddleNameRegex = /^(?!.{32,})(\w+\s+\w+ ?)$/
  let singleSpace = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/
  let validSingleSpace = name.match(singleSpace)
  let validName = name.match(firstAndMiddleNameRegex)
  let whiteSpaceRegex = /^\S*$/
  let notContainsWhitespace = name.match(whiteSpaceRegex)

  if (!name) {
    return 'First Name is required.'
  } else if (name.length > 25) {
    return `First Name Should not exceed 25 characters in length.`
  } else if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  } else if (!validSingleSpace) {
    return 'Single whitespace allowed.'
  } else if (!notContainsWhitespace) {
    if (!validName) {
      return 'Single whitespace allowed.'
    }
  }
}

export const validateConnectAppLastName = (name: string) => {
  name = name.trim()
  let onlyAlphabetsRegex = /^[a-zA-Z]+$/
  let whiteSpaceRegex = /^\S*$/

  let notContainsSymbols = name.match(onlyAlphabetsRegex)
  let notContainsWhitespace = name.match(whiteSpaceRegex)

  if (!name) {
    return 'Last Name is required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if (name.length > 25) {
    return `Last Name Should not exceed 25 characters in length.`
  }
  if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  }
}

export const validateConnectAppEmail = async (email: string) => {
  email = email.toLowerCase().trim()
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  let notContainsSymbols = email.match(regex)

  const user = await db.user.findFirst({
    where: {
      email,
    },
  })

  if (!email) {
    return 'Email is required.'
  } else if (email.length > 50) return `Email Should not exceed 50 characters in length.`
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid email address.'
  } else if (user) {
    return 'Email already exists.'
  } else if (!notContainsSymbols) {
    return 'Invalid email address.'
  }
}

export const validateConnectAppUserName = async (userName: string) => {
  try {
    userName = userName.trim()
    let isValid = /^[a-zA-Z0-9-]*$/.test(userName)
    if (isValid) isValid = /.*[a-zA-Z].*/.test(userName)

    const alreadyExist = await db.user.count({
      where: {
        username: userName.toLowerCase(),
      },
    })

    if (alreadyExist) return 'userName already exists.'

    if (!userName) {
      return 'userName is required.'
    } else if (userName.length < 5) {
      return 'userName Should be at least 5 characters in length.'
    } else if (userName.length > 20) {
      return 'userName Should not exceed 20 characters in length.'
    } else if (!isValid) {
      return 'Only alphabets, numbers and - sign is allowed.'
    } else return undefined
  } catch {
    return 'Only alphabets, numbers and - sign is allowed.'
  }
}
