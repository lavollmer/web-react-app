import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

export default function SearchBox({}: Props) {
  return (
    <form className="flex relative items-center justify-center h-10">
      <input>
        <button>
          <CiSearch />
        </button>
      </input>
    </form>
  );
}
