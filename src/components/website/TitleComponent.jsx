import React from "react";
import { Link } from "react-router-dom";

function TitleComponent() {
  return (
    <>
      <div className="flex justify-between items-center py-6 relative">
        <div>
          <h1 className="font-bold text-3xl">Trending Products</h1>
        </div>
        <div className="flex items-center justify-between gap-10 text-lg font-semibold text-gray-400 before:h-[2px] before:w-[420px] before:bg-gray-100 before:absolute before:left-[430px] before:top-[50%]">
            <Link to=''>New</Link>
            <Link to=''>Featured</Link>
            <Link to=''>Top Sellers</Link>
        </div>
      </div>
    </>
  );
}

export default TitleComponent;
