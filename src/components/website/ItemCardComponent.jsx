import React from "react";
import item from "../../assets/images/item.png";

function ItemCardComponent() {
  return (
    <>
      <div className=" flex items-center justify-between my-4 mb-10 gap-8">
        <div className="w-[250px]">
          <img src={item} alt="" className="h-72 w-full border rounded-t-xl" />
          <div className="border rounded-b-xl border-t-0 p-4">
            <p className="text-xs font-semibold text-gray-600">Headphones</p>
            <h2 className="font-semibold">Headphones Wireless</h2>
            <div className="flex items-center gap-2 ">
              <p className="text-xs font-bold line-through text-gray-600 ">
                $120
              </p>
              <h4 className="font-bold text-cyan-500">$103.20</h4>
            </div>
          </div>
        </div>

        <div className="w-[250px]">
          <img src={item} alt="" className="h-72 w-full border rounded-t-xl" />
          <div className="border rounded-b-xl border-t-0 p-4">
            <p className="text-xs font-semibold text-gray-600">Headphones</p>
            <h2 className="font-semibold">Headphones Wireless</h2>
            <div className="flex items-center gap-2 ">
              <p className="text-xs font-bold line-through text-gray-600 ">
                $120
              </p>
              <h4 className="font-bold text-cyan-500">$103.20</h4>
            </div>
          </div>
        </div>

        <div className="w-[250px]">
          <img src={item} alt="" className="h-72 w-full border rounded-t-xl" />
          <div className="border rounded-b-xl border-t-0 p-4">
            <p className="text-xs font-semibold text-gray-600">Headphones</p>
            <h2 className="font-semibold">Headphones Wireless</h2>
            <div className="flex items-center gap-2 ">
              <p className="text-xs font-bold line-through text-gray-600 ">
                $120
              </p>
              <h4 className="font-bold text-cyan-500">$103.20</h4>
            </div>
          </div>
        </div>

        <div className="w-[250px]">
          <img src={item} alt="" className="h-72 w-full border rounded-t-xl" />
          <div className="border rounded-b-xl border-t-0 p-4">
            <p className="text-xs font-semibold text-gray-600">Headphones</p>
            <h2 className="font-semibold">Headphones Wireless</h2>
            <div className="flex items-center gap-2 ">
              <p className="text-xs font-bold line-through text-gray-600 ">
                $120
              </p>
              <h4 className="font-bold text-cyan-500">$103.20</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCardComponent;
