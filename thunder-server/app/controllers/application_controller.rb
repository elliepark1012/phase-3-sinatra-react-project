class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/events" do 
    events = Event.all.order(:created_at)    
    events.to_json
  end

  post "/events" do
    event = Event.create(
      name: params[:name],
      location: params[:location],
      image_url: params[:image_url],
      participants: params[:participants],
      about: params[:about],
      category_id: params[:category_id])
    event.to_json
  end

  patch "/events/:id" do
    event = Event.find(params[:id])
    event.update(participants: params[:participants])
    event.to_json
  end

  delete "/events/:id" do
    event = Event.find(params[:id])
    event.destroy
    event.to_json
  end
end 