import React from "react";
import { speakers } from "../helpers/speakers";
import Image from "next/image";
import Link from "next/link";
function SpeakerList() {
  //   const speakers =
  return (
    <div className="mt-16 flex flex-wrap w-full mb-36 max-w-[1400px] mx-auto">
      <h2 className="text-center w-full py-3 font-sembold text-5xl mb-10">
        Meet Speakers!
      </h2>
      {speakers.map(({ image, name, id }, index) => (
        <div key={index} className="p-3 w-full lg:w-1/4">
          <div
            key={index}
            className="max-w-sm rounded-md  overflow-hidden  px-3 py-2 shadow-lg relative"
          >
            <div className="relative h-48 ">
              <Image
                src={image}
                layout="fill"
                className="object-top rounded-md"
                alt="banner"
                objectFit="cover"
                priority
                loading="eager"
              />
            </div>
            <div className="px-2 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className=" pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <Link href={`/speaker/${id}`}>
                <a className="w-full text-center block py-3 hover:bg-opacity-95 cursor-pointer rounded-md mt-5 bg-black text-white">
                  Hire!
                </a>
              </Link>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpeakerList;
