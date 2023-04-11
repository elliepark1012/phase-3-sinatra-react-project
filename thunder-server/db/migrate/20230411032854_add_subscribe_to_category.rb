class AddSubscribeToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :subscribe, :integer
  end
end
