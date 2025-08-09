import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/cardSlice";
import { setSearchTerm } from "../redux/slices/ProductSlice";

function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { card } = useSelector((store) => store.card);

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "#1f2937";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "#1f2937";
    }
    setTheme(!theme);
  };

  const { searchTerm } = useSelector((store) => store.product);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row items-center my-6 space-x-4">
        <img
          src="/logo.png"
          className="w-[60px] h-[60px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p className="font-bold text-xl">A Company</p>
      </div>
      <div className="flex flex-row space-x-8">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className=" border-b p-2 focus:outline-none"
        />
        <div className="flex flex-row items-center space-x-3">
          {theme ? (
            <FaMoon className="text-lg cursor-pointer" onClick={changeTheme} />
          ) : (
            <CiLight
              className="text-3xl cursor-pointer"
              onClick={changeTheme}
            />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={card.length}
            color="primary"
          >
            <CiShoppingBasket className="text-2xl cursor-pointer" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
