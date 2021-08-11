import React, { useRef } from "react";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const searchValue = useRef<HTMLInputElement | null>(null);

  const handleClickBtn = () => {
    onSubmit(searchValue.current?.value as string);
  };
  const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(searchValue.current?.value as string);
    }
  };

  return (
    <div className="pt-2 relative mx-auto text-gray-600 inline-block">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search repository name..."
        ref={searchValue}
        onKeyPress={handlePressKey}
      />
      <button
        onClick={handleClickBtn}
        aria-label="submit"
        className="absolute right-0 top-0 mt-5 mr-4"
      >
        <SearchIcon />
      </button>
    </div>
  );
};


export default SearchBar