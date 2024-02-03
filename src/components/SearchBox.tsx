import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = { placeholder: string };

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
