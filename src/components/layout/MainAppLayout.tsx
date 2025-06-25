import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <Sidebar />
      <main className={cn('pl-16 pt-14', className)}>
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
