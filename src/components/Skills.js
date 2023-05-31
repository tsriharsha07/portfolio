import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import mongodb from '../assets/mongodb.jpg'
import node from '../assets/node.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'


const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML"
        },
        {
            id: 2,
            src: css,
            title: "CSS"
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript"
        },
        {
            id: 4,
            src: reactImage,
            title: "React"
        },
        {
            id: 5,
            src: nextjs,
            title: "Next JS"
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
        },
        {
            id: 7,
            src: bootstrap,
            title: "Bootstrap"
        },
        {
            id: 8,
            src: github,
            title: "GitHub"
        },
        {
            id: 9,
            src: mongodb,
            title: "MongoDB"
        },
        {
            id: 10,
            src: node, 
            title: "Node Js"
        },
        {
            id: 11,
            src: mysql, 
            title: "MySQL"
        }
    ];
    return (
        <div name="skills" className='bg-gradient-to-r from-slate-100 to-zinc-200 h-[100%] w-full pt-16'>
            <div className=' flex flex-col justify-center p-4 mx-10'>
                <div className="pb-4">
                    <p className="text-4xl font-semibold inline ">
                        Skills
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-16 text-center py-4  sm:px-0 ">
                    {techs.map(({ id, src, title }) => (
                        <div
                            key={id}
                            className='shadow-md h-28 flex flex-row w-72 items-center hover:scale-105 cursor-pointer duration-500 py-2 rounded-xl'
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="m-4 mr-10 text-2xl">{title}</p>
                        </div>
                    ))}
                </div>
                
            </div>

        </div>
    );
}

export default Skills;
