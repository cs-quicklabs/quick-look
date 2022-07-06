import { json } from '@remix-run/node'
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

export const checkIncorrectCredentials = async (email: string, password: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  })
  if (!user || !(await bcrypt.compare(password, user.password))){
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
  let regex = /^[a-zA-Z]+$/
  let result = name.match(regex)
  if(!result){
    return 'Only alphabets allowed.'
  } else if (!name) {
    return 'First Name is required.'
  } else if (!isNaN(name)) {
    return `First Name should contain alphabets only.`
  } else if (name.length < 3) {
    return `First Name must be at least 3 characters long.`
  } else if(name.length > 12){
    return `First Name must be less than 12 characters.`
  }
}

export const validateLastName = async (
  name: any
): Promise<string | undefined> => {
  let regex = /^[a-zA-Z]+$/
  let result = name.match(regex)
  if(!result){
    return 'Only alphabets allowed.'
  } else if (!name) {
    return 'Last Name is required.'
  } else if (!isNaN(name)) {
    return `Last Name must be in Alphabets.`
  } else if (name.length < 3) {
    return `Last Name must be at least 3 characters long.`
  } else if(name.length > 12){
    return `Last Name must be less than 12 characters.`
  }
}
export const validateUsername = async (
  username: string
): Promise<String | undefined> => {
  let regex = /^(?!\-)[a-z\/\a-zA-Z\-\0-9]+$/
  let result = username.match(regex)
  const usernameExist = await db.user.count({
    where: {
      username,
    },
  })
  if ( !username ) {
    return 'Username is required.'
  } else if ( username.length > 20 ) {
    return 'Id can not be bigger than 20 characters.'
  } else if (!result) {
    return 'Only alphabets, number and - sign is allowed.'
  } else if (usernameExist) {
    return 'This ID has already been taken. Please choose another.'
  } else if (username.length < 6 ){
    return 'Profile Id should be atleast 6 charcaters long.'
  }
  return
}

export const validateLoginCredentials = async(email: string, password: string) => {

}