// import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DiCss3, DiDjango, DiLinux, DiReact, DiPython, DiDocker, DiSass, DiSqllite, DiTerminal , DiRasberryPi } from "react-icons/di";
import { Tooltip, Typography } from "@material-tailwind/react";


const Skills = () => {
    const skills = [
        // { icon: <CodeIcon />, tooltipText: 'React Js' },
        { icon: <JavascriptIcon />, tooltipText: 'Vanilla Js', className: 'text-blue-500  icon ' },
        { icon: <DiReact />, tooltipText: 'React Js', className: 'text-cyan-500  icon' },
       
        { icon: <DiCss3 />, tooltipText: 'CSS3', className: 'text-yellow-500  icon' },
        { icon: <DiPython />, tooltipText: 'Python', className: 'text-yellow-500  icon' },
        { icon: <DiDjango />, tooltipText: 'Django', className: 'text-green-500  icon' },
        { icon: <DiLinux />, tooltipText: 'Linux', className: 'text-white-900  icon' },
        { icon: <DiDocker />, tooltipText: 'Docker', className: 'text-blue-600  icon' },
        { icon: <GitHubIcon />, tooltipText: 'Github', className: 'text-dark-500  icon' },
        { icon: <DiSass />, tooltipText: 'Sass', className: 'text-pink-500  icon' },
        { icon: <DiSqllite />, tooltipText: 'SqlLite', className: 'text-blue-500  icon' },
        { icon: <DiTerminal />, tooltipText: 'Terminal', className: 'text-grey-500  icon' },
        { icon: <DiRasberryPi />, tooltipText: 'RaspberryPi', className: 'text-red-500  icon' },
    ]
    return (

        <div className="glassmorphism-dark grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 place-items-center lg:mx-20 lg:my-20 lg:p-20 h-full px-4.5">
            {skills.map((skill, index) => (
                <div key={index}>
                    <Tooltip content={skill.tooltipText} data-tooltip="tooltip-animation" className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                        <div className="select-none rounded-lg bg-transparent mt-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <Typography as="li" variant="lead" className={skill.className} data-tooltip-target="tooltip-animation" >
                                {skill.icon}
                            </Typography>
                        </div>
                    </Tooltip>
                </div>
            ))}
        </div>

    )
}

export default Skills