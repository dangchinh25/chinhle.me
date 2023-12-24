import Footer from './Footer';
import Navbar from './Navbar/NavBar';

export type Props = {
  children: React.ReactNode
};

export default function OuterContainer({ children }: Props) {
  return (
    <div className='flex flex-row justify-center w-screen h-screen bg-platinum text-richBlack select-none'>
      <div className='w-full lg:w-5/6 xl:w-3/6'>
        <Navbar />
        <div className='px-4 md:px-2'>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}