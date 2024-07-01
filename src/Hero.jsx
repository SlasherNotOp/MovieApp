import React from "react";

const Hero = () => {
    function handleClick(e){
        e.preventDefault();
        
    }
  return (
    <div className="flex flex-col h-[100vh] justify-center align-center w-[100%] text-center items-center

    ">
      <h1 className="text-5xl font-bold text-white text-[5rem]">Welcome.</h1>
      <p className="max-w-lg text-center text-white text-[1rem]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        exercitationem nisi necessitatibus totam vero dolore nihil quas ipsum!
        Labore, totam.
      </p>
      <form className="m-[1rem]" onClick={(e)=>{handleClick(e)}}>
        <input type="Text" className=" hover:none focus:outline-none rounded-l-[1rem]	  w-[25rem] h-[3.5rem] "></input>
        <button type="submit" className="bg-blue-300 h-[3.5rem] w-[5rem] rounded-r-[1rem] focus:outline-pink-600">Search</button>
      </form>
    </div>
  );
};

export default Hero;



