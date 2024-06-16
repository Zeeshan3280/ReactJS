import React from "react";
import Card from "./card";

function Foreground() {
  const data = [
    {
      desc: "Zeeshan khan Ipsum has been the industry's standard",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
    {
        desc: "Zeeshan khan Ipsum has been the industry's standard",
        filesize: ".9mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "blue",
        },
      },
     
  ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-6 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} />
      ))}
    </div>
  );
}

export default Foreground;
