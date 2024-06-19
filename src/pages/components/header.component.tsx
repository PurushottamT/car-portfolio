import React, { useState } from 'react'

interface NavItems {
    label: string
    href: string
    submenu?: NavItems[]
}

const navItems: NavItems[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: 'about-us' },
    { label: 'Services', href: 'services' },
    {
        label: 'Contact Us',
        href: 'contact-us',
        submenu: [
            { label: 'Web Development', href: '/services/web-development' },
            { label: 'SEO', href: '/services/seo' },
        ],
    },
]

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState<{
        [key: string]: boolean
    }>({})

    const toggleDropdown = (name: string) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [name]: !prev[name],
        }))
    }
    return (
        <>
            <nav className="container relative z-10 mx-auto bg-transparent p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-xl font-bold text-customOrange">
                        CAR<span className="text-white">RENTAL </span>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <ul
                        className={`space-x-4 md:flex ${isOpen ? 'block' : 'hidden'}`}
                    >
                        {navItems.map((link) => (
                            <li key={link.label} className="relative">
                                <a
                                    href={link.href}
                                    className="rounded px-3 py-2 text-white hover:text-customOrange"
                                >
                                    {link.label}
                                </a>
                                {link.submenu && (
                                    <ul className="absolute left-0 mt-2 hidden rounded bg-white text-customOrange shadow-lg group-hover:block">
                                        {link.submenu.map((sublink) => (
                                            <li key={sublink.label}>
                                                <a
                                                    href={sublink.href}
                                                    onClick={() =>
                                                        link.submenu &&
                                                        toggleDropdown(
                                                            link.label
                                                        )
                                                    }
                                                    className="block px-4 py-2 hover:bg-blue-100"
                                                >
                                                    {sublink.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header
