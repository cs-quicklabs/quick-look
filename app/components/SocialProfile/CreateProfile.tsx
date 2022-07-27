import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function CreateProfile({setshowCreateProfile}:any) {
  const Onclose = (e:any) => {
   setshowCreateProfile(false)
  };
  return (
    <p>
      Hello
    </p>
  )
}
