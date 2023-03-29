import { EmojiHappyIcon, CogIcon } from '@heroicons/react/outline'

type nav = {
  name: string
  icon?: any
  href?: any
  current?: boolean
  class?: any
}[]
const navigation: nav = [
  { name: 'Profile', icon: EmojiHappyIcon, href: '#', current: true },
  { name: 'Settings', icon: CogIcon, href: '#', current: false },
  {
    name: 'Support',
    class:
      'hover:bg-white text-gray-500 hover:text-gray-500 font-[600] text-[12px]',
  },
  { name: 'Help Center', class: 'mt-0 pt-0', href: '#', current: false },
  { name: 'Terms of Use', class: 'mt-0 pt-0', href: '#', current: false },
  { name: 'Privacy Policy', class: 'mt-0 pt-0', href: '#', current: false },
  { name: 'Refund Policy', class: 'mt-0 pt-0', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav({ children }: any) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow pt-5 pb-4 bg-white overflow-y-auto h-screen p-12 ">
          <div className="flex items-center flex-shrink-0 px-4 font-[600] text-lg">
            <h1>Account</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col w-[16rem]">
            <nav
              className="flex-1 px-2 bg-white space-y-1"
              aria-label="Sidebar"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : item.class
                      ? item.class
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  {item?.icon ? (
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    ''
                  )}
                  <span className="flex-1">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-3/4 px-5">{children}</div>
      </div>
    </>
  )
}
