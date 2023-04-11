import EachCategory from "./EachCategory"
import Search from "./Search";
import click from "../click.png"

const Categories = (
  { handleUpdateSubscribes,
    categoriesToDisplay,
    search,
    onSearch,
    handleDeleteActivity,
    handleUpdateActivity,
    addActivity
    }) =>  {
    const categoryList = categoriesToDisplay.map((category) => {
      return (
        <div className="category_box" key={category.id}>
        <img className="click" src={click} alt="categories"/>
        <EachCategory
          key={category.id}
          category={category}
          addActivity={addActivity}
          handleDeleteActivity={handleDeleteActivity}
          handleUpdateActivity={handleUpdateActivity}
          handleUpdateSubscribes={handleUpdateSubscribes}
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