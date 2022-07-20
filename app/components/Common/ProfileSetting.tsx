import { EmojiHappyIcon ,CogIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Profile', icon: EmojiHappyIcon, href: '/account/profile' },
  { name: 'Settings', icon: CogIcon, href: '/account/settings'},
]
const secondaryNavigation = [
  { name: 'Help Center', href: '#' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund-policy' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileSetting() {
  const Location = useLocation()
  
  return (
    <>
      <div className=''>
        <div className="w-56 flex flex-col flex-grow border-r font-inter border-white mt-8 bg-white overflow-y-auto ml-12">
          <div className="flex items-center flex-shrink-0 px-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Account</h2>
          </div>
          <div className="mt-3 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
              <div className="space-y-1 ml-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      Location.pathname.includes(item.href) ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        Location.pathname.includes(item.href) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="space-y-1 ml-2">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                  SUPPORT
                </h3>
                <div className="space-y-1" role="group" aria-labelledby="projects-headline">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

