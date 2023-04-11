import EachCategory from "./EachCategory"
import Search from "./Search";
import click from "../click.png"

const Categories = (
  { handleUpdateSubscribes,
    categoriesToDisplay,
    search,
    onSearch,
    handleDeleteActivity,
    activities,
    addActivity
    }) =>  {
    const categoryList = categoriesToDisplay.map((category) => {
      return (
        <div className="category_box" id={category.id}>
        <img className="click" src={click} alt="categories"/>
        <EachCategory
          key={category.id}
          category={category}
          addActivity={addActivity}
          handleDeleteActivity={handleDeleteActivity}
          handleUpdateSubscribes={handleUpdateSubscribes}
          activities={activities}
        />
       </div>
      )
    })
    return (
      <div className="events" id="categories">
          <Search search={search} onSearch={onSearch}
          />
          <ul className="category">{categoryList}</ul>
      </div>
    )
}

export default Categories;