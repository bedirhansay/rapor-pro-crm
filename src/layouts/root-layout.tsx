import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ReactNode } from 'react';

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-xl h-screen mx-auto relative overflow-hidden ">
      <Navbar />
      <div className="p-4 mt-20 ">{children}</div>
      <Footer />
    </div>
  );
};
