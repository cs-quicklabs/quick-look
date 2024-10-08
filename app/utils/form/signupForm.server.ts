export async function SignUpFormGenerator(request: Request) {
  const form = await request.formData()

  let firstname = form.get('firstName') as string
  let lastname = form.get('lastName') as string
  let email = form.get('email') as string
  let password = form.get('password') as string
  let username = form.get('profileId') as string
  let confirmPassword = form.get('confirmPassword') as string
  let captchaToken = form.get('captcha') as string
  let coupon_code = form.get('coupon_code') as string

  let url = request.url

  return {
    firstname,
    lastname,
    email,
    password,
    username,
    confirmPassword,
    url,
    captchaToken,
    coupon_code,
  }
}
