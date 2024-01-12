import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MdExplore } from "react-icons/md";

const FilterBtnList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const list = ["Movies", "Music", "Live", "Javascript", "ReactJS"];
  const mdList = [
    "NextJs",
    "Series",
    "Laptops",
    "Cricket",
    "Cars",
    "Sports",
    "Games",
    "Jukebox",
    "Disney",
    "Mixes",
  ];

  const buttonList = (list, style) =>
    list.map((btn, i) => (
      <Link key={i} to={"/results/?search_query=" + btn}>
        {/* px-5 py-2 m-2 bg-gray-200 rounded-lg  */}
        <button
          className={`${
            filter === btn ? "bg-gray-800 text-gray-50" : "bg-gray-100"
          } ${style} `}
        >
          {btn}
        </button>
      </Link>
    ));

  const style = "p-2 m-1 rounded-lg shadow-sm";
  const mdStyle = "p-2 m-1 rounded-lg hidden md:block";

  return (
    <div>
      <div className="flex items-center border-b-2 md:border-none md:justify-center">
        <Link to={"/"}>
          <button className="flex items-center bg-gray-100 p-1 m-1 rounded-lg">
            <MdExplore /> Explore
          </button>
        </Link>
        <span className="border-r-2 border-gray-200 h-6"></span>
        {buttonList(list, style)}
        {buttonList(mdList, mdStyle)}
      </div>
    </div>
  );
};

export default FilterBtnList;