import {
    Card, CardBody, CardFooter, CardHeader, Tooltip, Typography,
} from "@material-tailwind/react";
import ProfileCardImage from '../assets/ProfileCardImage.png';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProfileCard() {
    return (
        <Card className='w-96 bg-gray-800 shadow-xl m-10'>
            <CardHeader className='h-80 m-10 bg-gray-800 shadow-2xl border border-gray-600' floated={false}>
                <img src={ProfileCardImage} alt="Photo of Abdi Omari" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-2">
                    Abdi Omari
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    Developer
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content='X'>
                    <Typography as="a" href="https://twitter.com/Abdiomari3" variant="lead" color="black" textGradient >
                        <XIcon className="text-white " />
                    </Typography>
                </Tooltip>
                <Tooltip content='linkedIn'>
                    <Typography as="a" href="www.linkedin.com/in/abdiomari" variant="lead" target="blank" color="black" textGradient >
                        <LinkedInIcon className="text-blue-700" />
                    </Typography>
                </Tooltip>
                <Tooltip content='Email'>
                    <Typography as="a" href="" variant="lead" color="black" textGradient >
                        <EmailIcon className="text-white" />
                    </Typography>
                </Tooltip>

                <Tooltip content='github'>
                    <Typography as="a" href="https://github.com/abdiomari" variant="lead" color="black" textGradient >
                        <GitHubIcon className="text-white" />
                    </Typography>
                </Tooltip>

                <Tooltip content='f6s'>
                    <Typography as="a" href="https://www.f6s.com/member/abdi-omari?follow=1" variant="lead" color="black" textGradient >
                        <WorkIcon className="text-white" />

                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}

export default ProfileCard;