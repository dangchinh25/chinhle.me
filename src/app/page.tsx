import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';


export default function HomePage() {
  return (
    <div>
      <div>
        <Navbar />
        <p>
          I love making and sharing things.
        </p>
        <p>
          I share everything I know in form of a personal documentation here.
        </p>
        <p>
          Feel free to ask me anything.
        </p>
        <Footer />
      </div>
    </div>
  );
}
