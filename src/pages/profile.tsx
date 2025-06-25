import React from 'react';
import MainAppLayout from '../components/layout/mainapplayout';
import { Button } from '@/components/ui/button';
import ProfileModal from '../components/profile/ProfileModal';
import { ThemeProvider } from '@/components/ThemeProvider';

const ProfilePage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="youtube-clone-theme">
        <MainAppLayout>
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
                <p className="text-muted-foreground mb-6">
                    This is your profile page. You can view and edit your profile information by opening the modal.
                </p>
                
                <ProfileModal>
                    <Button>Open Profile Modal</Button>
                </ProfileModal>
            </div>
        </MainAppLayout>
    </ThemeProvider>
  );
};

export default ProfilePage;