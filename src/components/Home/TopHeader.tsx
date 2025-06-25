import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, Youtube, Search, Mic, Video, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const TopHeader: React.FC = () => {
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-20 h-14',
      'flex items-center justify-between px-4',
      'bg-background border-b border-border'
    )}>
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center space-x-1 cursor-pointer">
          <Youtube className="h-8 w-8 text-red-600" />
          <span className="text-xl font-semibold tracking-tighter">YouTube</span>
          <span className="text-xs text-secondaryText self-start mt-1.5 ml-0.5">IN</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex justify-center items-center max-w-2xl mx-6">
        <div className="flex w-full">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-l-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-input h-10"
          />
          <Button variant="secondary" className="rounded-r-full rounded-l-none border border-input border-l-0 px-6 h-10">
            <Search className="h-5 w-5 text-secondary-foreground" />
          </Button>
        </div>
        <Button variant="secondary" size="icon" className="ml-4 rounded-full h-10 w-10 flex-shrink-0">
          <Mic className="h-5 w-5" />
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Video className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
        </Button>
        <ThemeToggle />
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://i.pravatar.cc/32?u=r" alt="User Avatar" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopHeader;