import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {

 const[input,setInput]=useState();

 

    function handleClick(e){
        e.preventDefault();
        console.log(input)
        
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
      <form  className="m-[2rem] flex" onClick={(e)=>{handleClick(e)}} >
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="Text" className=" focus:outline-none rounded-l-[1rem] w-[25rem] h-[3.4rem] pl-[1rem]  "></input>
        <Link to={"search/"+input}><button  className="bg-blue-300 h-[3.4rem] w-[5rem] rounded-r-[1rem] focus:outline-pink-600 ">Search</button></Link>
      </form>
    </div>
  );
};

export default Hero;



