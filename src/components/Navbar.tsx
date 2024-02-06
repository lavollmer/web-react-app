import React from "react";
import { MdWbSunny } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";

// type Props = { ... }: This line declares a new type called Props using the type keyword. The type is an object type, indicated by the curly braces {}.
// className?: string;: This line defines an optional prop called className of type string. The ? indicates that the prop is optional and can be omitted when using the Navbar component.
// onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;: This line defines a required prop called onChange of type React.ChangeEventHandler<HTMLInputElement>. This prop is a function that handles the change event of an HTML input element. The | undefined allows the prop to be undefined if not provided.
// value: string;: This line defines a required prop called value of type string. This prop represents the value of an input element.
// onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;: This line defines an optional prop called onSubmit of type React.FormEventHandler<HTMLFormElement>. This prop is a function that handles the submit event of an HTML form element. The | undefined allows the prop to be undefined if not provided.
type Props = {
  className?: string;
  // placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function Navbar({ props }: Props) {
  return (
    // sticky = stick navbar on position, left-0 position of navbar
    <nav className=" shadow-sm sticky top-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </div>
        <section className="flex gap-2 items-center">
          <FaLocationCrosshairs className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm"> Minnesota</p>
          <div>
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}
