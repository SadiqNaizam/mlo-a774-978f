import React from 'react';
import VideoCard, { Video } from './VideoCard';

const VideoCardGrid: React.FC = () => {
  // CRITICAL: Dummy data defined directly in the component
  const videos: Video[] = [
    {
      id: '1',
      thumbnailUrl: 'https://i.ytimg.com/vi/a17nVI0mU4g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-0xU1yZmsXUnzUqA1mI8m2_Uu7g',
      duration: '16:41',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_k6T6h1u3t_G1j9jwz42uTxgEkJ1t-rrfO07xGu-A=s68-c-k-c0x00ffffff-no-rj',
      title: "Neil deGrasse Tyson's Life Advice Will Leave You SPEECHLESS - One of the Most Eye Opening Interviews",
      channelName: 'MotivationHub',
      isVerified: true,
      views: '4.6M',
      uploadedAt: '5 years ago',
    },
    {
      id: '2',
      thumbnailUrl: 'https://i.ytimg.com/vi/bXf1aVix_aE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgX-3yL_80uS_bX3i2tX1Zp-oQnA',
      duration: '4:25',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_n8-fVGUJsoYglScwFLIACY2sUTyvWcPj27upYk=s68-c-k-c0x00ffffff-no-rj',
      title: 'How Hackers Brute-Force SSH and Escalate to Root Privileges | TryHackMe Library | CTF Challenge',
      channelName: 'HackHunt',
      isVerified: false,
      views: '2K',
      uploadedAt: '2 days ago',
    },
    {
      id: '3',
      thumbnailUrl: 'https://i.ytimg.com/vi/S-fP01iYv5I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2Jm_M3u4Z6l_t-t4R-X1R0p5RjQ',
      duration: '15:36',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_kJ9C-215q1GDAia7-RzNBGF2bFA2gHnC5z1p41rA=s68-c-k-c0x00ffffff-no-rj',
      title: 'Hiphop Adhi PC Build 🔥| Multi GPU PC For @hiphoptamizha | Multi Gpu Worth-ah!',
      channelName: 'A2D Channel',
      isVerified: true,
      views: '1.1M',
      uploadedAt: '1 year ago',
    },
    {
      id: '4',
      thumbnailUrl: 'https://i.ytimg.com/vi/kCc8FmEb1nY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB55e-StgVHEHZTlJgJdDtTfC2u3w',
      duration: '0:32',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_kItvQNwB5T9s-a_gC42iN4GkLgqGCE81GfKg=s68-c-k-c0x00ffffff-no-rj',
      title: "We're ready! Are you? #GetChikitufied | COOLIE | Superstar",
      channelName: 'Sun Pictures',
      isVerified: true,
      views: '3.2M',
      uploadedAt: '3 days ago',
    },
     {
      id: '5',
      thumbnailUrl: 'https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLACXpLsoBvA3p6qPS1k54DdnxT0Yw',
      duration: '6:36',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_lD4ccQxT3mVB-p_4H7-32cPSn22n4K-27-04V3=s68-c-k-c0x00ffffff-no-rj',
      title: 'What is Retrieval-Augmented Generation (RAG)?',
      channelName: 'IBM Technology',
      isVerified: true,
      views: '250K',
      uploadedAt: '6 months ago',
    },
    {
      id: '6',
      thumbnailUrl: 'https://i.ytimg.com/vi/RzVvThhjAKw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_7cRUkc0N4V84pL7pP4lT9f8r-Q',
      duration: '12:15',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_l-V8r2I7K42rDUw4d5d4d3d-c3b2a1a0b-1=s68-c-k-c0x00ffffff-no-rj',
      title: 'Building a SaaS with Next.js, Tailwind, and Supabase',
      channelName: 'CodeWithAntonio',
      isVerified: true,
      views: '1.2M',
      uploadedAt: '1 year ago',
    },
    {
      id: '7',
      thumbnailUrl: 'https://i.ytimg.com/vi/FBgLytbB-uE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvj2z_rY3m_c4c4b3a2a1a0b-1=s68-c-k-c0x00ffffff-no-rj',
      duration: '22:01',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_l1Z2e-d3d-c4c4b3a2a1a0b-1=s68-c-k-c0x00ffffff-no-rj',
      title: 'The Ultimate TypeScript Tutorial',
      channelName: 'Fireship',
      isVerified: true,
      views: '980K',
      uploadedAt: '11 months ago',
    },
    {
      id: '8',
      thumbnailUrl: 'https://i.ytimg.com/vi/q-D0p_m-cfE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_7cRUkc0N4V84pL7pP4lT9f8r-Q',
      duration: '8:42',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AIdro_l1Z2e-d3d-c4c4b3a2a1a0b-1=s68-c-k-c0x00ffffff-no-rj',
      title: 'Chillstep Music for Programming / Coding',
      channelName: 'ChilloutDeer',
      isVerified: false,
      views: '12M',
      uploadedAt: '4 years ago',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoCardGrid;
