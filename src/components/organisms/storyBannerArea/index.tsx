import { StoryImageContainer } from '@/components/molecules/storyImageContainer';
import { StoryTextContainer } from '@/components/molecules/storyTextContainer';
import { FC } from 'react';

export const StoryBannerArea: FC = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col ">
      <StoryTextContainer />
      <StoryImageContainer />
    </div>
  );
};
