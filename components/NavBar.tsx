import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
//import { AiOutlineSearch } from "react-icons/ai"; (or equivalent from MUI)
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?term=${searchTerm}`);
    setSearchTerm("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">home</Link>
      </p>

      <form onSubmit={handleSearch}>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-icon">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
