import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { deletePortfolioImage } from "~/services/portfolioImage.server";

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData()
    const toDeleteId = formData.get('portfolioImage')

    await deletePortfolioImage(toDeleteId as string)
    return redirect('/account')
}