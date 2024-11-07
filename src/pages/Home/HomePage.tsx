import React, { useEffect, useState } from 'react'
import Image from '../../images/Homepage/Homepagecover.png'
import NavbarHome from '../../components/Homepage/NavbarHome';
import MainHome from './MainHome';

function HomePage() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <NavbarHome />
            <div className='relative -translate-y-20 -z-10'>
                <img src={Image} alt="" className='w-full h-screen' />
                <div className={`bg-black bg-opacity-50 absolute top-80 left-40 p-10 py-10 rounded-xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <h1 className='text-6xl font-bold text-white'>Furniture, decor,<br />and beyond</h1>
                    <button className='bg-orange-500 text-white px-5 py-2 rounded-full mt-5'>Shop</button>
                </div>
            </div>
            <MainHome />
        </>
    )
}

export default HomePage

