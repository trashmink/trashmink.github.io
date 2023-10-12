import '../app/globals.css';
import Navbar from './navbar';
import Footer from './footer';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-col min-h-screen px-4">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
