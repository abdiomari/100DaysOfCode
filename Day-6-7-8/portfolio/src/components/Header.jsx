// import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, MobileNav, Typography, IconButton, Button } from '@material-tailwind/react';

function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className='container py-1.5 mt-2 flex flex-col gap-2 ls:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
              <Typography
                as='li'
                variant='small'
                color='white'
                className='flex items-center gap-x-2 p-1 font-medium text-xl'
            >
                <a href='#About' className='flex items-center'>
                    About
                </a>
            </Typography>

            <Typography
                as='li'
                variant='small'
                color='white'
                className='flex items-center gap-x-2 p-1 font-medium text-xl'
            >
                <a href='#my-projects' className='flex items-center'>
                    Projects
                </a>
            </Typography>
           
            <Typography
                as='li'
                variant='small'
                color='white'
                className='flex items-center gap-x-2 p-1 font-medium text-xl'
            >
                <a href='#my-projects' className='flex items-center'>
                    Work With Me
                </a>
            </Typography>
        </ul>
    )

    return (
        <Navbar className="glassmorphism mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between">
                <Typography
                    as='a'
                    href='#'
                    className='mr-4 cursor-pointer py-1.5 font-medium text-xl'
                >
                    Abdi Omari
                </Typography>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <IconButton
                    variant='text'
                    className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto p-2 mb-4">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    )
}

export default Header;