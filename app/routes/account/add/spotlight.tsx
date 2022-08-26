import { User } from "@prisma/client";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addUpdateSpotlight } from "~/services/spotlight.service.server";
import { spotlightButtonTextValidation, validateFaIcon, validateHexCode } from "~/utils/validator.server";


export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()

    const buttonText = form.get('buttonText') as string
    const buttonColor = form.get('buttonColor') as string
    const buttonHex = form.get('hexcode') as string
    const spotlightIcon = form.get('spotlightIcon') as string
    const buttonAction = form.get('buttonAction') as string
    const buttonActionlink = form.get('buttonActionlink') as string
    const toggleSpotlight = form.get('toggleSpotlight') as unknown as boolean

    const errors = {
        buttontext: await spotlightButtonTextValidation(buttonText),
        hexcode: await validateHexCode(buttonColor),
        faIcon: await validateFaIcon(spotlightIcon)
      }
    
      if (Object.values(errors).some(Boolean)) {
        return json(
          {
            errors,
            form: action,
          },
          { status: 400 }
        )
      }
    await addUpdateSpotlight({
        buttonText,
        buttonColor,
        buttonHex,
        spotlightIcon,
        buttonAction,
        buttonActionlink,
        toggleSpotlight
    }, user)

    return redirect('/account') 
};


