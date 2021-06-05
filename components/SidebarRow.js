import React from "react";
import Image from "next/image";

const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className="flex cursor-pointer items-center p-2 xsm:p-4 xsm:space-x-2 hover:bg-gray-200 rounded-xl">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
