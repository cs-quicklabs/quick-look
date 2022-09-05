import { FC } from 'react'
import * as HIcons from '@heroicons/react/outline'
import React from 'react'
import { useState } from 'react';

const DynamicHeroIcon: FC<{icon?: string,Final?:any}> = ({icon,Final}:any) => {
  const {...icons} = HIcons
  
  // @ts-ignore
  const TheIcon: any = icons[icon]
  let isValid = false
 Object.keys(icons).forEach(function(key) {
 // console.log(icons[key]?.render?.name);
 
  //@ts-ignore
  icons[key]?.render?.name == Final ? isValid =true : null
});
console.log("@#@#@@",isValid,Final);

  return (
    <>
    {isValid ?
      <TheIcon  className="h-6 w-6 text-white mr-3 box-s" aria-hidden="true" /> : null}
    </>
  )
}

export default DynamicHeroIcon