import { ReactNode } from 'react';

export const NonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-x-hidden">
      <main>{children}</main>
    </div>
  );
};
