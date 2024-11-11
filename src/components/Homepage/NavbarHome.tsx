import { Link } from 'react-router-dom'

function NavbarHome() {
  return (
    <>
      {/* Desktop */}
      <nav className='md:hidden lg:w-full lg:h-20 lg:flex lg:items-center lg:justify-around lg:z-10 lg:text-white'>
        <Link to='/'><div className='lg:text-3xl lg:font-bold'>OrbitRex Living</div></Link>
        <ul className='lg:flex lg:gap-10 lg:font-bold'>
          <Link to='/' className='lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200'>
            <li>HOME</li>
          </Link>
          <Link to='/shop' className='lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200'>
            <li>SHOP</li>
          </Link>
          <Link to='' className='lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200'>
            <li>CONTACT</li>
          </Link>
          <Link to='' className='lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200'>
            <li>SERVICES</li>
          </Link>
          <Link to='/admin' className='lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200'>
            <li>ADMIN</li>
          </Link>
        </ul>
        <div className='lg:relative'>
          <input type="text" className='lg:px-5 lg:py-2 lg:rounded-full lg:pr-10 lg:text-black lg:outline-none' placeholder='Search' />
          <button className='lg:absolute lg:top-1/2 lg:right-14 lg:transform lg:-translate-y-2.5 lg:text-gray-300 lg:px-5 lg:rounded-full'><i className="fa-solid fa-magnifying-glass"></i></button>
          <Link to='/login'><i className="fa-solid fa-circle-user lg:text-3xl lg:ml-7 lg:translate-y-1"></i></Link>
        </div>
      </nav>

      {/* tablet */}
      <nav className='lg:hidden'>
        <div className='h-20 flex items-center justify-center gap-20 z-10 text-white mx-5'>
          <Link to='/'><div className='text-2xl font-bold'>OrbitRex Living</div></Link>
          <div className='relative'>
            <input type="text" className='px-5 py-3 rounded-full w-60 first: text-black outline-none' placeholder='Search' />
            <button className='absolute top-1/2 right-1 transform -translate-y-2.5 text-gray-300 px-5 rounded-full'><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className='flex gap-10'>
            <Link to=''><i className="fa-solid fa-basket-shopping text-4xl"></i></Link>
            <button><i className="fa-solid fa-bars text-4xl"></i></button>
          </div>
        </div>
      </nav>


    </>
  )
}

export default NavbarHome

