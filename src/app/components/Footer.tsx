// app/page.tsx

import Link from "next/link";

export default function Footer() {
    return (
    
          <footer className="py-2 mb-6 text-center">
          <p className="text-[#C9FD02FF] text-4xl font-bold mb-2">LearnHub</p>
          <p className="text-gray-500 text-sm mt-4">
            © 2022 Tailwind Labs. All rights reserved.
          </p>

          <div className="mt-6 flex gap-3 justify-center items-center">
          <Link
            href="/form"
            className="text-white hover:underline font-semibold text-sm"
          >
            Form
          </Link>
          <span className="text-gray-500">
            |
          </span>
          <Link
            href="/notes"
            className="text-white hover:underline font-semibold text-sm"
          >
            Notes
          </Link>
        </div>
        </footer>
    )
  }
