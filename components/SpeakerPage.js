import { useEffect } from "react";
import Image from "next/image";

// import slider images
import sl1 from "../images/img (1).jpg";
import sl2 from "../images/img (2).jpg";
import sl3 from "../images/img (3).jpg";
import sl4 from "../images/img (4).jpg";
import sl5 from "../images/img (5).jpg";
import PaymentButton from "./PaymentButton";
import speaker from "../pages/speaker/[id]";
function SpeakerPage() {
  const data = {
    name: "Simon Sinek",
    fee: "80",
    image: "/images/sp (2).jpg",
    id: 2,
  };
  const sliderImages = [sl1, sl2, sl3];

  return (
    <>
      {" "}
      <section className="w-[40%] relative">
        <Image
          src={data.image}
          layout="fill"
          className="object-top z-10 rounded-tr-lg rounded-br-lg"
          alt="banner"
          objectFit="cover"
          priority
          loading="eager"
        />
        <span className=" absolute h-full w-full rounded-tr-lg rounded-br-lg bg-[#00000050] z-20"></span>
      </section>
      <section className="w-full lg:w-[60%] lg:p-10 p-5">
        <h1 className="text-zinc-700 font-medium text-4xl mt-3 mb-2 mx-2">
          {data.name}
        </h1>
        <h2 className="font-bold text-sm mt-7 mb-2">About </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id!
          Velit quaerat, aliquid corrupti illum, aperiam distinctio provident
          vero atque quas, assumenda minima quisquam rem alias amet eum cum sed?
        </p>
        <br />

        <div className="flex  overflow-x-scroll w-full gap-x-4 my-6">
          {sliderImages.map((image, index) => (
            <div key={index} className="relative h-48 w-[300px]">
              <Image layout="fill" className="object-cover" src={image} />
            </div>
          ))}
        </div>
        <h4 className="bg-grey-200 py-2 rounded-full w-fit mx-auto px-10 text-black font-semibold text-2xl text-center w">
          <i>FEE - </i> ${data.fee}
        </h4>

        <br />
        <PaymentButton fee={data.fee} />
      </section>
    </>
  );
}

export default SpeakerPage;
