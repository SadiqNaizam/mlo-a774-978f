import React from 'react';
import { Home, Flame, Clapperboard, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the structure for a navigation item
interface NavItem {
  icon: React.ElementType;
  label: string;
}

// Dummy data for the sidebar navigation links
const navItems: NavItem[] = [
  { icon: Home, label: 'Home' },
  { icon: Flame, label: 'Shorts' },
  { icon: Clapperboard, label: 'Subscriptions' },
  { icon: User, label: 'You' },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('Home');

  return (
    <aside className={cn(
      'fixed top-0 left-0 h-full bg-background z-10',
      'w-16 flex flex-col items-center pt-14 mt-1' // pt-14 for header height
    )}>
      <div className="flex flex-col items-center space-y-2 w-full px-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                'flex flex-col items-center justify-center w-full py-4 rounded-lg',
                'hover:bg-secondary transition-colors duration-200',
                'text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
                { 'bg-secondary': isActive }
              )}
              aria-label={item.label}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[10px] mt-1.5 tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
