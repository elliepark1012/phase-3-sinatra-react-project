const EachActivity = ( {
    handleUpdateActivity,
    handleDeleteActivity,
    activity
}) => {
    function deletedActivity() {
        fetch(`http://localhost:9292/activities/${activity.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((r) => r.json())
          .then(() => handleDeleteActivity(activity));
      }
  
      function updatedActivity() {
        const addParticipants = {
          participants: activity.participants + 1,
        };
        console.log(activity)
        fetch(`http://localhost:9292/activities/${activity.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" 
          },
          body: JSON.stringify(addParticipants), 
          })
          .then((r) => r.json())
          .then(handleUpdateActivity);
      }

    return <>
        <button className="list-button" onClick={updatedActivity}>I want to join!</button>
            <button className="list-button" onClick={deletedActivity}>I'm Not Interested</button>
    </>
}
export default EachActivity;