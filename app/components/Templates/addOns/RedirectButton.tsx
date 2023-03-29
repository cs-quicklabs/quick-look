export default function RedirectButton({ link, text }: { link: string; text: string }) {
  return (
    <div className="mt-6 bg-gray-800 flex justify items-center w-full rounded-lg hover:scale-105">
      <a
        href={link}
        target="_blank"
        className="text-sm font-semibold leading-5 py-4 w-full text-center text-white"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  )
}
