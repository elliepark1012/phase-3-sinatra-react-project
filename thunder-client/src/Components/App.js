import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddNewCategory from "./AddNewCategory"
import Categories from "./Categories"
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";

function App() {
  const [categories, setCategories] = useState([]);
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("");

    useEffect(() => {
      fetch("http://localhost:9292/categories")
        .then((r) => r.json())
        .then((data) => setCategories(data));
    }, []);

    function addCategories(newCategory) {
      const updatedCategories = [newCategory, ...categories];
      setCategories(updatedCategories);
    }

    function addActivity(newActivity){
      const categoryToUpdate = categories.find((category) => {
        return category.id === newActivity.category_id;
      });

      const updatedActivities = [newActivity, ...categoryToUpdate.activities];
      categoryToUpdate.activities = updatedActivities;
      setCategories(
        categories.map((category) => (category.id === categoryToUpdate.id? 
          categoryToUpdate : category))
      )
      setActivities(updatedActivities);
    }

    function handleUpdateSubscribes(updateSubscribes) {
      const updatedSub = categories.map((category) => {
       return category.id === updateSubscribes.id ? updateSubscribes : category;
      });
      setCategories(updatedSub)
    }

    function handleUpdateActivity(updatedActivity) {
      const updatedCategories = categories.map((category) => {
        if (category.id === updatedActivity.category_id) {
           const updatedActivities = category.activities.map((activityObj) => {
              if (activityObj.id === updatedActivity.id) {
                  return updatedActivity
                  } else {
                  return activityObj
                }})
           return {
            ...category, activities: updatedActivities
           }
        }
          else {
            return category;
        }
      })
    setCategories(updatedCategories);
}

    function handleDeleteActivity(deletedActivity) {
          const updatedCategories = categories.map((category) => {
            if (category.id === deletedActivity.category_id) {
               const updatedActivities = category.activities.filter((activity) =>
                activity.id !== deletedActivity.id 
               )
               return {
                ...category, activities: updatedActivities
               }
            }
              else {
                return category;
              }
          })
        setCategories(updatedCategories);
    }
        
    const categoriesToDisplay = categories.filter((category) => {
      return category.name.toUpperCase().includes(search.toUpperCase());
    });
    
  return (
   <div className="wrapper">
      <NavBar />
      <div className="main">
      <Header />
      <AddNewCategory 
        addCategories={addCategories}
      />
      <Categories
         handleUpdateSubscribes={handleUpdateSubscribes}
         addActivity={addActivity}
         categories={categories}
         categoriesToDisplay={categoriesToDisplay}
         search={search} 
         onSearch={setSearch}
         handleDeleteActivity={handleDeleteActivity}
         handleUpdateActivity={handleUpdateActivity}
         />
      
      <AboutUs />
      </div>
    </div>
  )
}

export default App;
