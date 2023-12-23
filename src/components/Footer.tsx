import Image from 'next/image';
import Link from 'next/link';

function SlimSolidLine() {
  return (
    <div
        style={{
          display: 'block',
          height: '1px',
          border: 0,
          borderTop: '1px solid #ccc',
          margin: '1em 0',
          padding: 0,
        }}
    >
    </div>
  );
}

export default function Footer() {
  return (
        <div>
            <SlimSolidLine />

            <div>
                <Link href='https://github.com/dangchinh25'>
                    github
                </Link>
                <Link href='https://www.youtube.com/channel/UCu5VfUF_Tdv9EJP5YORfMzg'>
                    Youtube
                </Link>
                <Link href='https://www.linkedin.com/in/chinh-d-le/'>
                   Linkedin
                </Link>
                <Link href='https://www.instagram.com/dangg_chinh/'>
                   Instagram
                </Link>
            </div>
            
            <div
                style={{
                  width: '5%',
                  marginTop: '20px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
            >
                <a href='https://github.com/dangchinh25'>
                    <Image 
                        src='/Subject.png'
                        alt='memoji'
                        width='100'
                        height='75'/>
                </a>
            </div>
        </div>
  );
}