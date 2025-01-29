import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-b-[2px] border-gray-250">
        <div className="container">
          <div className="flex items-center justify-between ">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex item-center justify end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center{" "}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link font-[500] transition"
                  >
                    Order Tracking{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3 border-b-[2px] border-gray-250">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%] py-5">
            <Link to={"/"}>
              <img src={logo} style={{ height: "50px" }} />
            </Link>
          </div>
          <div className="col2 w-[45%] pl-5">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-5">
            <ul className="flex items-center gap-3 w-full justify-end">
              <li className="list-none">
                <Link
                  to={"/Login"}
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
                &nbsp;/&nbsp;
                <Link
                  to={"/Register"}
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>

              <li>
                <Tooltip title="Wish-List">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={1} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={0} color="secondary">
                      <GoGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={1} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <NavBar/>

    </header>
  );
};

export default Header;
