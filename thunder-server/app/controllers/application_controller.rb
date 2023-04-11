class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/categories" do 
    categories = Category.all  
    categories.to_json(include: :activities)
  end

  #create a new category 
  post "/categories" do
    new_category = Category.create(name: params[:name])
    new_category.to_json(include: :activities)
  end 
  
  #create a new activity 
  post "/categories/:category_id/activities" do
    category = Category.find_by(id: params[:category_id])
    new_activity = category.activities.create(activity_params)
    new_activity.to_json(include: :category)
  end

  #update category's subscribes 
  patch "/categories/:id" do
    category = Category.find(params[:id])
    category.update(subscribe: params[:subscribe])
    category.to_json
  end
  
  
  #delete activities  
  delete "/activities/:id" do
    activity = Activity.find(params[:id])
    activity.destroy
    activity.to_json
  end

  private 

  def activity_params 
    {
    name: params[:name],
    location: params[:location],
    image_url: params[:image_url],
    participants: params[:participants],
    about: params[:about],
    category_id: params[:category_id]
    }
end 

end 