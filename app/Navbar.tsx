import React from 'react'
import Link from "next/link"
 const Navbar =()=> {
  return (

    <header className="bg-teal-600 text-white p-6 " >
        <h1 className="text-4xl font-bold">My Website</h1>
        
        <nav className="disply flex mx-84 mt-2">
          <>
        <p className="text-white hover:underline mx-4 "><Link href="/home">Home</Link></p>
         <h2 className='hover:text-blue-500 mx-4'><Link href="/about">About</Link></h2>
         <p className="hover:text-red-400"><Link href="/portfolio">Portfolio</Link></p>
        </>
        </nav>
        
      </header>
  );
};
export default Navbar