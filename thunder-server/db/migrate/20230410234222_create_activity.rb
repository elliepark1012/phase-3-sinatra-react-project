class CreateActivity < ActiveRecord::Migration[6.1]
  def change 
    create_table :activities do |t|
      t.string :name
      t.string :location
      t.string :about
      t.integer :category_id
      t.string :image_url
      t.integer :participants
    end
  end 
end
