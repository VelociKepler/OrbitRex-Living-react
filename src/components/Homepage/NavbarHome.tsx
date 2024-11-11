import { Link } from 'react-router-dom'

function NavbarHome() {
  return (
    <nav className='w-full h-20 flex items-center justify-around z-10 text-white'>
      <Link to='/'><div className='text-3xl font-bold'>OrbitRex Living</div></Link>
      <ul className='flex gap-10 font-bold'>
        <Link to='/' className='border-b-2 border-transparent hover:border-orange-500 transition-all duration-200'>
          <li>HOME</li>
        </Link>
        <Link to='/shop' className='border-b-2 border-transparent hover:border-orange-500 transition-all duration-200'>
          <li>SHOP</li>
        </Link>
        <Link to='' className='border-b-2 border-transparent hover:border-orange-500 transition-all duration-200'>
          <li>CONTACT</li>
        </Link>
        <Link to='' className='border-b-2 border-transparent hover:border-orange-500 transition-all duration-200'>
          <li>SERVICES</li>
        </Link>
        <Link to='/login' className='border-b-2 border-transparent hover:border-orange-500 transition-all duration-200'>
          <li>LOGIN</li>
        </Link>
        <Link to='/admin' className='border-b-2 border-transparent hover:border-orange-500 transition-all duration-200'>
          <li>ADMIN</li>
        </Link>
      </ul>
      <div className='relative'>
        <input type="text" className='px-5 py-2 rounded-full pr-10 text-black outline-none' placeholder='Search' />
        <button className='absolute top-1/2 right-14 transform -translate-y-2.5 text-gray-300 px-5 rounded-full'><i className="fa-solid fa-magnifying-glass"></i></button>
        <button><i className="fa-solid fa-circle-user text-3xl ml-7 translate-y-1"></i></button>
      </div>
    </nav>
  )
}

export default NavbarHome

