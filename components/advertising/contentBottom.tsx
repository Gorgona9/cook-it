import { FC } from 'react';

const ContentBottom: FC = () => {
  return (
    <div
      className="mb-2 flex h-16 animate-pulse items-center justify-center rounded-md bg-gray-300 px-2 text-gray-600 shadow-md"
      style={{ minHeight: '200px', width: '100%' }}
    >
      Your Google AdSense ad could be here. But there is none.
    </div>
  );
};

export default ContentBottom;
