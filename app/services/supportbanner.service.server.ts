import { db } from '~/database/connection.server'
import type { SupportBannerForm } from '~/types/supportBanner.server.type'

export async function addUpdateSupportBanner(supportBannerForm: SupportBannerForm, user: any) {
  let { bannerText, bannerColor, bannerIcon, bannerLink, bannerHex, toggleBanner } =
    supportBannerForm

  toggleBanner = Boolean(toggleBanner)
  if (bannerText.length == 0 || bannerLink.length == 0) {
    return
  } else if (bannerHex?.length || bannerColor.length > 0) {
    if (bannerHex!.length > 0) {
      bannerColor = ''
    }

    await db.supportBanner.upsert({
      where: {
        userId: user.id,
      },
      create: {
        bannerlink: bannerLink,
        bannerColor,
        bannerText,
        bannerIcon,
        bannerHex,
        toggleBanner: toggleBanner as boolean,
        userId: user.id,
      },
      update: {
        bannerlink: bannerLink ?? user.supportBanner.bannerlink,
        bannerColor: bannerColor ?? user.supportBanner.buttonColor,
        bannerHex: bannerHex ?? user.supportBanner.bannerHex,
        bannerText: bannerText ?? user.supportBanner.bannerText,
        bannerIcon: bannerIcon ?? user.supportBanner.bannerIcon,
        toggleBanner: (toggleBanner as boolean) ?? user.supportBanner.toggleBanner,
      },
    })
  }
  return false
}

export async function deleteSupportBanner(user: any) {
  await db.supportBanner.delete({
    where: {
      userId: user.id,
    },
  })
  return true
}
