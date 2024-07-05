import React from 'react'

const Moviedata = ({data}) => {
  return (
    <div  className=" h-[20rem] mx-[1rem] my-[1rem] mb-[6rem]">
        <img src={"https://image.tmdb.org/t/p/original//" + data.poster_path} className="w-full h-full object-cover rounded-[1rem]"></img>
        <h1>{data.title||data.name}</h1>
        <p>{data.release_date||data.first_air_date}</p>
    </div>
  )
}

export default Moviedata