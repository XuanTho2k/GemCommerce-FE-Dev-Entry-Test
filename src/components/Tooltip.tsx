import React from "react";

const Tooltip = ({ tooltipContent }: { tooltipContent: string }) => {
  return (
    <div
      className="absolute invisible w-max opacity-0 group-hover:visible group-hover:opacity-100 
           transition bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 
           bg-[#212121]  font-normal text-xs px-2 py-1 rounded 
           after:content-[''] after:absolute after:top-full after:left-1/2 
           after:-translate-x-1/2 after:border-4 
           after:border-transparent after:border-t-[#212121]"
    >
      {tooltipContent}
    </div>
  );
};

export default Tooltip;
