export default function SidebarItem({ title, subtitle }: any) {
  return (
    <div className="flex cursor-pointer justify-between border-t border-gray-200 px-2 py-4">
      <div className="">
        <p className="group flex items-center rounded-md px-2 text-sm font-medium leading-5">
          {title}
        </p>

        <p className="px-2 text-sm font-medium text-gray-500 group-hover:text-gray-700">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
