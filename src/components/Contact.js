import React from 'react';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
    return (
        <div name="contact" className='bg-gradient-to-r from-slate-100 to-zinc-200 h-[100%] w-full pt-16'>
            <div className='flex flex-col jusify-center py-4 mx-10'>
                <div className='pb-4'>
                    <p className='text-4xl font-semibold inline '>Hire Me</p>
                </div>
                <div className='flex flex-row justify-between mx-3 mt-5'>


                    <div className="grid lg:grid-cols-5 gap-8 ">
                        {/* left */}
                        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full ">
                                <div>
                                    <img
                                        className="rounded-xl hover:scale-105 ease-in duration-300"
                                        src="/contact.jpg"
                                        alt="/"
                                    />
                                </div>
                                <div>
                                    <h2 className="py-4 font-bold text-3xl">Sri Harsha Thonukunuri</h2>
                                    <p>MERN Stack Developer</p>
                                    <p className="py-4">
                                        I am available for full-time positions. Contact
                                        me and let&apos;s talk.
                                    </p>
                                </div>
                                <div>
                                    <p className="uppercase pt-8">Connect With Me</p>
                                    <div className="flex items-center justify-between py-4">
                                        <a href="https://github.com/tsriharsha07/" target='_blank' rel='noreferrer'>
                                            <div className='shadow-lg h-16 w-16  hover:w-48 hover:scale-105 shadow-slate-500  hover:shadow-lg transition-all ease-out duration-600 hover:shadow-slate-500 cursor-pointer py-2  group hover:bg-gradient-to-r from-sla-400 to-green-700 rounded-full'>
                                                <div className='flex justify-center items-center'>
                                                    <p className='text-xl group-hover:hidden flex items-center justify-center mt-3'><FaLinkedinIn /></p>
                                                    <div className='hidden group-hover:block absolute my-1 mx-3 '>
                                                        <div className='flex flex-row mt-5'>
                                                            <FaLinkedinIn className='mx-2 mt-8' />
                                                            <p className='mt-7'>Linkedin</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href='https://github.com/tsriharsha07/' target='_blank' rel='noreferrer'>
                                            <div className='shadow-lg h-16 w-16  hover:w-48 hover:scale-105 shadow-slate-500  hover:shadow-lg transition-all ease-out duration-600 hover:shadow-slate-500 cursor-pointer py-2  group hover:bg-gradient-to-r from-sla-400 to-green-700 rounded-full'>
                                                <div  className='flex justify-center items-center' >
                                                    <p className='text-xl group-hover:hidden flex items-center justify-center mt-3'><FaGithub /></p>
                                                    <div className='hidden group-hover:block absolute my-1 mx-3 '>
                                                        <div className='flex flex-row mt-5'>
                                                            <FaGithub className='mx-2 mt-8' />
                                                            <p className='mt-7'>Github</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/resume.pdf" download={true} target='_blank' rel='noreferrer'>
                                            <div className='shadow-lg h-16 w-16  hover:w-48 hover:scale-105 shadow-slate-500  hover:shadow-lg transition-all ease-out duration-600 hover:shadow-slate-500 cursor-pointer py-2  group hover:bg-gradient-to-r from-sla-400 to-green-700 rounded-full'>
                                                <div className='flex justify-center items-center'>
                                                    <p className='text-xl group-hover:hidden flex items-center justify-center mt-3'><BsFillPersonLinesFill /></p>
                                                    <div className='hidden group-hover:block absolute my-1 mx-3 '>
                                                        <div className='flex flex-row mt-5'>
                                                            <BsFillPersonLinesFill className='mx-2 mt-8' />
                                                            <p className='mt-7'>Resume</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form
                                    action="https://getform.io/f/88db9ac9-5613-4eb1-991e-41f812743f6f" 
                                    method="POST"
                                >
                                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Name</label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">
                                                Phone Number
                                            </label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text"
                                                name="phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Email</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Subject</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Message</label>
                                        <textarea
                                            className="border-2 rounded-lg p-3 border-gray-300"
                                            rows="10"
                                            name="message"
                                        ></textarea>
                                    </div>
                                    <button className="w-full p-4 text-gray-100 mt-4 bg-blue-500 hover:bg-blue-600 rounded-lg">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
