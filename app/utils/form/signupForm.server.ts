import { RegisterForm } from "~/types/regirsterForm.server";

export async function SignUpFormGenerator(request: Request) {
    const form = await request.formData()

    let firstname = form.get('firstName') as string
    let lastname = form.get('lastName') as string
    let email = form.get('email') as string
    let password = form.get('password') as string
    let username = form.get('profileId') as string
    let confirmPassword = form.get('confirmPassword') as string
    let url = request.url

    return {firstname, lastname, email, password, username, confirmPassword, url}
}