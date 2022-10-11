import { User } from "@prisma/client";
import { ActionFunction, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addPortfolioImage } from "~/services/portfolioImage.server";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await unstable_parseMultipartFormData(request, digitalOceanUploadHandler)
    
    const portfolioImageUrl = form.get('portfolioImage') as string
console.log('portfolioImageUrl',portfolioImageUrl);

    if(portfolioImageUrl){
        await addPortfolioImage(portfolioImageUrl, user);
    }

    return redirect('/account') 
};