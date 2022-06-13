import React from "react";
import SpeakerPage from "../../components/SpeakerPage";
import { speakers } from "../../helpers/speakers";

function speaker() {
  return (
    <main className="flex flex-break min-h-screen">
      <SpeakerPage />
    </main>
  );
}

export default speaker;

// export async function getServerSideProps(ctx) {
//   const { id } = await ctx.query;
//   const [data] = speakers.filter((spk) => spk.id == id);
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// }
