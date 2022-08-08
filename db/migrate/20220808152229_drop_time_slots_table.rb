class DropTimeSlotsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :time_slots
  end
end
