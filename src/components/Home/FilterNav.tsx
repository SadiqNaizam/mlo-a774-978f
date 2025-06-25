import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories: string[] = [
  'All', 'Music', 'Mixes', 'Podcasts', 'Tamil Cinema', 'Funk', 'News', 'Speed', 'T-Series', 'CPUs', 
  'Theme music', 'AI', 'Algorithms', 'Algebra', 'House Music', 'Comedy', 'Indie Music', 'Recently uploaded', 
  'Watched', 'New to you'
];

const FilterNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkArrows();
      container.addEventListener('scroll', checkArrows);
      window.addEventListener('resize', checkArrows);
      return () => {
        container.removeEventListener('scroll', checkArrows);
        window.removeEventListener('resize', checkArrows);
      };
    }
  }, [checkArrows]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <div ref={scrollContainerRef} className="flex items-center space-x-3 overflow-x-auto py-2 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'secondary'}
            className={cn(
              'rounded-lg whitespace-nowrap h-8 px-3 text-sm',
              activeCategory === category
                ? 'bg-foreground text-background hover:bg-gray-200'
                : 'bg-secondary text-foreground hover:bg-muted'
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {showLeftArrow && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center bg-gradient-to-r from-background via-background to-transparent pr-12">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-background hover:bg-secondary shadow-md" onClick={() => scroll('left')}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
      )}
      {showRightArrow && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center bg-gradient-to-l from-background via-background to-transparent pl-12">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-background hover:bg-secondary shadow-md" onClick={() => scroll('right')}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

// Inject styles to hide scrollbar, as per component-level requirement
if (typeof window !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none; 
        scrollbar-width: none; 
      }
    `;
    document.head.appendChild(style);
}

export default FilterNav;
