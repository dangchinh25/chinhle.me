import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Grid, IconButton} from '@mui/material';
import Link from './Link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div>
            <SlimSolidLine />

            <Grid>
                <Link href="https://github.com/dangchinh25">
                    <IconButton size='large'>
                        <GitHubIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.youtube.com/channel/UCu5VfUF_Tdv9EJP5YORfMzg">
                    <IconButton
                        size='large'
                    >
                        <YouTubeIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/chinh-d-le/">
                    <IconButton size='large'>
                        <LinkedInIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.instagram.com/dangg_chinh/">
                    <IconButton size='large'>
                        <InstagramIcon />
                    </IconButton>
                </Link>
            </Grid>
            
            <div
                style={{
                width: "5%",
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                }}
            >
                <a href="https://github.com/dangchinh25">
                    <Image 
                        src="/Subject.png"
                        alt='memoji'
                        width='100'
                        height='75'/>
                </a>
            </div>
        </div>
    )
}

function SlimSolidLine() {
    return (
        <div
            style={{
            display: "block",
            height: "1px",
            border: 0,
            borderTop: "1px solid #ccc",
            margin: "1em 0",
            padding: 0,
            }}
        ></div>
)
}