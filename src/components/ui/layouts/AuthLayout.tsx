import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow flex items-center justify-center bg-white overflow-hidden">
       {children}
    </main>
    <Footer />
  </div>
);
};

export default AuthLayout;