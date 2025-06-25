import React from 'react';
import SidebarNav from '../components/Home/SidebarNav';
import TopHeader from '../components/Home/TopHeader';
import FilterNav from '../components/Home/FilterNav';
import VideoCardGrid from '../components/Home/VideoCardGrid';
import { ThemeProvider } from '@/components/ThemeProvider';

/**
 * The main homepage for the YouTube clone.
 * This component assembles the primary layout by combining the core organism components:
 * - TopHeader: The fixed navigation bar at the top of the page.
 * - SidebarNav: The fixed vertical navigation on the left side.
 * - FilterNav: A sticky horizontal list of content categories below the header.
 * - VideoCardGrid: A responsive grid displaying video content.
 * 
 * The layout is achieved by using fixed positioning for the header and sidebar,
 * and applying appropriate padding to the main content area to prevent overlap.
 */
const IndexPage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="youtube-clone-theme">
      <div className="bg-background text-foreground min-h-screen">
        <TopHeader />
        <SidebarNav />

        {/* Main content area, offset to account for fixed header (h-14) and sidebar (w-16) */}
        <main className="pl-16 pt-14">
          
          {/* Wrapper for the sticky filter navigation. It sticks to the top, just below the header. */}
          <div className="sticky top-14 z-10 bg-background border-b border-border px-6 py-2">
            <FilterNav />
          </div>

          {/* Wrapper for the main video content grid with padding for spacing */}
          <div className="px-6 py-8">
            <VideoCardGrid />
          </div>

        </main>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;