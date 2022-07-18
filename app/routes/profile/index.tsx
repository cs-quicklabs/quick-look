import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/services/auth.service.server";
import { LoginHeader } from "~/components/LoginHeader";
import SideNav from "~/components/Sidenavbar";
import ProfileSetting from "~/components/Common/ProfileSetting";
import { useState } from "react";
import Modal from "~/components/Common/ConfirmModal";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logos/quicklook-icon.svg';
import DefaultProfileIcon from '../../../assets/images/profile.png';
import DashboardHeader from "~/components/Common/DashboardHeader";

export const loader: LoaderFunction = async ({ request  }) => {
  await requireUserId(request)

  return null
}

export default function Profile() {
  return (
    <>
      <DashboardHeader />
    </>
  )
}
