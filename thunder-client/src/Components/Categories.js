import React from "react";
import EachCategory from "./EachCategory"

function Categories(
  { handleUpdateActivity,
    categoryToDisplay,
    search,
    onSearchChange,
    handleDeleteActivity,
    activities,
    addActivity
    }) 
  {
    const categoryList = categoryToDisplay.map((category) => {
      return (
        <EachCategory
          key={category.id}
          category={category}
          addActivity={addActivity}
          handleDeleteActivity={handleDeleteActivity}
          handleUpdateActivity={handleUpdateActivity}
          activities={activities}
        />
      )
    })
    return (
        <div className="events" id="allevents">
        <div className="search__container">
            <h3 className="search__title">Search Search Search!</h3>
            <input className="search__input"
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
              value={search}
              onChange={e => onSearchChange(e.target.value)}
            />
          </div>
          <ul className="cards">{categoryList}</ul>
    </div>
    )
}

export default Categories;