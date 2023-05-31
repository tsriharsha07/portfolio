import React from 'react';

const About = () => {
    return (
        <div name="about" className='bg-gradient-to-r from-slate-100 to-zinc-200 h-[100vh] w-full pt-16'>
            <div className=' flex flex-col justify-center p-4 mx-10'>
                <div className="pb-4">
                    <p className="text-4xl font-semibold inline ">
                        About
                    </p>
                </div>
                <p className="text-xl mt-10">
                    As a MERN stack developer, I specialize in building dynamic and interactive web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I possess a comprehensive understanding of the entire web development process. From designing intuitive user interfaces to implementing robust backend functionalities, I leverage the power of the MERN stack to create scalable and efficient solutions. With a strong focus on code quality and performance optimization, I am committed to delivering high-quality applications that meet the needs and exceed the expectations of users.
                </p>

                <br />

                <p className="text-xl">
                I started web developement in 2021. I have experience working in deployed applications. During my free time as a MERN stack developer, I am constantly exploring new technologies and keeping up with the latest trends in web development.Additionally, I engage in personal projects to further refine my abilities and challenge myself creatively.  I am always seeking opportunities to sharpen my MERN stack expertise and stay at the forefront of this dynamic field.
                </p>
            </div>

        </div>
    );
}

export default About;
