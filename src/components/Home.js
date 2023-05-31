import React from 'react';

const Home = () => {
    return (
        <div name="home" className='flex justify-center items-center  bg-gradient-to-r from-slate-100 to-zinc-200 h-[100vh] w-full '>
            <div className='max-w-screen-lg p-10 shadow-xl flex-col md:flex-row cursor-default '>
                    <h2 className='text-lg sm:text-7xl font-bold text-black'>
                        Hi, I'm <p className='text-red-300'>Sriharsha Thonukunuri</p>
                        A MERN Stack Developer
                    </h2>
                    <p className="text-black py-4 ">
                        My job is to build responsive frontend applications which works smoothly while also integrating with backend technologies
                    </p>
            </div>
        </div>
    );
}

export default Home;
