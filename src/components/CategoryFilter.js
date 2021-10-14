import React from "react";

function CategoryFilter({ categories, filterCat, activeCat }) {
  const displayCategories=categories.map((cat,index)=>{
    return <button key={index} onClick={filterCat} className={ activeCat==cat ? "selected" : "" }>{cat}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
