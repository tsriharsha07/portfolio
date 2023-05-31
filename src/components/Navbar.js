import React,{useState} from 'react';
import { Link } from 'react-scroll';
import {FaTimes,FaBars} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState();
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className='flex justify-between h-16 w-full fixed bg-gradient-to-r from-slate-100 to-zinc-200 shadow-lg '>
      <div className='ml-7 my-auto'>
        <p className='text-3xl font-mono cursor-pointer ml-2 '>SRIHARSHA</p>
      </div>
        <ul className='hidden md:flex'>
            {
                links.map((link)=>(
                    <li key={link.id} className='mx-2 my-auto cursor-pointer capitalize px-4 hover:scale-105'>
                       <Link to={link.link}>
                        {link.link}
                       </Link>
                    </li>
                ))
            }
            <li></li>
        </ul>
        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-slate-500 md:hidden my-auto"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {/* <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              > */}
              {link}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
