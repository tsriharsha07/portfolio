import React from 'react';
import booking from '../assets/moviebooking.png';
import blog from '../assets/blog.png';
import shopify from '../assets/shopify.png'

const Project = () => {
    const links = [
        {
            title: "Blog Website",
            description: "It a simple blog website which I have created while learning tailwind css. I have also search functionality",
            tech: "React Js, Tailwind, Material Ui",
            code: "https://github.com/tsriharsha07/blog-website",
            demo: "https://blog-website-4fv4zhnuu-tsriharsha07-gmailcom.vercel.app/",
            img: blog
        },
        {
            title: "Shopify",
            description: "It a MERN-stack e-commerce application.I have built this application while learning mern stack. It supports authentication.  ",
            tech: "React Js, Node JS, Material Ui",
            code: "https://github.com/tsriharsha07/Shopify",
            demo: "https://github.com/tsriharsha07/Shopify",
            img: shopify
        },
        {
            title: "Booking website",
            description: "It a MERN-stack e-commerce application.It is a simple movie booking application, It has two interfaces for admin and for user.",
            tech: "React Js, Tailwind, Node JS, Express JS",
            code: "https://github.com/tsriharsha07/moviebooking",
            demo: "https://github.com/tsriharsha07/moviebooking",
            img: booking
        }
    ]

    return (
        <div name="projects" className='bg-gradient-to-r from-slate-100 to-zinc-200 h-[100%] w-full pt-16'>
            <div className=' flex flex-col justify-center p-4 mx-10'>
                <div className="pb-4">
                    <p className="text-4xl font-semibold inline ">
                        Projects
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 text-center mt-5 ">
                    {links.map(({ title, description, tech, code, demo, img }) => (
                        <div className='flex flex-col justify-center items-center shadow-2xl hover:scale-105 cursor-pointer duration-400 mx-3 rounded-xl h-52'>
                            <div className='flex flex-row items-center justify-center'>
                                <img src={img} alt='' className='m-3 h-36 w-40' />
                                <div className='flex flex-col'>
                                    <p className='mx-3 font-bold'>{title} </p>
                                    <p className='mx-3 text-left'>{description}</p>
                                    <p className='mx-3 flex flex-col'><p className=' font-semibold'>Tech used :&nbsp; </p> {tech}</p>
                                </div>
                            </div>
                            <div className='flex flex-row pb-4 pt-1'>
                                <a
                                    href={code}
                                    className="flex justify-between mx-20 items-center w-full text-white"
                                    download={true}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className=' border-blue-400 rounded-3xl px-5 my-auto bg-blue-400 hover:bg-blue-500'>Code </p>
                                </a>
                                <a
                                    href={demo}
                                    className="flex justify-between mx-20 items-center w-full text-white"
                                    download={true}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className='border-blue-400 rounded-3xl px-5 my-auto bg-blue-400 hover:bg-blue-500'>Demo </p>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Project;
