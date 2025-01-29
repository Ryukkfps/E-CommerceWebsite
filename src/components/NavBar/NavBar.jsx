import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";;

const NavBar = () => {
  return (
    <nav className="p-2">
      <div className="container flex items-center justify-end gap-8">
        <div className="col1 w-[20%]">
          <Button className="!text-black w-full">
            <RiMenu2Line className="text-[18px]" />
            &nbsp; Shop By Categories &nbsp;{" "}
            <FaAngleDown className="text-[14px] ml-auto" />
          </Button>
        </div>
        <div className="col2 w-[60%]">
          <ul className="flex items-center gap-5">
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Fashion
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Electronics
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Bags
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Footwear
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Groceries
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Beauty
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[16px] font-[500]">
                Wellness
              </Link>
            </li>
          </ul>
        </div>
        <div className="col3 w-[20%]">
          <div className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
          <MdOutlineRocketLaunch  className="text-[20px]"/>
            Free International Delivery
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
