import Link from "next/link"
import Image from "next/image"
import DarkModeToggle from "./DarkModeToggle"

export default function Header() {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="AI Apps Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold text-cyan-400">AI Apps</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#features" className="hover:text-cyan-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#showcase" className="hover:text-cyan-400 transition-colors">
                Showcase
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-cyan-400 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <Link
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

