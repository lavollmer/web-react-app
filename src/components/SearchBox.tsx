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
      <input
        type="text"
        placeholder={placeholder}
        // px-4: Sets the horizontal padding of the element to 4 units.
        // py-2: Sets the vertical padding of the element to 2 units.
        // w-[230px]: Sets the width of the element to a fixed value of 230 pixels.
        // border: Adds a border to the element.
        // border-gray-300: Sets the color of the border to a shade of gray (specifically, gray-300).
        // rounded-1-md: Applies a medium level of border radius to round the corners of the element.
        // focus:outline-none: Removes the outline when the element is in focus.
        // focus:border-blue-500: Sets the border color to blue-500 when the element is in focus.
        // h-full: Sets the height of the element to 100% of its parent container.
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-1-md focus:outline-none focus:border-blue-500 h-full"
      />
      {/* px-4 sets the horizontal padding of an element to 4 units, bg-blue-500 sets the background color of an element to a shade of blue, text-white sets the text color of an element to white, rounded-r-md applies rounded corners to the right side of an element, focus:outline-none removes the outline that appears around an element when it is in focus, hover:bg-blue-600 changes the background color of an element to a different shade of blue when the element is being hovered over., whitespace-nowrap prevents text from wrapping to the next line and keeps it on a single line., 
h-full sets the height of an element to 100% of its parent container. */}
      <button>
        <CiSearch className="px-4 py-[9x] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 whitespace-nowrap h-full" />
      </button>
    </form>
  );
}
