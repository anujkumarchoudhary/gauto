// components/Header.js
import React from 'react';
import Icons from '../ui/Icons';
import { HeaderData } from '@/mockdata/HeaderData';
import ImageRenderer from '../ui/ImageRenderer';
const TopHeader = () => {
  return (
    <div>
      <div className="flex justify-between px-[5%] py-2 bg-[#020202] text-white text-sm">
        <div className="flex gap-6">
          {HeaderData.leftSide.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item.icon && <Icons name={item.icon} />}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-6">
          {HeaderData.rightSide.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item.icon && <Icons name={item.icon} />}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-white px-[5%] py-[1rem] flex justify-between'>
        {HeaderData?.midHeader?.map((item, i) => (<div key={i} className={`flex  items-center gap-4 ${item.icon === "phone" && "bg-[#EC3323] text-white px-5"}`}>
          {item.icon ? (
            <Icons name={item.icon} />
          ) : (
            item.image && (
              <ImageRenderer
                name={item.image}
                width={item.image === "logo" ? 180 : 40}
                height={item.image === "logo" ? 180 : 40}
              />
            )
          )}

          <div>
            <h4 className={item.icon === "phone" ? " text-md text-capitalize font-bold" : "text-xl font-bold"}>{item.name}</h4>
            <span className='text-sm text'> {item.label}</span>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default TopHeader;
