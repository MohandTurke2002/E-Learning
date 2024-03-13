import React from "react";

const SkeletonProductInfo = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="w-[200px] h-[30px] bg-slate-300 animate-pulse"></div>
      <div className="w-[450px] h-[150px] bg-slate-300 animate-pulse"></div>
      <div className="w-[350px] h-[30px] bg-slate-300 animate-pulse"></div>
      <div className="w-[150px] h-[30px] bg-slate-300 animate-pulse"></div>
      <div className="w-[200px] h-[50px] rounded-lg bg-slate-300 animate-pulse"></div>
    </div>
  );
};

export default SkeletonProductInfo;
