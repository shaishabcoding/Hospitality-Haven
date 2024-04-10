import { useState } from "react";
import Estate from "./components/estate/Estate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ListedEstate = () => {
  const navigate = useNavigate();
  const [sort, setSort] = useState("");
  const [checkedTab, setCheckedTab] = useState("fav");
  const handleTabChange = (event) => {
    setCheckedTab(event.target.value);
  };
  return (
    <div className="lg:mt-6 mt-4 mx-3 lg:mx-0 lg:mb-16 mb-4">
      <Helmet>
        <title>Listed Estates</title>
      </Helmet>
      <header>
        <h2 className="lg:text-5xl text-3xl font-bold text-center mb-4 lg:mb-6 font-playfair rounded-lg p-6 lg:p-8">
          Listed Estates
        </h2>
      </header>
      <div className="flex items-center justify-center gap-4">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="select bg-pink-400 rounded-lg  outline-none text-white"
        >
          <option hidden>Sort</option>
          <option value="area">Area</option>
          <option value="price">Price</option>
          <option value="estate_title">Name</option>
        </select>
        <button
          className="btn btn-error text-white"
          onClick={() => {
            localStorage.clear();
            navigate(0);
          }}
        >
          Clear <RiDeleteBin6Line />
        </button>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-4 lg:mt-12">
        <input
          type="radio"
          name="tab"
          role="tab"
          value="fav"
          className="tab text-nowrap"
          aria-label="Favorite"
          checked={checkedTab === "fav"}
          onChange={handleTabChange}
          readOnly
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4 lg:p-6"
        >
          <Estate mode="fav" sort={sort} />
        </div>

        <input
          type="radio"
          name="tab"
          role="tab"
          value="booked"
          className="tab text-nowrap"
          aria-label="Booked"
          onChange={handleTabChange}
          checked={checkedTab === "booked"}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Estate mode="booked" sort={sort} />
        </div>

        <input
          type="radio"
          name="tab"
          role="tab"
          value="buy"
          className="tab text-nowrap"
          aria-label="Buy"
          onChange={handleTabChange}
          checked={checkedTab === "buy"}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Estate mode="buy" sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default ListedEstate;
