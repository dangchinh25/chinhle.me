import Footer from './Footer';
import Navbar from './Navbar/NavBar';
import { Card } from './ui/card';

export type Props = {
  children: React.ReactNode
};

export default function OuterContainer({ children }: Props) {
  return (
    <div className='flex flex-row justify-center w-screen bg-notion-bg-secondary text-notion-text select-none min-h-screen p-4'>
      <div className='w-full lg:w-4/5 xl:w-3/5 max-w-4xl'>
        <Card className='my-8'>
          <div className='bg-notion-gray-subtle'>
            <Navbar />
          </div>
          <div className='px-6 py-8 bg-notion-bg'>
            {children}
          </div>
          <div className='bg-notion-gray-subtle border-t border-notion-border'>
            <Footer />
          </div>
        </Card>
      </div>
    </div>
  );
}