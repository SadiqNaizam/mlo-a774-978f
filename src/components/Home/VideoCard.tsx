import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreVertical, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Video {
  id: string;
  thumbnailUrl: string;
  duration: string;
  avatarUrl: string;
  title: string;
  channelName: string;
  isVerified: boolean;
  views: string;
  uploadedAt: string;
}

interface VideoCardProps {
  video: Video;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, className }) => {
  return (
    <div className={cn('flex flex-col space-y-3 group', className)}>
      <div className="relative cursor-pointer">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-auto object-cover rounded-xl transition-all duration-200 group-hover:rounded-none" />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded-sm font-medium">
          {video.duration}
        </span>
      </div>
      <div className="flex space-x-3">
        <Avatar className="flex-shrink-0 mt-0.5 cursor-pointer">
          <AvatarImage src={video.avatarUrl} alt={video.channelName} />
          <AvatarFallback>{video.channelName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 cursor-pointer">
          <h3 className="text-base font-medium text-primaryText leading-snug max-h-12 overflow-hidden">
            {video.title}
          </h3>
          <div className="text-sm text-secondaryText mt-1 space-y-0.5">
            <div className="flex items-center">
              <span>{video.channelName}</span>
              {video.isVerified && <CheckCircle className="w-3.5 h-3.5 ml-1.5 text-secondaryText fill-current" />}
            </div>
            <p>
              {video.views} views &bull; {video.uploadedAt}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 self-start opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
