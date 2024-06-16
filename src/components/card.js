import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Card({ data }) {
  return (
    <div className="relative flex-shrink-0  w-60 h-72 rounded-[20px] bg-zinc-900 text-white px-6 py-9 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex item-center justify-between px-8 py-3 mb-2">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 py-1.5 bg-zinc-600 rounded-full flex item-center justify-center">
            {data.close ? <IoClose /> : <MdOutlineFileDownload color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-am font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
