import React from "react";
import simon from "../images/sp (2).jpg";
import Image from "next/image";
import { getspeakers } from "../config/firebaseCrud";

function speakerProfile({ balance }) {
  const total_balance = balance ? balance : 0;

  return (
    <main className="pt-24">
      {/* speakers profile page */}

      <div className="w-48 mb-5 rounded-full h-48 mx-auto relative cursor-pointer block">
        <Image
          src={simon}
          layout="fill"
          alt="logo"
          priority
          loading="eager"
          className="rounded-full"
        />
      </div>
      <h1 className="text-center font-semibold text-3xl">Simon Sinek</h1>

      <p className=" text-center mt-4 text-xl font-medium bg-zinc-100 py-3 ">
        Balance = ${total_balance}
      </p>
    </main>
  );
}

export default speakerProfile;

export async function getServerSideProps(ctx) {
  const res = await getspeakers();

  // console.log(res);
  const { balance } = res[0];
  return {
    props: {
      balance,
    },
  };
}
