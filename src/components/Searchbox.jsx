import React from "react";

function Searchbox() {
  return (
    <div className="homepage-input">
      <form action="/search" method="get">
        <input
          name="city"
          placeholder="Please write your location"
          autoComplete="off"
        />
        <div className="btn">
          <button>Click</button>
        </div>
      </form>
    </div>
  );
}

export default Searchbox;
