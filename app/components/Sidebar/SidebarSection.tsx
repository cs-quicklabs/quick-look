import { Key } from 'react'
import SidebarItem from './SidebarItem'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarSection({ title, sectionItems, onClick }: any) {
  return (
    <>
      <div className="mt-2 w-full border-t border-gray-200 bg-gray-50 pl-7 text-xs font-medium leading-5 text-gray-500 group-hover:text-gray-700">
        {title}
      </div>
      <nav className="flex-1 bg-white">
        {sectionItems.map((item: { name: Key | null | undefined; subheading: any }) => (
          <div
            key={item.name}
            data-cy={`${item.name}`}
            onClick={() => {
              onClick(item.name)
            }}
            className={classNames('hover:bg-gray-50')}
          >
            <SidebarItem title={item.name} subtitle={item.subheading} />
          </div>
        ))}
      </nav>
    </>
  )
}
