import React from 'react'

function NavbarHome() {
  return (
    <nav className='w-full h-20 flex items-center justify-around fixed top-0 left-0 z-10 text-white'>
      <div className='text-3xl font-bold'>OrbitRex Living</div>
      <ul className='flex gap-10'>
        <li>HOME</li>
        <li>SHOP</li>
        <li>CONTACT</li>
        <li>SERVICES</li>
      </ul>
      <div>
        <input type="text" className='px-5 py-2 rounded-full' placeholder='Search'/>
        <button className='bg-white text-black px-5 py-2 rounded-full'>Search</button>
      </div>
    </nav>
  )
}

export default NavbarHome

