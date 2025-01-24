import React from 'react'
import '../Search/Search.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchbox w-[100%] h-[50px] bg-[#E5E5E5] rounded-lg relative p-2">
        <input type="text" placeholder='Search for Products' className='w-[100%] h-[35px] rounded-lg bg-inherit focus:outline-none p-2 text-[15px]' />
        <Button className='!absolute top-[8px] right-[5px] !w-[37px] z-50 !min-w-[37px] !h-[37px] !rounded-full text-[#4e4e4e]'> <IoSearch className='text-[#4e4e4e] text-[25px]' /></Button>
    </div>
  )
}

export default Search