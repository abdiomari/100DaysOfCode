
// import React from 'react';
import { Button,Typography } from "@material-tailwind/react";
import ProfileCard from "../components/Card";

const Home = () => {
  return (
    <div className="glassmorphism-dark grid  grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 place-items-center lg:mx-20 lg:my-20 lg:p-20 h-full px-4.5">
        <ProfileCard />
        <div className="profile-rev justify-self-center mt-10 mx-10 lg:mx-20 px-30">
          <Typography as="h1" className="text-5xl font-medium ">
          Hello There!!
          </Typography>
          <Typography as="lead" className="text-sm text-cyan-200 font-bold">
          Let&apos;s get to know each other
          </Typography >
          
          <Typography
          className="text-sm md:text-base text-left text-gray-400"
          >      
            I am a software developer with a strong background in building web
            applications using <a className="underline decoration-indigo-300 font-semibold">
            React and Django Frameworks.</a> I&apos;m Passionate
            about using tech to solve real-world problems, particularly interested in the potential of  
            <a className="underline p-1 decoration-amber-800 font-semibold"> 
            IoT and Tech 
            </a>
            to revolutinize  <a className="underline decoration-cyan-400 font-semibold"> Agritech and Ecommerce.</a>
            </Typography>
          <Button className="mt-4 mx-4">
          <a href='#About' className='flex items-center'>
          See More
                </a>
            
          </Button>
        </div>
    </div>
  )
}

export default Home