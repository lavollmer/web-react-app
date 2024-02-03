//import necessary dependencies
import React from "react";
import { CiSearch } from "react-icons/ci";

//defines a type called Props
type Props = { placeholder: string };

//exported as default module - component accepts placeholder prop
//SearchBox has a form element with input and a button that passes the placeholder prop through
export default function SearchBox({ placeholder }: Props) {
  return (
    <form className="flex relative items-center justify-center h-10">
      <input placeholder={placeholder} />
      <button>
        <CiSearch />
      </button>
    </form>
  );
}
