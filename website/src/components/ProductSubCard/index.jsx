import React from 'react';

import {Meteors, Button} from '../ui';

const ProductSubCard = ({SegmentData, HomePageData}) => {
  return (
    <div className="group relative block h-full w-full p-2">
      <div className=" relative w-full">
        <div
          className={`absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-${HomePageData.baseColor} bg-gradient-to-r from-${HomePageData.baseColor} to-${HomePageData.gradientColor} blur-2xl`}
        />
        <div
          className={`border-2 border-brand/40 relative flex h-full flex-col items-start  justify-end overflow-hidden rounded-2xl  bg-gray-100 p-6  px-4 py-8 shadow-xl dark:bg-neutral-900`}>
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="relative z-50 mb-4 text-xl font-bold">
            {SegmentData.name}
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            {SegmentData.description}
          </p>

          <Button className="rounded-full border border-gray-500 px-4 py-1">
            Explore
          </Button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={2} />
        </div>
      </div>
    </div>
  );
};

export default ProductSubCard;
