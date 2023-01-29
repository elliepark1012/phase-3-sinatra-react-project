class AddParticipantsToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :participants, :integer
  end
end
