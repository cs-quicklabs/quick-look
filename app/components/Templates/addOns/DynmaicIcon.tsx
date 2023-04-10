import type { FC } from 'react'
import { useEffect } from 'react'
import * as HIcons from '@heroicons/react/24/outline'
import React from 'react'
import { useMemo } from 'react'

const DynamicHeroIcon: FC<{ icon?: string; Final?: any }> = ({ icon, Final }: any) => {
  const { ...icons } = HIcons
  // const [isValid, setIsValid] = useState(false)
  // @ts-ignore

  const TheIcon: any = useMemo(() => icons[icon] || null, [icon])

  useEffect(() => {}, [icon])

  return <>{TheIcon && <TheIcon className="h-6 w-6 text-white mr-3 box-s" aria-hidden="true" />}</>
}

export default DynamicHeroIcon
