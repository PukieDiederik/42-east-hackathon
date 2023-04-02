import { useState } from "react";
import "./home.css";
import AllMatchNames from "./search/search";

export function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <span className="material-symbols-outlined">search</span>
          <input
            id="search"
            type="text"
            onChange={handleChange}
            value={query}
            placeholder="search any 42 student"
          />
        </label>
      </form>
      <div className="all-match-elements">{search && <AllMatchNames search={search} />}</div>
    </div>
  );
}

