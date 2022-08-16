import { ActionFunction, json, redirect } from "@remix-run/node";
import { validate } from "uuid";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { addUpdateSocialLink, updateUserBioDetails } from "~/services/user.service.serevr";
import { validateFacebookUrl, validateTwitterUrl, validateYoutubeUrl } from "~/utils/validator.server";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const selectedSocial = formData.get('select_social') as string
    const selectedSocialLink = formData.get('addlink') as string
    let errors = {};
    if(selectedSocial === 'Facebook'){
        errors= {
          facebookUrlError : await validateFacebookUrl(selectedSocialLink)
        }
    } else if(selectedSocial === 'Twitter'){
      errors= {
        twitterUrlError : await validateTwitterUrl(selectedSocialLink)
      }
    } else if(selectedSocial === 'Youtube'){
      errors= {
        twitterUrlError : await validateYoutubeUrl(selectedSocialLink)
      }
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

    const session = await getSession(
        request.headers.get("Cookie")
    );

    const user = await getUser(request) || undefined
    await addUpdateSocialLink(selectedSocial, selectedSocialLink, user)
    session.flash(
        "updateProfileMessage",
        `Your profile has been updated successfully.`
    );
    return redirect('/account', {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }) 
}   