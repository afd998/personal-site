import React from "react";

function Project({ projectData }) {
  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-between ">
        <div className="">
          <h2 className="text-gray-700 text-xs font-bold dark:text-black  text-right mb-1">
            PROJECT
          </h2>
          <a
            href={projectData.name.link}
            className=" hover:underline text-5xl "
          >
            {projectData.name.text}
          </a>
          <h2 className="mt-2 text-sm text-gray-700">
            Client:{" "}
            <a href={projectData.client.link} className=" hover:underline  ">
              {projectData.client.text}
            </a>
          </h2>
        </div>
        <div className="md:w-96 pr-10 text-right text-2xl">
          <h3 className="text-gray-700 text-base font-bold dark:text-black  ">
            DESC:
          </h3>
          <p className="text-right">{projectData.desc}</p>
        </div>
      </div>

      <h3>Technology:</h3>
      <h4 className=" text-xl">Front-end: </h4>
      <p className=" text-base">
        Next.js for SEO purposes, but the majority of the app is in the deepweb
        as essentially a Next.JS page behaving as an SPA. Chakra-UI is used for
        a component library. Stripe for payment proccessing. react-table,
        react-hook-form and react-query are also used.
      </p>
      <h4 className=" text-xl">
        {" "}
        Back-end:
        <p className=" text-base">
          Firebase's firestore database is used and data is is accessed directly
          from firestore using the client side sdk
        </p>
      </h4>

      <img src="/images/cmbm/1.png" />

      <h3>Design:</h3>
    </div>
  );
}

export default Project;
