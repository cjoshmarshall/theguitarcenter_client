import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { Checkbox } from "@mui/material";
import { grey } from "@mui/material/colors";

function ProductsPage() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  // console.log(category)
  // console.log(location)

  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("most popular");

  // const handleFilter=(e)=>{
  //   const value=e.target.value;
  //   const changeChecked={...filter,[e.target.name]:value}
  //   setFilter(changeChecked)
  // }
  // console.log(filter)
  // console.log(sort)

  const { value, id, checked } = filter;
  const handleFilter = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const changeChecked =
      filter.value === value ? { ...filter, checked: !filter.checked } : filter;
    setFilter(changeChecked);
    // console.log(value)
    // console.log(filter)
    // console.log(changeChecked)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Announcement />
      <div>
        <h1 className="productsPage_title">GUITARS</h1>
        <div className="productsPage_container">
          <div className="productsPage_filterContainer">
            <select
              className="productsPage_filterSelect"
              onClick={(e) => setSort(e.target.value)}
            >
              <option value="most popular">Most Popular</option>
              <option value="price low to high">Price Low To High</option>
              <option value="price high to low">Price High To Low</option>
              <option value="product name a-z">Product Name A-Z</option>
              <option value="product name z-a">Product Name Z-A</option>
            </select>
            <div className="productsPage_filterSubcontainer">
              <h3 className="productsPage_subtitle">SERIES</h3>
              <ul className="productsPage_filterList2" onChange={handleFilter}>
                <li className="productsPage_filterListsButton">
                  <Checkbox
                    name="series"
                    id="1"
                    value="Little"
                    disableRipple
                    checked={false}
                    sx={{
                      color: grey[900],
                      "&.Mui-checked": { color: grey[900] },
                    }}
                  />
                  <span>Little Series</span>
                </li>
                <li className="productsPage_filterLists2">
                  <button className="productsPage_filterListsButton">
                    <Checkbox
                      name="series"
                      id="2"
                      value="X"
                      disableRipple
                      checked={false}
                      sx={{
                        color: grey[900],
                        "&.Mui-checked": { color: grey[900] },
                      }}
                    />
                    <span>X-Series</span>
                  </button>
                </li>
                <li className="productsPage_filterLists2">
                  <button className="productsPage_filterListsButton">
                    <Checkbox
                      name="series"
                      id="3"
                      value="Standard"
                      disableRipple
                      checked={false}
                      sx={{
                        color: grey[900],
                        "&.Mui-checked": { color: grey[900] },
                      }}
                    />
                    <span>Standard Series</span>
                  </button>
                </li>
                <li className="productsPage_filterLists2">
                  <button className="productsPage_filterListsButton">
                    <Checkbox
                      name="series"
                      id="4"
                      value="Modern Deluxe"
                      disableRipple
                      checked={false}
                      sx={{
                        color: grey[900],
                        "&.Mui-checked": { color: grey[900] },
                      }}
                    />
                    <span>Modern Deluxe Series</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Products category={category} filter={filter} sort={sort} />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductsPage;
