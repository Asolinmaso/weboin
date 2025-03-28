import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full flex justify-center mt-5 fixed top-0 z-10">
      <nav className="max-w-5xl w-full bg-[#171717] border border-gray-200 rounded-3xl px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer text-[#C9FD02FF]">
            LearnHub
          </div>
        </Link>
        <Link href="/form">
          <div className="font-medium cursor-pointer">
            Admin
          </div>
        </Link>
      </nav>
    </div>
  )
}
