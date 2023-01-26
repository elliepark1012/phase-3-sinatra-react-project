class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/events" do 
    events = Event.all
    events.to_json
  end

end
