import { Outlet } from '@remix-run/react'
import { SideBar } from './feature/index'

export default function Outer() {
  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  )
}
