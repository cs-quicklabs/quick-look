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

  //  if(Final){
  //  Object.keys(icons).forEach(function(key) {
  //   //@ts-ignore
  //   icons[key]?.render?.name == Final ? setIsValid(true) : setIsValid(false)
  // });
  //  }

  return <>{TheIcon && <TheIcon className="h-6 w-6 text-white mr-3 box-s" aria-hidden="true" />}</>
}

export default DynamicHeroIcon

// import { FC } from 'react'
// import * as HIcons from '@heroicons/react/24/outline'
// import React from 'react'
// import { useMemo } from 'react';

// const DynamicHeroIcon: FC<{icon?: string,Final?:any}> = ({icon,Final}:any) => {
//   const {...icons} = HIcons

//   // @ts-ignore
//   const TheIcon: any = useMemo(() => icons[icon])
//   let isValid = false
//   Object.keys(icons).forEach(function(key) {
//   //@ts-ignore
//   icons[key]?.render?.name == Final ? isValid =true : null
// });

//   return (
//     <>
//     {isValid ?
//       <TheIcon  className="h-6 w-6 text-white mr-3 box-s" aria-hidden="true" /> : null
//       }
//     </>
//   )
// }

// export default DynamicHeroIcon
