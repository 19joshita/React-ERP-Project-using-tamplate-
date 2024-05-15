import React from "react";
import communityIcon from "./../../assets/community/community-ivon.svg";
import { FaLocationDot } from "react-icons/fa6";
import lineIcon from "./../../assets/community/line-icon.svg";

type Props = {
  communityData: any[];
};

const Community = ({ communityData }: Props) => {
  return (
    <div className="flex flex-col items-start justify-center 2xl:px-[300] xl:px-[200px] lg:px-[100px] sm:px-[50px] px-6  w-full">
      <div className="flex">
        <div className="flex gap-3 items-center">
          <img src={communityIcon} alt="#" />
          <h1 className="text-[34px] font-sarif">Communities</h1>
        </div>
        <div className="mt-20">
          <img src={lineIcon} alt="" />
        </div>
      </div>

      <div className="w-full flex-col ">
        <h2 className="text-[22px] font-mono ">
          New homes trending around New York
        </h2>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10  py-10">
          {communityData?.map((community: any, index: number) => {
            return (
              <div key={index}>
                <div className="shadow-md w-full">
                  <div className="card h-[150px] w-full">
                    <img
                      src={community?.image}
                      alt=""
                      className="h-[200px] w-full hover:scale-130"
                    />
                  </div>
                  {/* <img
                    src={image1}
                    alt=""
                    className="h-[200px] w-full hover:scale-130"
                  /> */}

                  <div className="p-2">
                    <h3 className="text-[20px] font-medium">
                      {community?.projectName}
                    </h3>
                    <p>From $ {community?.price}</p>
                    <div className="flex gap-1 item-center">
                      <span>
                        <FaLocationDot className="mt-1" />
                      </span>
                      <span>{community?.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;
