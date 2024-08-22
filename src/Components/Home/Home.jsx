import React from "react";
import "../Home/Home.css";

import { RxNotionLogo } from "react-icons/rx";
import { CgDesignmodo } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Home() {
  return (
    <>
      <section className="container mx-auto">
        <div className="pt-44 h-[94vh]">
          <div className=" h-[60%] flex items-center justify-between p-36 bg-[#1c1c1e] text-white rounded-lg">
            <div className=" max-w-1/2">
              <h1 className="text-5xl leading-tight">
                Learn new skill <span className="text-[#1ed760]">online</span>
                <br /> on your time
              </h1>
              <p className="my-5 text-base">
                Learn from Industry Experts and Enhance Your Skills
              </p>
              <button className="px-6 py-3.5 mr-2 border-none rounded-full cursor-pointer bg-[#ed145b] text-white">
                Get Started
              </button>
              <button className="px-6 py-3.5 mr-2 border-none rounded-full cursor-pointer bg-white text-[#ed145b]">
                ▶
              </button>
            </div>
            <div className="hero-image">
              <img
                className="w-[200px] h-[200px] rounded-full border-3 border-dashed border-[#ed145b] p-2"
                src="https://via.placeholder.com/170"
                alt="Hero"
              />
            </div>
          </div>
          <div className="search-bar flex justify-center w-4/5 py-5 bg-[#f8f8f8] rounded-lg my-[-30px] mx-auto">
            <input
              type="text"
              className="rounded-full p-3.5 w-[48rem]"
              placeholder="search course"
            />
            <button
              className=" px-8  mx-5 rounded-full 
            bg-[#ed145b] text-white border-none cursor-pointer"
            >
              Search
            </button>
          </div>
          <div className=" h-32 mt-28 flex justify-around text-6xl items-center">
            <RxNotionLogo />
            <FaJsSquare className="text-[#ffbf00]" />
            <FaReact className="text-[#9bddff]" />
            <RiTailwindCssFill className="text-[#007fff]" />
            <CgDesignmodo />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="h-[100vh]">
          <div className="flex flex-col justify-center items-center mt-20 ">
            <h2 className="text-4xl font-semibold leading-tight">
              Worlds Largest
            </h2>
            <h2 className="text-4xl font-semibold leading-tight">
              Selection Of Courses
            </h2>
            <hr className="custom-line w-20 h-2 rounded-lg mx-auto mt-2 bg-[#ed145b]" />
          </div>
          <div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
