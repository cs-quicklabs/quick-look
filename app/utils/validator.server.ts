import { db } from '~/database/connection.server'
import bcrypt from 'bcryptjs'
import { match } from 'assert'

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
  let lowerCasedEmail = email.toLocaleLowerCase();
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
  password: string
): Promise<string | undefined> => {
  let whiteSpaceRegex = /^\S*$/
  let notContainsWhitespace = password.match(whiteSpaceRegex)

  if (!password) {
    return 'New Password is required.'
  } else if (password.length > 18) {
    return 'Password must not be more than 18 characters.'
  } else if (typeof password !== 'string' || password.length < 5) {
    return `Passwords must be at least 5 characters long.`
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  }
}

export const validatePassword = async (
  password: string
): Promise<string | undefined> => {
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

export const checkIncorrectCredentials = async (
  email: string,
  password: string
) => {
  let lowerCasedEmail = email.toLocaleLowerCase();
  const user = await db.user.findFirst({
    where: {
      email: lowerCasedEmail,
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
  let onlyAlphabetsRegex = /^[a-z|A-Z]+(?: [a-z|A-Z]+)*$/

  let notContainsSymbols = name.match(onlyAlphabetsRegex)


  if (!name) {
    return 'First Name is required.'
  }  else if (!isNaN(name)) {
    return `First Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `First Name must be at least 3 characters long.`
  } else if (name.length > 18) {
    return `First Name must be less than 18 characters.`
  } else if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  }
}

export const validateLastName = async (
  name: any
): Promise<string | undefined> => {
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
  } if (!notContainsSymbols) {
    return 'Only alphabets allowed.'
  }
}
export const validateUsername = async (
  username: string, forUpdate?: Boolean
): Promise<String | undefined> => {
  let whiteSpaceRegex = /^\S*$/
  let notcontainSymbolsRegex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let notOnlyNumberRegex = /(?!^\d+$)^.+$/

  let notOnlyNumber = username.match(notOnlyNumberRegex)
  let notContainsWhitespace = username.match(whiteSpaceRegex)
  let notcontainSymbol = username.match(notcontainSymbolsRegex)
  let lowerCasedUserName = username.toLocaleLowerCase();

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
  } else if(usernameExist){
    return 'This ID has already been taken. Please choose another one.'
  }
}

export async function validateOldPassword(user: any, newPassword: string, oldpassword: string) {
  if(!oldpassword){
    return 'Old password is required.'
  }
  const isoldPasswordMatch = await bcrypt.compare(oldpassword, user?.password as string)
  const isLastPasswordSame = await bcrypt.compare(newPassword, user?.password as string)
  if (!isoldPasswordMatch) {
    return 'Old password does not match.'
  }
  if (isLastPasswordSame) {
    return 'New password cannot be same as last password.'
  }
}

export async function validateUpdateUsername(username: string, user: any ){
  let whiteSpaceRegex = /^\S*$/
  let notcontainSymbolsRegex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let notOnlyNumberRegex = /(?!^\d+$)^.+$/

  let notOnlyNumber = username.match(notOnlyNumberRegex)
  let notContainsWhitespace = username.match(whiteSpaceRegex)
  let notcontainSymbol = username.match(notcontainSymbolsRegex)
  let lowerCasedUserName = username.toLocaleLowerCase();

  let usernameExist = await db.user.count({
    where:{
      username: lowerCasedUserName,
      NOT: {
        id: user.id 
      }
    }
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
  } else if(usernameExist){
    return 'This ID has already been taken. Please choose another one.'
  }

} 

export async function validateFacebookUrl(url: string){
  let whiteSpaceRegex = /^\S*$/
  let fbRegEx = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i
  let notContainsWhitespace = url.match(whiteSpaceRegex)


  let matchesFbRegex = url.match(fbRegEx)
  if(!url){
    return 'Required.'
  } else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if(!matchesFbRegex){
    return 'Inavlid Facebook URL.'
  }
}

export async function validateTwitterUrl(url: string){
  let whiteSpaceRegex = /^\S*$/
  let twitterRegEx = /^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/i

  let notContainsWhitespace = url.match(whiteSpaceRegex)
  if(!url){
    return 'Required.'
  }else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if(!twitterRegEx){
    return 'Inavlid Facebook URL.'
  }
}
export async function validateYoutubeUrl(url: string){
  let whiteSpaceRegex = /^\S*$/
  let ytRegEx = /^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*/i

  let notContainsWhitespace = url.match(whiteSpaceRegex)
  if(!url){
    return 'Required.'
  }else if (!notContainsWhitespace) {
    return 'Whitespaces are not allowed.'
  } else if(!ytRegEx){
    return 'Inavlid Facebook URL.'
  }
}
