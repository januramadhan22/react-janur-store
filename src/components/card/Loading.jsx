import React from "react";

function LoadingAllProducts() {
  return (
    <div className="w-full flex flex-col gap-2 bg-transparent border border-slate-300 rounded-sm animate-pulse p-2">
      <div className="w-full h-52 flex justify-center bg-slate-300 rounded-sm">
        <div className="h-full object-contain" />
      </div>
      <div className="w-full px-2 space-y-1 text-left">
        <div className="h-6 w-full bg-slate-300 rounded-sm" />
        <div className="h-4 w-1/3 bg-slate-300 rounded-sm" />
        <div className="h-4 w-1/4 bg-slate-300 rounded-sm" />
      </div>
    </div>
  );
}

function LoadingCategories() {
  return (
    <div className="w-full h-72 flex justify-center items-center rounded-sm bg-slate-400 animate-pulse">
      <div className="w-8/12 h-10 bg-slate-200 rounded-sm" />
    </div>
  );
}

export { LoadingAllProducts, LoadingCategories };
