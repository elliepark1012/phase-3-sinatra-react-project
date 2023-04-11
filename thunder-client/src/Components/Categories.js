import EachCategory from "./EachCategory"
import Search from "./Search";

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
        <EachCategory
          key={category.id}
          category={category}
          addActivity={addActivity}
          handleDeleteActivity={handleDeleteActivity}
          handleUpdateSubscribes={handleUpdateSubscribes}
          activities={activities}
        />
      )
    })
    return (
      <div className="events" id="allevents">
          <Search search={search} onSearch={onSearch}
          />
          <ul className="cards">{categoryList}</ul>
      </div>
    )
}

export default Categories;