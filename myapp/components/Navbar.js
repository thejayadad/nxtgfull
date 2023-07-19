import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='navbar z-30'>
        <div className="flex-1">
            <a className="normal-case text-xl">Donut Spot</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/featured'}>Featured</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar