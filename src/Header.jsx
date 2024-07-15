import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-slate-500 p-[1rem] text-white '>
      <Link to={"/"} className="sm:ml-[5rem] ml-4"><h1>Logo</h1></Link>
      <ul className='flex gap-[1rem] sm:mr-[5rem] mr-4'>
        <li><Link to={"/movie"}>Movie</Link></li>
        <li><Link to={"/series"}>Series</Link></li>
      </ul>
    </div>
  )
}

export default Header
