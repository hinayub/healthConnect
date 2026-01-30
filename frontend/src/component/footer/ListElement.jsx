import React from "react";

const ListElement = ({ text }) => {
  return (
    <>
      <li class="">
        <a href="#" class="hover:underline text-text-gray">
          {text}
        </a>
      </li>
    </>
  );
};

export default ListElement;
