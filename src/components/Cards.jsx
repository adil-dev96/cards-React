import React from "react";

const Cards = ({ profiles }) => {
  console.log(profiles);
  return (
    <div
      className="w-[15rem] bg-[#FCFCFC] h-[22rem] m-[1rem]  rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
  hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition duration-300 cursor-pointer"
    >
      <div
        className="relative w-full  h-[5rem] rounded-xl bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${profiles.cover})`,
        }}
      >
        <div className="w-6 h-6  rounded-full absolute right-2 top-1 bg-[#EFEFEF] flex items-center justify-center ">
          <i className="ri-add-line"></i>
        </div>
        <div
          className="absolute w-18 h-18 rounded-full -bottom-10 left-1/2 -translate-x-1/2  bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${profiles.avatar})`,
          }}
        ></div>
      </div>

      <div className="mt-15 flex items-center justify-center flex-col ">
        <h1 className="text-center font-semibold text-[#1a1a1a] ">
          {profiles.name}
        </h1>
        <p className="text-center font-normal text-xs mt-2  max-w-[14rem] text-[#7B7B7B] ">
          {profiles.role}
        </p>
      </div>

      <div className="w-[100%] h-[4rem] mt-7 rounded-xl  flex items-center justify-evenly text-center bg-[#EFEFEF] shadow-lg">
        <div>
          <h1 className="font-semibold">{profiles.likes}</h1>
          <h3 className="text-xs text-[#727171] font-medium ">Likes</h3>
        </div>
        <div>
          <h1 className="font-semibold">{profiles.posts}</h1>
          <h3 className="text-xs text-[#727171] font-medium ">Posts</h3>
        </div>
        <div>
          <h1 className="font-semibold">{profiles.views}</h1>
          <h3 className="text-xs text-[#727171] font-medium ">Views</h3>
        </div>
      </div>

      <div className="flex justify-center gap-8 items-center h-11  ">
        <i className="ri-instagram-line"></i>
        <i className="ri-twitter-x-line"></i>
        <i className="ri-at-line"></i>
      </div>
    </div>
  );
};

export default Cards;
