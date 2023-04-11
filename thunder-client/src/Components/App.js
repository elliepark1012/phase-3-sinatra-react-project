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
       return category.id === updateSubscribes.id ? updateSubscribes : categories;
      });
      setCategories(updatedSub)
    }

    function handleDeleteActivity(deletedActivity) {
      const categoryToUpdate = categories.find((category) => {
        return category.id === deletedActivity.category_id;
    });

      const updatedActivity = categoryToUpdate.activities.filter((activity) => {
        return activity.id !== deletedActivity.id;
      });

      categoryToUpdate.activities = updatedActivity;
        setCategories(
          categories.map((category) => (category.id === categoryToUpdate.id ? 
            categoryToUpdate : category))
        );
        setActivities(updatedActivity);
    }
        
    const categoriesToDisplay = categories.filter((category) => {
    category.name.toLowerCase().includes(search.toLowerCase());
    });
    
  return (
   <div className="wrapper">
      <NavBar />
      <div className="main">
      <Header />
      <Categories
         handleUpdateSubscribes={handleUpdateSubscribes}
         addActivity={addActivity}
         categories={categories}
         categoriesToDisplay={categoriesToDisplay}
         search={search} 
         onSearch={setSearch}
         handleDeleteActivity={handleDeleteActivity}
         activities={activities}
         />
      <AddNewCategory 
        addCategories={addCategories}
      />
      <AboutUs />
      </div>
    </div>
  )
}

export default App;
