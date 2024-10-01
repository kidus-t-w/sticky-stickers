import React from 'react';

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center mt-6">
      {/* Left Orange Div */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-16 w-8 md:w-56 rounded-r-full"></div>
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-black px-4 md:mr-24">
        {title}
      </h1>

      {/* Right Orange Div */}
      <div className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 h-16 rounded-l-full"></div>
    </div>
  );
};

export default PageTitle;
