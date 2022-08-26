import { db } from "~/database/connection.server";
import { SpotlightFormType } from "~/types/spotlightForm.server";

export async function addUpdateSpotlight(spotlightForm: SpotlightFormType, user: any){
    const {
        buttonAction,
        buttonActionlink,
        buttonColor, 
        buttonText,
        buttonHex,
        spotlightIcon, 
        toggleSpotlight 
    } = spotlightForm

    await db.spotlightButton.upsert({
        where: {
            userId: user.id
        },
        create: {
            buttonAction,
            buttonActionlink,
            buttonColor, 
            buttonText, 
            spotlightIcon, 
            buttonHex,
            toggleSpotlight : toggleSpotlight as boolean,
            userId: user.id
        },
        update: {
            buttonAction: buttonAction ?? user.spotlightButton.buttonAction,
            buttonActionlink: buttonActionlink ?? user.spotlightButton.buttonActionlink,
            buttonColor: buttonColor ?? user.spotlightButton.buttonColor, 
            buttonHex: buttonHex ?? user.spotlightButton.buttonHex,
            buttonText: buttonText ?? user.spotlightButton.buttonText, 
            spotlightIcon: spotlightIcon ?? user.spotlightButton.spotlightIcon, 
            toggleSpotlight : toggleSpotlight as boolean ?? user.spotlightButton.toggleSpotlight,
        }
    })
}