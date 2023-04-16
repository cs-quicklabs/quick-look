export default function SidebarDetailContainer({ mode, children }: any) {
  return (
    <div className="relative z-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`pointer-events-none fixed inset-y-0 left-0 flex lg:w-96`}>
          <div className="pointer-events-auto w-full md:max-w-xs lg:max-w-md">{children}</div>
        </div>
      </div>
    </div>
  )
}
