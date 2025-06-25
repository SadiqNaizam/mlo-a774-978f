import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, Youtube, Search, Mic, Video, Bell, User, Sun, Moon, Monitor, LogOut, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/ThemeProvider';
import ProfileModal from '@/components/profile/ProfileModal';


const Header: React.FC = () => {
  const { setTheme } = useTheme();

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
          <span className="text-xl font-bold tracking-tighter">YouTube</span>
          <span className="text-xs text-secondary-foreground self-start mt-1 ml-0.5">IN</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex justify-center items-center max-w-2xl mx-6">
        <div className="flex w-full">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search"
              className="rounded-l-full rounded-r-none border-r-0 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 bg-background h-10 pl-4 pr-10 border-secondary"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          </div>
          <Button variant="secondary" className="rounded-r-full rounded-l-none border border-secondary border-l-0 px-6 h-10 hover:bg-muted">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/32?u=react-developer" alt="User Avatar" />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile" className="flex items-center cursor-pointer w-full">
                <User className="mr-2 h-4 w-4" />
                <span>Your Channel</span>
              </Link>
            </DropdownMenuItem>
            <ProfileModal>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="flex items-center cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </DropdownMenuItem>
            </ProfileModal>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 mr-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-1">Appearance</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Monitor className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;