class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :time
      t.string :location 
      t.string :about
      t.integer :category_id 
    end 
  end
end
